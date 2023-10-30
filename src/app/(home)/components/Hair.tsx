import Image from "next/image"

function Hair() {
    return (
        <div className="my-24 flex flex-col lg:flex-row gap-4">
            <div className="">
                <h1 className="text-2xl font-semibold">Haircuts</h1>
                <h4 className="text-gray-500 mb-4">Transform Your Look with Expert Styling</h4>
                <p>At Stylioo, our skilled hairstylists are dedicated to enhancing your natural beauty and confidence with precision haircuts that suit your individual style. Whether you are seeking a bold transformation or a subtle refinement, our professionals are here to provide you with the perfect cut. Here are some of the popular haircut types we offer</p>
                <ul>
                    <li>Classic Bob</li>
                    <li>Pixie Cut</li>
                    <li>Long Layers</li>
                    <li>Blunt Cut</li>
                    <li>Shaggy Layers</li>
                    <li>Undercut</li>
                    <li>Asymmetrical Cut</li>
                    <li>French Crop</li>
                </ul>
            </div>
            <div>
                <Image
                    width={1920}
                    height={1280}

                    src='https://stylioo.blob.core.windows.net/images/hair.jpg'
                    alt="Haircut"
                />
            </div>
        </div>
    )
}

export default Hair