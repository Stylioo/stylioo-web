import BtnLoading from "@/components/BtnLoading"
import Dialog from "@/components/Dialog"

function CancelDialog({ isOpen = false, onClose, onOk, isLoading = false }: { isOpen: boolean, onClose: () => void, onOk: () => any, isLoading?: boolean }) {
    return (
        <Dialog
            isOpen={isOpen}
        >
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-2xl font-bold mb-4">Cancel Appointment</h1>
                <p className="text-center">Are you sure you want to cancel this appointment?</p>
                <div className="flex justify-center items-center mt-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
                        onClick={onClose}
                    >Cancel</button>
                    <button className="bg-blue-600 w-[100px] text-white px-4 py-2 rounded-md"
                        onClick={onOk}
                    >{isLoading ? <BtnLoading /> : "Confirm"}</button>
                </div>
            </div>
        </Dialog>
    )
}

export default CancelDialog