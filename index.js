import { getAllAvailbleVaccine } from "./src/services/Slots.js";
import { scheduleMaxAvailableSlot } from "./src/services/Schedule.js";

(async function great() {
    const slots = await getAllAvailbleVaccine()
    if (slots.length !== 0) {
        console.log(slots);
        const res = await scheduleMaxAvailableSlot(slots);
        if (!res.appointment_id) {
            console.log("Something went wrong in scheduling. Response: ", res.toString());
        } else {
            console.log("Appointment bookes successfully!! Appointment Id = ", res.appointment_id);

        }
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
