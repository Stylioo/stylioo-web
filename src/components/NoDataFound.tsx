import Link from 'next/link'
import React from 'react'

function NoDataFound() {
    return (
        <div className='h-[50vh] flex flex-col justify-center items-center'>
            <p className='text-xl font-semibold text-gray-600'>No Data Found.</p>
            <p className='text-sm text-gray-600'>
                Make a new appointment <Link href='/new' className='text-blue-400'>here</Link> or try again later.
            </p>
        </div>
    )
}

export default NoDataFound