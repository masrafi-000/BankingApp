
import { text } from "../../assets";
import { nanoid } from "nanoid";

export const cardData = [
    {
        id: nanoid(),
        icon: { src: text },
        description: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
        title: "Sara T",
    },
    {
        id: nanoid(),
        icon: { src: text },
        description: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable. ",
        title: "John Doe",
    },
    {
        id: nanoid(),
        icon: { src: text },
        description: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
        title: "Emily G",
    },
]