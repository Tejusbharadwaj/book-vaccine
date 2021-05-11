import { getAllAvailbleVaccine } from "./src/services/Slots.js";
import { scheduleMaxAvailableSlot } from "./src/services/Schedule.js";
import { login, getToken } from "./src/services/Auth.js"

(async function great() {
    // const txnId = await login();
    // const token = await getToken("123", txnId)
    const slots = await getAllAvailbleVaccine()
    if (slots.length !== 0) {
        console.log(slots);
        const res = await scheduleMaxAvailableSlot(slots);
        if (!res.appointment_id) {
            console.log("Something went wrong in scheduling. Response: ", res.toString());
        } else {
            console.log("Appointment bookes successfully!! Appointment Id = ", res.appointment_id);

        }
        console.log(slots[0].pincode);
        // return (
        //     <div className="">
        //         {slots.map((slotItem) => (
        //             <div>
        //                 {slotItem.center.name} | Available: {slotItem.session.available_capacity} | <button onClick={() => bookSlot(slotItem)}>{slotItem.session.slots[0]}</button>
        //                 <br />
        //                 <br />
        //             </div>
        //         ))}
        //     </div>
        // );
    } else {
        console.log("There are no available slots right now")
        // return (
        //     <div className="">
        //         There are no available slots right now
        //     </div>
        // );
    }
})();
