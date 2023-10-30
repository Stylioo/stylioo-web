import Section from '@/components/Section'
import Image from 'next/image'
import { beauticians } from '@/data/services';

function Experts() {
    return (
        <>
            <Section
                className='min-h-screen'
            >
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <h1 className='text-3xl font-bold text-black'>Our Experts</h1>
                    <h2 className='text-sm font-semibold text-gray-500 mb-4'>We have more than 12 experts in hair and beauty</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
                        {beauticians.map(beautician => (
                            <div key={beautician.id} className="flex flex-col items-center justify-center p-4">
                                <Image className='w-[150px] rounded-full mb-2' width="200" height="200" src={beautician.image} alt={beautician.name} />
                                <p className='text-sm font-semibold text-gray-500 mt-2 break-words'>{beautician.name}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </Section>
        </>

    )
}

export default Experts