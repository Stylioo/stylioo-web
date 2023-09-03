import '@/styles/loadingSpinner.scss'
function Loading() {
    return (
        <div className="w-full min-h-[100px] md:min-h-[200px] lg:min-h-[300px] flex justify-center items-center">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading