import React from 'react'

const Percentages = ({percentage, title}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-1 w-[182px] h-[146px]'>
        <p className='text-primary_green-60 text-[58px] leading-1.5 font-medium text-left'>{percentage}</p>
        <p className='text-primary_dark_gray-70 text-[18px] leading-1.5 font-light text-left'>{title}</p>
    </div>
  )
}

export default Percentages