import Section from "@/components/Section";
import "@/styles/newAppointment.scss"

function SelectService() {
    return (
        <>
            <h2 className="font-bold text-2xl mb-4">Select Services</h2>
            <div className="flex gap-2 overflow-y-auto hidden-scroll-bar ">
                <div className="flex min-w-fit cursor-grab">
                    <input name="type" type="radio" id="wedding" className="hidden t-check-box" />
                    <label htmlFor="wedding" className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">Weddings</label>
                </div>

                <div className="flex min-w-fit">
                    <input name="type" type="radio" id="treatment_1" className="hidden t-check-box" />
                    <label htmlFor="treatment_1" className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">Treatment group 1</label>
                </div>

                <div className="flex min-w-fit">
                    <input name="type" type="radio" id="treatment_2" className="hidden t-check-box" />
                    <label htmlFor="treatment_2" className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">Treatments group 2</label>
                </div>

                <div className="flex min-w-fit">
                    <input name="type" type="radio" id="treatment_3" className="hidden t-check-box" />
                    <label htmlFor="treatment_3" className="cursor-grab px-4 py-2 border-2 min-w-fit rounded-2xl text-sm t-label">Treatments group 2</label>
                </div>
            </div>
        </>
    )
}

export default SelectService