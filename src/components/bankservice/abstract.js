import { nanoid } from "nanoid";
import { top_icon_1, top_icon_2, top_icon_3, top_icon_4, bottom_icon_1, bottom_icon_2, bottom_icon_3, bottom_icon_4 } from "../../assets";

export const TopContainerData = [
    {
        id: nanoid(),
        title: 'Managing Personal Finances',
        icon: { src: top_icon_1 },
    },
    {
        id: nanoid(),
        title: 'Saving for the Future',
        icon: { src: top_icon_2 },
    },
    {
        id: nanoid(),
        title: 'Homeownership',
        icon: { src: top_icon_3 },
    },
    {
        id: nanoid(),
        title: 'Education Funding',
        icon: { src: top_icon_4 },
    },
]

export const BottomContainerData = [
    {
        id: nanoid(),
        title: 'Startups and Entrepreneurs',
        icon: {src: bottom_icon_1}
    },
    {
        id: nanoid(),
        title: 'Cash Flow Management',
        icon: {src: bottom_icon_2}
    },
    {
        id: nanoid(),
        title: 'Business Expansion',
        icon: {src: bottom_icon_3}
    },
    {
        id: nanoid(),
        title: 'Payment Solutions',
        icon: {src: bottom_icon_4}
    },
]

export const TopPercentageData = [
    {
        id: nanoid(),
        percentage: '78%',
        title:'Secure Retirement Planning'
    },
    {
        id: nanoid(),
        percentage: '63%',
        title:'Manageable Debt Consolidation'
    },
    {
        id: nanoid(),
        percentage: '91%',
        title:'Reducing financial burdens'
    }
]
export const BottomPercentageData = [
    {
        id: nanoid(),
        percentage: '65%',
        title:'Cash Flow Management'
    },
    {
        id: nanoid(),
        percentage: '70%',
        title:'Drive Business Expansion'
    },
    {
        id: nanoid(),
        percentage: '45%',
        title:'Streamline payroll processing'
    }
]