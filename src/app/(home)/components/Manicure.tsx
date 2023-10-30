import Image from 'next/image'

function Manicure() {
    return (
        <div className="my-24 flex flex-col lg:flex-row gap-4">
            <div className="">
                <h1 className="text-2xl font-semibold">Manicures</h1>
                <h2 className="text-gray-500 mb-4">Elevate Your Style with Immaculate Nails</h2>
                <p>At Stylioo, we understand that attention to detail can make a world of difference in your overall appearance. Our dedicated nail technicians specialize in providing exceptional manicure services that leave your hands looking elegant and perfectly groomed. Whether you are preparing for a special occasion or simply treating yourself to a bit of self-care, our professionals are committed to enhancing the natural beauty of your nails. Choose from a range of manicure types that we offer</p>
                <ul>
                    <li>Classic Manicure</li>
                    <li>French Manicure</li>
                    <li>Gel Manicure</li>
                    <li>Paraffin Manicure</li>
                </ul>
            </div>
            <Image
                width={1920}
                height={1280}
                className='w-[400px]'
                src='https://stylioo.blob.core.windows.net/images/menicure.jpg'
                alt="manicures"
            />
        </div>
    )
}

export default Manicure