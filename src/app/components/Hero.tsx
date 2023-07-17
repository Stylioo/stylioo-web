import AppContainer from "@/components/AppContainer"

function Hero() {
    return (
        <div className="bg-cover bg-red-500 bg-center h-[27rem]">
            <AppContainer>
                <h1 className="text-4xl text-white font-bold">Stylioo</h1>
                <p className="text-xl text-white">Embrace the style</p>
            </AppContainer>
        </div>
    )
}

export default Hero