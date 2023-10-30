import Image from 'next/image'

function Facials() {
  return (
    <div className="my-24 flex flex-col lg:flex-row gap-4">
      <div className="">
        <h1 className="text-2xl font-semibold">Facials</h1>
        <h2 className="text-gray-500 mb-4">Reveal Radiant Skin with Luxurious Treatments</h2>
        <p>At Stylioo, our expert estheticians offer a range of facials that cater to your skin&apos;s unique needs, leaving you with a radiant and refreshed complexion. Experience the rejuvenating power of our facial treatments:</p>
        <ul>
          <li>Classic Facial</li>
          <li>Hydrating Facial</li>
          <li>Anti-Aging Facial</li>
          <li>Acne Control Facial</li>
          <li>Brightening Facial</li>
        </ul>
      </div>
      <div 
      // className="w-[500px]"
      >
        <Image
          width={1920}
          height={1280}
          // className='w-full h-full object-cover'
          src='https://stylioo.blob.core.windows.net/images/facials.jpg'
          alt="Facials"
        />
      </div>
    </div>
  )
}

export default Facials