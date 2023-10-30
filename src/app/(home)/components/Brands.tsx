import Section from '@/components/Section'
import Image from 'next/image'

const brands = [
    {
        src: 'https://stylioo.blob.core.windows.net/images/gelish.svg',
        name: 'Gelish',
        id: 1
    },
    {
        src: 'https://stylioo.blob.core.windows.net/images/maria-nila.svg',
        name: 'Maria Nila',
        id: 2
    },
    {
        src: 'https://stylioo.blob.core.windows.net/images/olaplex.svg',
        name: 'Olaplex',
        id: 3
    },
    {
        src: 'https://stylioo.blob.core.windows.net/images/wahl.svg',
        name: 'Wahl',
        id: 4
    },
    {
        src: 'https://stylioo.blob.core.windows.net/images/wella.svg',
        name: 'Wella',
        id: 5
    },
    {
        src: 'https://stylioo.blob.core.windows.net/images/XP.svg',
        name: 'XP',
        id: 6
    }
]

function Brands() {
    return (
        <>
            <Section
                className='min-h-screen'
            >
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <h1 className='text-3xl font-bold text-black'>Brands</h1>
                    <h2 className='text-sm font-semibold text-gray-500 mb-4'>We use only the best products</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
                        {
                            brands.map(brand => (
                                <div key={brand.id} className="flex items-center justify-center p-4">
                                    <Image className='w-[150px]' width="200" height="200" src={brand.src} alt={brand.name} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Section>
        </>

    )
}

export default Brands