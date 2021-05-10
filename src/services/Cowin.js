import { getUrl } from "./ApiBase.js";
import { getConfig } from "../utils.js";
import moment from "moment";
import lo from "lodash";
const config = getConfig();

async function getVaccineCenters() {
    const date = moment(new Date()).format("DD-MM-YYYY");
    const url = config.api.search + `&date=${date}`
    const headers = {
        "Accept": "application/json",
        "Accept-Language": "hi_IN",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
    };
    const res = await (await getUrl(url, { headers: headers })).data;
    return res
}

export async function getAllAvailbleVaccine() {
    var availableSlots;
    const vaccineSlots = await getVaccineCenters();
    availableSlots = getAllCentersAgeWithAvailableSlots(vaccineSlots.centers);
    if (config.type != "" && availableSlots.length !== 0) {
        availableSlots = getSlotsPerVaccineType(availableSlots);
    }
    return availableSlots;
}

function getAllCentersAgeWithAvailableSlots(responses) {
    const age = config.age;
    const slots = responses.filter(item => lo.some(item.sessions, (i => i.min_age_limit === age && i.available_capacity > 0)));
    return slots;
}

function getSlotsPerVaccineType(availableSlots) {
    if (config.type !== 'covaxin' && config.type !== 'covishield' && config.type !== 'both') {
        console.error("Invalid vaccine type ", config.type);
        process.exit(1);
    }
    return availableSlots.filter(item => lo.some(item.sessions, { vaccine: config.type }))
}
