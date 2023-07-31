import Image from 'next/image'
import AppContainer from '@/components/AppContainer'

import HareDresser from '@/assets/images/icons8-hairdresser-100.png'
import Chair from '@/assets/images/icons8-barber-chair-100.png'
import Products from '@/assets/images/icons8-perfume-100.png'


function InformationBar() {
    return (
        <>
            <AppContainer
                className=''
            >
                <div className='flex flex-col md:flex-row items-center justify-center w-full h-full gap-4'>

                    <div className="min-h-[250px] md:min-h-[350px] lg:min-h-[250px]  w-full p-8 flex flex-col justify-center items-center gap-4 border-b-2 border-red-400 md:border-b-0 md:border-r-2">
                        <Image
                            width='100'
                            height='100'
                            className='w-14'
                            src={HareDresser}
                            alt='expret' />
                        <h5 className="font-extrabold text-center">EXPREST BEAUTICIANS</h5>
                        <p
                            className='text-center text-gray-700 text-sm font-medium max-w-[500px]'
                        >
                            Our team of expert beauticians ensures that your beauty aspirations are brought to life with skillful precision and personalized care.</p>
                    </div>
                    <div className="min-h-[250px] md:min-h-[350px] lg:min-h-[250px]  w-full p-8 flex flex-col justify-center items-center gap-4 border-b-2 border-red-400 md:border-b-0 md:border-r-2">
                        <Image
                            width='100'
                            height='100'
                            className='w-14'
                            src={Chair}
                            alt='expret' />
                        <h5 className="font-extrabold text-center">QUALITY SERVICE</h5>
                        <p
                            className='text-center text-gray-700 text-sm font-medium max-w-[500px]'
                        >We take pride in delivering unparalleled quality service, leaving you feeling pampered and delighted with every visit.</p>
                    </div>
                    <div className="min-h-[250px] md:min-h-[350px] lg:min-h-[250px]  w-full p-8 flex flex-col justify-center items-center gap-4">
                        <Image
                            width='100'
                            height='100'
                            className='w-14'
                            src={Products}
                            alt='expret' />
                        <h5 className="font-extrabold text-center">BEAUTY PRODUCTS</h5>
                        <p
                            className='text-center text-gray-700 text-sm font-medium max-w-[500px]'
                        >We exclusively use premium and trusted beauty products to enhance your natural radiance and nurture your skin, hair, and nails.</p>
                    </div>
                </div>
            </AppContainer>
        </>

    )
}

export default InformationBar