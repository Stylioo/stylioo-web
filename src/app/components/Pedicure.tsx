import Image from "next/image"
function Pedicure() {
  return (
    <div className="my-24 flex flex-col lg:flex-row gap-4">
      <div className="">
        <h1 className="text-2xl font-semibold">Pedicures</h1>
        <h2 className="text-gray-500 mb-4">Step into Comfort and Style at Stylioo</h2>
        <p>At Stylioo, we offer a range of pedicure treatments designed to provide relaxation and enhance the beauty of your feet. Our experienced pedicurists are committed to giving you an enjoyable and rejuvenating experience. Choose from various pedicure types we provide:</p>
        <ul>
          <li>Classic Pedicure</li>
          <li>French Pedicure</li>
          <li>Gel Pedicure</li>
          <li>Paraffin Pedicure</li>
          <li>Spa Pedicure</li>
        </ul>
      </div>
      <div>
        <Image
          width={1920}
          height={1280}
          // className='w-[400px]'

          src='https://stylioo.blob.core.windows.net/images/pedicure.jpg'
          alt="pedicures"
        />
      </div>
    </div>
  )
}

export default Pedicure