import Container from '@/components/Container'
import { newAppointmentStepPropType } from '@/types'
import { AiOutlineArrowLeft, AiOutlineSearch, AiOutlineLeft, AiOutlineRight, } from "react-icons/ai";

import { useEffect, useRef, useState } from "react";

import listOfDays from '@/utils/listOfDays'
import generateTimeIntervals from '@/utils/listOfTimeWithIntervals'

import { useAppSelector, useAppDispatch } from "@/redux/store"
import { setDate, setStartTime } from '@/redux/features/cartSlice';
import formatNumber from '@/utils/formatNumber';
import axios from '@/axios';
import moment from 'moment';
import Loading from '@/components/Loading';
import { covertMinToHMin } from '@/utils/covertMinToHMin';

const workingHours = 8
function SelectTime({ step, handleNext, handleBack }: newAppointmentStepPropType) {

  const dispatch = useAppDispatch()
  let cart = useAppSelector(state => state.cart)

  const serviceRef = useRef<HTMLDivElement>(null)

  const handleScrollLeft = () => {
    serviceRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
  }
  const handleScrollRight = () => {
    serviceRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
  }

  const [timeMatrix, setTimeMetrix] = useState<any>([])
  const [dateMatrix, setDateMatrix] = useState<any>([])

  const handleDaySelect = (e: any) => {
    dispatch(setDate(e.target.id))
    const tm = generateTimeMetrix(e.target.id)
    setTimeMetrix(tm)
  }

  const handleTimeSelect = (e: any) => {
    dispatch(setStartTime(e.target.value))
  }


  const [datesAndTimes, setDatesAndTimes] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getAppointmentDateAndTimeByBeautician = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`/appointment/dateAndTime/${cart.beautician.id}`)
      if (response.data.success) {
        setDatesAndTimes(response.data.data)
        setDateMatrix(generateDateMatrix(response.data.data))
        setTimeMetrix(generateTimeMetrix(moment().add(1, 'days').format('YYYY-MM-DD')))
      } else {
        setDatesAndTimes([])
        setDateMatrix(generateDateMatrix([]))
        setTimeMetrix(generateTimeMetrix(moment().add(1, 'days').format('YYYY-MM-DD')))
      }
    } catch (err) {
      setDatesAndTimes([])
      setDateMatrix(generateDateMatrix([]))
      setTimeMetrix(generateTimeMetrix(moment().add(1, 'days').format('YYYY-MM-DD')))
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (cart.beautician.id !== 'any') {
      const d = getAppointmentDateAndTimeByBeautician()
    }
  }, [])



  const generateDateMatrix = (datesAndTimes: any) => {
    let dateMatrix = listOfDays()

    console.log(datesAndTimes);
    if (datesAndTimes.length === 0) {

      return dateMatrix
    } else {
      let temp = dateMatrix.map((date: any) => {
        // console.log(date);

        let totalDeuration = 0
        datesAndTimes.forEach((dateAndTime: any) => {

          if (moment(dateAndTime?.appointment_date).format('YYYY-MM-DD') === date.key) {
            totalDeuration += parseInt(dateAndTime?.duration)
          }
        })

        if (totalDeuration >= workingHours * 60) return { ...date, isDisabled: true }
        return { ...date, isDisabled: false }
      })

      return temp
    }
  }


  const generateTimeMetrix = (date: string) => {
    let timeMatrix = generateTimeIntervals()

    const obj = datesAndTimes.filter((dateAndTime: any) => moment(dateAndTime?.appointment_date).format('YYYY-MM-DD') === date)
    if (obj === null) return timeMatrix

    obj.forEach((dateAndTime: any) => {
      const slots = parseInt(dateAndTime?.duration) / 15
      const index = timeMatrix.findIndex((time: any) => time.time === (dateAndTime?.start_time || ''))
      for (let i = 0; i < slots; i++) {
        if (index + i >= 40) break
        timeMatrix[index + i] = { ...timeMatrix[index + i], isDisabled: true }
      }

    })
    return timeMatrix
  }


  return (
    <>
      <div className="sticky top-14 bg-white z-[100] shadow-md lg:shadow-none">
        <Container
          style={{
            paddingTop: '1.5rem ',
            paddingBottom: '0.5rem ',
          }}
        >
          <div className="flex justify-between mb-6">
            <h2 className="font-bold text-2xl mb-2">Select Date & Time</h2>
            <h3 className="font-medium text-md text-gray-600 mb-2 flex gap-3 items-center">
              <AiOutlineArrowLeft
                className="cursor-pointer font-bold text-xl"
                onClick={handleBack}
              />
              <span>STEP <span className="inline-block w-[12px] text-center">{step}</span> OF 4</span></h3>
          </div>

          <div className="flex gap-4 pb-4 overflow-y-auto hidden-scroll-bar ">
            <button
              className="rounded-full flex justify-center items-center p-3 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={handleScrollLeft}
            >
              <AiOutlineLeft />
            </button>
            <div ref={serviceRef} className="flex gap-2 h-[80px] overflow-y-auto hidden-scroll-bar ">

              {
                dateMatrix.map((d: any, index: number) => {
                  const [date, month] = d.title.split(' ')

                  return (
                    <div key={index} className="flex min-w-fit cursor-grab">
                      <input name="date" type="radio" id={d.key} className='hidden t-check-box' onChange={handleDaySelect}
                        checked={cart.date === d.key}
                      // disabled={d.isDisabled}
                      />
                      <label htmlFor={d.key} className={`px-4 py-2 border-2 h-full flex flex-col justify-center gap-1 items-center  min-w-[100px] rounded-2xl text-sm t-label`}>
                        <p className='font-bold text-2xl'>{date}</p>
                        <p className='text-sm'>{month}</p>
                      </label>
                    </div>
                  )
                })
              }

              <div className="flex min-w-fit cursor-grab">
                <input name="date" type="radio" id="custom" className="hidden t-check-box" />
                <label htmlFor="custom" className="cursor-grab px-4 py-2 border-2 h-full flex flex-col justify-center items-center  min-w-[100px] rounded-2xl text-sm border-blue-500 t-label">
                  <p className='font-semibold'>Custom Date</p>
                  <p className='text-[10px] text-gray-500'>Select a custom date</p>
                </label>
              </div>

            </div>
            <button
              className="rounded-full flex justify-center items-center p-3 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={handleScrollRight}
            >
              <AiOutlineRight />
            </button>
          </div>

        </Container >
      </div >

      <Container>


        <div className="rounded-lg min-h-[175px] lg:min-h-[250px]  border-gray-300 lg:mt-16">
          {
            isLoading ? <Loading /> :
              <div className="time-grid">
                {

                  timeMatrix.map((TimeWithInterval: any, index: number) => {
                    const [time, ampm] = TimeWithInterval.time.split(' ')
                    return (
                      <div key={index} className="flex flex-col gap-2">
                        <input name="time" type="radio" id={`time-${time}`} value={`${time} ${ampm}`} className="hidden t-check-box" onChange={handleTimeSelect}
                          disabled={TimeWithInterval.isDisabled}
                          checked={cart.startTime === `${time} ${ampm}`}
                        />
                        <label htmlFor={`time-${time}`} className={`cursor-grab px-4 py-2 border-2 h-full flex flex-col justify-center items-center  min-w-[100px] rounded-2xl text-sm t-label ${TimeWithInterval.isDisabled ? 'cursor-not-allowed opacity-40' : 'cursor-grab hover:border-blue-500'}`}>
                          <p className='font-bold text-md'>{time}</p>
                          <p className='text-sm'>{ampm}</p>
                        </label>
                      </div>
                    )
                  })
                }
              </div>
          }
        </div>
      </Container >
      <div className="min-h-[120px]"></div>
      <div className="min-h-[100px] fixed bottom-0 left-0 right-0 bg-white box-shadow ">
        <div className="max-w-7xl lg:mx-auto flex justify-between items-end w-full px-6 py-4 ">
          <div className="flex flex-col gap-1">
            <p className="text-sm ">{cart.services.length > 0 ? cart.services.length : "No"} Service {
              cart.services.length > 0 &&
              " - (ET) " + covertMinToHMin(cart.services.reduce((acc: number, item: any) => acc + item.duration, 0))
            }</p>
            <p className="font-bold text-xl">{cart.totalPrice === 0 ? "-" : `LKR ${formatNumber(cart.totalPrice)}`}</p>
          </div>
          <button
            className="px-6 py-2 bg-blue-700 hover:bg-blue-600 transition duration-300 ease-in-out text-white rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default SelectTime