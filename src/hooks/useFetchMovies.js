import { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    doc, getDoc
} from 'firebase/firestore';
import { database } from '../firebase/config'


export function useFetchMovies({ fieldToOrderBy, isDescending = false }) {
    const [movies, setMovies] = useState([]);



    useEffect(() => {
        async function fetchMovies() {
            const collectionRef = collection(database, 'films')
            const movieQuery = query(collectionRef, (orderBy(fieldToOrderBy, isDescending ? 'desc' : 'asc')))
            onSnapshot(movieQuery, async (querySnapshot) => {
                setMovies(
                    await Promise.all(querySnapshot.docs.map(async (document) => {
                        let movie = document.data()
                        let userRef = doc(database, 'users', movie.user);
                        let userSnap = await getDoc(userRef)
                        return userSnap.exists() ? {
                            id: document.id,
                            ...movie,
                            user: userSnap.data()
                        } : {
                            id: document.id,
                            ...movie,
                        }
                    }))
                )
            })
        }
        fetchMovies()
    }, [fieldToOrderBy, isDescending])

    return { movies }
}