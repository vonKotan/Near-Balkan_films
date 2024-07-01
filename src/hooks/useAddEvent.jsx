import { database, storage } from '../firebase/config';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


export const useAddEvent = () => {

    const uploadEvent = async (event) => {
        let imageUrls = []
        const images = Array.from(event.images);
        /* Array.from(event.images).forEach(async (image, index) => {
            const path = `images/${event.title}_${index}`
            const storageRef = ref(storage, path)
            const snapshot = await uploadBytes(storageRef, image);
            const url = await getDownloadURL(snapshot.ref);
            console.log(url)
            imageUrls.push(url.toString());
        }); */
        for (let i=0; i< images.length; i++){
            const path = `images/${event.title}_${i}`
            const storageRef = ref(storage, path)
            const snapshot = await uploadBytes(storageRef, images[i]);
            const url = await getDownloadURL(snapshot.ref);
            imageUrls.push(url.toString());
        }
        event.images = imageUrls
        /* const videoPath = `images/${event.title}_video`
        const storageRef = ref(storage, videoPath)
        const snapshot = await uploadBytes(storageRef, event.video[0]);
        event.video = await getDownloadURL(snapshot.ref);
 */
        const docRef = collection(database, 'events');
        try {
            await addDoc(docRef, {...event, createdAt: Timestamp.now()}); 
        } catch(e){
            console.log(e.message)
        }
    }



    return {uploadEvent}
}