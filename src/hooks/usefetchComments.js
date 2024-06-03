import { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    doc, getDoc
} from 'firebase/firestore';
import { database } from '../firebase/config'

export function useFetchComments(id){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchComments() {
            const collectionRef = collection(database, `films/${id}/comments`)
            const commentsQuery = query(collectionRef, (orderBy('createdAt', 'desc')))
            onSnapshot(commentsQuery, async (querySnapshot) => {
                setComments(
                    await Promise.all(querySnapshot.docs.map(async (document) => {
                        let comment = document.data()
                        console.log(comment, comment.userId)
                        let userRef = doc(database, 'users', comment.userId);
                        let userSnap = await getDoc(userRef)
                        return userSnap.exists() ? {
                            id: document.id,
                            ...comment,
                            user: userSnap.data()
                        } : {
                            id: document.id,
                            ...comment,
                        }
                    }))
                )
            })
        }
        fetchComments();
    },[id])

    return {comments}
}