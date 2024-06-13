import { database, storage } from '../firebase/config';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUploadImage } from './useUploadImage';


export const useAddEvent = () => {

    const uploadEvent = async (event) => {
        const imageUrls = []
        Array.from(event.images).forEach(async (image, index) => {
            const path = `images/${event.title}_${index}`
            const storageRef = ref(storage, path)
            const snapshot = await uploadBytes(storageRef, image);
            imageUrls.push(await getDownloadURL(snapshot.ref))
        });
        event.images = imageUrls
        const videoPath = `images/${event.title}_video`
        const storageRef = ref(storage, videoPath)
        const snapshot = await uploadBytes(storageRef, event.video[0]);
        event.video = await getDownloadURL(snapshot.ref);

        const docRef = collection(database, 'events');
        console.log(event);
        await addDoc(docRef, {...event, createdAt: Timestamp.now()});
    }



    return {uploadEvent}
}