import { nanoid } from 'nanoid'
import React from 'react'
import JobsCard from './JobsCard'

const JobCard = [
    {
        id: nanoid(),
        title_1: "Relationship Manager",
        title_2: "About This Job",
        title_3: "Requirements & Qualifications",
        location: "Location: India",
        depertment: " Department: Retail Banking",
        qualification_1: "Bachelor's degree in Business, Finance, or a related field",
        qualification_2: "Minimum of 3 years of experience in sales or relationship management in the banking industry",
        qualification_3: "Proven track record of meeting and exceeding sales targets",
        qualification_4: "Excellent interpersonal and negotiation skills",
        qualification_5: "Strong knowledge of banking products and services",
        description: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service."
    },
    {
        id: nanoid(),
        title_1: "Relationship Manager",
        title_2: "About This Job",
        title_3: "Requirements & Qualifications",
        location: "Location: India",
        depertment: " Department: Retail Banking",
        qualification_1: "Bachelor's degree in Business, Finance, or a related field",
        qualification_2: "Minimum of 3 years of experience in sales or relationship management in the banking industry",
        qualification_3: "Proven track record of meeting and exceeding sales targets",
        qualification_4: "Excellent interpersonal and negotiation skills",
        qualification_5: "Strong knowledge of banking products and services",
        description: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service."
    },
    {
        id: nanoid(),
        title_1: "Relationship Manager",
        title_2: "About This Job",
        title_3: "Requirements & Qualifications",
        location: "Location: India",
        depertment: " Department: Retail Banking",
        qualification_1: "Bachelor's degree in Business, Finance, or a related field",
        qualification_2: "Minimum of 3 years of experience in sales or relationship management in the banking industry",
        qualification_3: "Proven track record of meeting and exceeding sales targets",
        qualification_4: "Excellent interpersonal and negotiation skills",
        qualification_5: "Strong knowledge of banking products and services",
        description: "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service."
    }
]

const Jobs = () => {
  return (
    <div className='container max-w-[1596px] mt-[150px]' >
        <div>
            <h2 className='text-[48px] leading-1.5 font-medium text-start text-primary_green-60'>Job Openings</h2>
            <p className='text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start max-w-[1296px]'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
        </div>
        <div className='flex items-center flex-wrap gap-[30px]'>
            {
                JobCard.map((item) => (
                    <JobsCard key={item.id} {...item}  />
                ))
            }
        </div>
    </div>
  )
}

export default Jobs