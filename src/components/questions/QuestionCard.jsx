import React from 'react'

const QuestionCard = ({question, answer }) => {
  return (
    <div className='flex flex-col items-start justify-center gap-[30px] w-[782.5px] h-[347px] p-[50px] border-[1px] border-primary_dark_gray-15 rounded-[14px]' >
        <h2 className='text-xl font-medium text-absulate_white '>{question}</h2>
        <span className='w-full border-t-[1px] border-primary_dark_gray-15 '></span>
        <p className='text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start'>{answer}</p>
    </div>
  )
}

export default QuestionCard