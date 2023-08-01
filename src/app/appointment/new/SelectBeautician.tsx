import Container from '@/components/Container'
import { newAppointmentStepPropType } from '@/types'
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import Image from 'next/image';
import { beauticians } from '@/data/services';
import DefaultBeauticians from '@/assets/images/icons8-team-64.png';

function SelectBeautician({ step, handleBack }: newAppointmentStepPropType) {
    return (
        <>
            <div className="sticky top-14 bg-white z-[100]">
                <Container
                    style={{
                        paddingBlock: '1.5rem '
                    }}
                >
                    <div className="flex justify-between mb-6">
                        <h2 className="font-bold text-2xl">Select Beautician</h2>
                        <h3 className="font-medium text-md text-gray-600 mb-2 flex gap-3 items-center">
                            <AiOutlineArrowLeft
                                className="cursor-pointer font-bold text-xl"
                                onClick={handleBack}
                            />
                            <span>STEP <span className="inline-block w-[12px] text-center">{step}</span> OF 4</span></h3>

                    </div>
                    <div className="flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-16">
                        <div className=" flex lg:min-w-[400px] mb-2">
                            <input type="text" className=" border rounded-l-lg px-4 grow border-r-0 search-box" placeholder="Search" />
                            <button className="border border-l-0 border-red-700 bg-red-700 text-white rounded-r-lg px-4 hover:bg-red-600 hover:border-red-600 transition duration-300 ease-in-out" ><AiOutlineSearch className="text-xl" /></button>
                        </div>
                    </div>
                </Container >
            </div >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="">
                        <input type="radio" name="beautician" id="any" className="hidden beautician-check-box" />
                        <label htmlFor="any" className="flex gap-4 border-2 rounded-xl hover:shadow transition duration-100 ease-in-out p-4 cursor-pointer beautician-label">
                            <Image width="64" height="64" className="rounded-xl" src={DefaultBeauticians} alt=""></Image>
                            <div className="">
                                <h4 className="text-xl font-bold">No Preference</h4>
                                <p className='text-md text-gray-600'>Maximum availability</p>
                            </div>
                        </label>
                    </div>
                    {
                        beauticians.map((beautician, index) => (
                            <div key={index}>
                                <input type="radio" name="beautician" id={beautician.id} className="hidden beautician-check-box" />
                                <label htmlFor={beautician.id} className="flex items-center gap-4 border-2 rounded-xl hover:shadow transition duration-100 ease-in-out p-4 cursor-pointer beautician-label">
                                    <Image width="64" height="64" className="rounded-full" src={beautician.image} alt=""></Image>
                                    <div className="">
                                        <h4 className="text-lg font-semibold">{beautician.name}</h4>
                                        <p className='text-sm text-gray-600'>Beautician</p>
                                    </div>
                                </label>
                            </div>
                        ))
                    }
                </div >
            </Container >
        </>
    )
}

export default SelectBeautician