import { getAllAvailbleVaccine } from "./src/services/Slots.js";

(async function great() {
    const slots = await getAllAvailbleVaccine()
    if (slots.length !== 0) {
        console.log(slots);
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
