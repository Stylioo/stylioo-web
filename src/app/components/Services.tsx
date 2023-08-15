import Section from '@/components/Section'
import Hair from './Hair'
import Manicure from './Manicure'
import Pedicure from './Pedicure'
import Facials from './Facials'
function Services() {
    return (
        <>
            <Section
                className='min-h-screen'
            >
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    {/* <h1 className='text-4xl font-bold text-black'>Services</h1> */}
                    <Hair />
                    <Manicure />
                    <Pedicure />
                    <Facials />
                </div>
            </Section>
        </>

    )
}

export default Services