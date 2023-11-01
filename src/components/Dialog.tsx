
function Dialog({ isOpen = false, children }: { isOpen: boolean, children: React.ReactNode }) {
    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[100000] justify-center items-center ${isOpen ? "flex" : "hidden"}`}
        >
            <div className="bg-white w-[500px] h-[200px] shadow-lg rounded-md p4">
                {children}
            </div>
        </div>
    )
}

export default Dialog