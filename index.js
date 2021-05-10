import { getAllAvailbleVaccine } from "./src/services/Cowin.js";
import { getConfig } from "./src/utils.js";

const slots = await getAllAvailbleVaccine()
if (slots.length !== 0) {
    console.log(slots);
} else {
    console.log("There are no available slots right now")
}