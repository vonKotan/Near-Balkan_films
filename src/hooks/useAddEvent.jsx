import { database, storage } from '../firebase/config';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUploadImage } from './useUploadImage';


export const useAddEvent = () => {

    const uploadEvent = async (event) => {
        const imageUrls = []
        event.images.forEach(async (image, index) => {
            const path = `images/${event.title}_${index}`
            const storageRef = ref(storage, path)
            const snapshot = await uploadBytes(storageRef, image);
            imageUrls.push(getDownloadURL(snapshot))
        });
        event.images = imageUrls
        const videoPath = `images/${event.title}_video`
        const storageRef = ref(storage, videoPath)
        const snapshot = await uploadBytes(storageRef, event.video[0]);
        event.video = getDownloadURL(snapshot);

        const docRef = collection(database, 'events');
        await addDoc(docRef, event);
    }



    return {uploadEvent}
}