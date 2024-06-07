import { Timestamp } from "firebase/firestore"

export interface Film {
    views:number
    videoUrl: string
    scriptUrl: string
    image: string
    title: string
    englishTitle: string
    description: string
    englishDescription: string
    createdAt: Timestamp
    genre: string
    moneygoal: number
    collected : number
    user: string
}