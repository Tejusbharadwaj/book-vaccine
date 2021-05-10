import { getUrl, postUrl } from "./ApiBase.js";
import { getConfig } from "../utils.js";
import moment from "moment";
import lo from "lodash";
const config = getConfig();

export async function scheduleMaxAvailableSlot(availableSlots) {
    const url = config.api.schedule;
    const session = getsessionId(availableSlots);
    const beneficiaries = await getBeneficiaries();
    // const beneficiaries = ["1234567890123"];
    const body = {
        dose: 1,
        session_id: session.session_id,
        slot: session.slots,
        beneficiaries: beneficiaries,
    }

    const res = (await postUrl(url, body, {})).data;
    return res;
}

function getsessionId(availableSlots) {
    for (const slot of availableSlots)
        for (const session of slot.sessions) {
            if (session.available_capacity >= 3) {
                return { session_id: session.session_id, slots: session.slots[1] };
            }
        };
}

async function getBeneficiaries() {
    const url = config.api.beneficiaries
    // const res = (await getUrl(url, {})).data;
    const res = {
        "beneficiaries": [
            {
                "beneficiary_reference_id": "1234567890123",
                "name": "Rajesh Pawar",
                "birth_year": "1995",
                "gender": "Male",
                "mobile_number": "******1403",
                "photo_id_type": "Driving License",
                "photo_id_number": "********9999",
                "comorbidity_ind": "Y",
                "vaccination_status": "Not Vaccinated",
                "vaccine": "COVISHIELD",
                "dose1_date": "01-03-2021",
                "dose2_date": "29-03-2021",
                "appointments": [
                    {
                        "center_id": 1234,
                        "name": "District General Hostpital",
                        "name_l": "",
                        "address": "45 M G Road",
                        "address_l": "",
                        "state_name": "Maharashtra",
                        "state_name_l": "",
                        "district_name": "Satara",
                        "district_name_l": "",
                        "block_name": "Jaoli",
                        "block_name_l": "",
                        "pincode": "413608",
                        "lat": 28.7,
                        "long": 77.1,
                        "from": "09:00:00",
                        "to": "18:00:00",
                        "fee_type": "Paid",
                        "dose": 1,
                        "appointment_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "session_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "date": "01-03-2021",
                        "slot": "FORENOON"
                    }
                ]
            }
        ]
    }
    const beneficiariesId = lo.map(res.beneficiaries, item => item.beneficiary_reference_id);
    return beneficiariesId;
}