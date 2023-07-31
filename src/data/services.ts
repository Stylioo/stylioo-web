import { time } from "console"

export const serviceCategories = [
    { id: 'grooming', name: 'Grooming' },
    { id: 'interview', name: 'Interview' },
    { id: 'featured', name: 'Featured' },
    { id: 'dermalabs_treatments', name: 'Dermalabs Treatments' },
    { id: 'consultation', name: 'Consultation' },
    { id: 'ladies_hair_cuts', name: 'Ladies Hair cuts' },
    { id: 'featured', name: 'Featured' },
    { id: 'dermalabs_treatments', name: 'Dermalabs Treatments' },
    { id: 'consultation', name: 'Consultation' },
    { id: 'ladies_hair_cuts', name: 'Ladies Hair cuts' },
]

export const services = [
    {
        id: 'Grooming_consultation',
        name: 'Grooming consultation',
        description: "On your big day, you ought to look and be your best! Therefore groom's hair-do, makeup, skincare, and also the selection of a hair style that blends with groom's appearance are the most crucial aspects. Make an appointment with master stylist Surith before the big day to take your grooming to the next level.",
        price: 0,
        categoryId: 'grooming',
        duration: 20,
    },
    {
        id: 'sliver_package',
        name: 'Sliver Package',
        description: "Wedding grooming is essential to get you into top form for the big day. This package includes the groom's haircut, beard, eyebrows, wedding day makeup, hair, and dressing. Pre-consultation is required. A deposit is required to book your date.",
        price: 30000,
        categoryId: 'grooming',
        duration: 90,
    },
    {
        id: 'gold_package',
        name: 'Gold Package',
        description: "Wedding grooming is essential to get you into top form for the big day. This package includes the groom's haircut, beard, eyebrows, wedding day makeup, hairdressing and basic facial. Grooms need some pre-wedding self care, too! Therefore we have added high brand basic facial in this package. 38,000 upwards ( because facial prices can be changed due to the product cost) Pre-consultation is required. A deposit is required to book your date.",
        price: 40000,
        categoryId: 'grooming',
        duration: 120,
    },
    {
        id: 'platinum_package',
        name: 'Platinum Package',
        description: "Wedding grooming is essential to get you into top form for the big day. This package includes the groom's haircut, beard, eyebrows, wedding day makeup, hairdressing and advance facial. Grooms need some pre- wedding self care, too! Therefore we have added high brand advance facial in this package. 45,000 upwards(because facial prices can be changed due to the product cost) Pre - consultation is required.A deposit is required to book your date",
        price: 50000,
        categoryId: 'grooming',
        duration: 150,
    }

]