import { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { database, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const useAddReview = (user) => {
  const [success, setSuccess] = useState(null); // State variable to track success message
  const [error, setError] = useState(null); // State variable to track error message
  const [loading, setLoading] = useState(false); // State variable to track loading state

  const addReview = async (data) => {
    setLoading(true); 

    console.log(data)// Set loading state to true

    //get the files from the object and then remove them
    //so we dont ty to upload them to db
    const img = data.image[0];
    delete data.image
    const video = data.video[0];
    delete data.video
    const script = data.script[0];
    delete data.script
    
    try {
      //itt tartok....
      const urlname=user.email.split('@')[0];
      // Upload image
      const generateName = `posters/${urlname}/${Date.now()}`; //TESZTELNI KELL, HA MŰÖDIK, AKKOR A FILS ÉS A SCRIPTSNÉL UGYANEZ!
      const storageRef = ref(storage, generateName);
      const uploadTask = uploadBytesResumable(storageRef, img);
      // Upload video
      const videoRef = ref(storage, `films/${urlname}/${Date.now()}`);     //ITT!!
      const videoUploadTask = uploadBytesResumable(videoRef, video);
      //Upload script
      const scriptRef = ref(storage, `scripts/${urlname}/${Date.now()}`);   //ITT!!
      const scriptUploadTask = uploadBytesResumable(scriptRef, script);


      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload Progress:', uploadProgress); // Log upload progress
        },
        (error) => {
          console.error('Upload Error:', error.message); // Log upload error
        },
        async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            window.publicUrl = url;
          console.log('Download URL:', url); // Log download URL
        },
      );

      videoUploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Video Upload Progress:', uploadProgress); // Log video upload progress
        },
        (error) => {
          console.error('Video Upload Error:', error.message); // Log video upload error
        },
        async () => {
          const videoUrl = await getDownloadURL(videoUploadTask.snapshot.ref);
          console.log('Video Download URL:', videoUrl); // Log video download URL

          const scriptUrl = await getDownloadURL(scriptUploadTask.snapshot.ref);
          console.log('Script Download URL:', scriptUrl); // Log script download URL

          const docRef = collection(database, 'films');

            const docData = {
            image: window.publicUrl,
            videoUrl: videoUrl,
            scriptUrl: scriptUrl,
            createdAt: Timestamp.now(),
            ...data,
            };

            await addDoc(docRef, docData); // Add document to Firestore collection
            setLoading(false); // Set loading state to false
            setSuccess('Review added successfully'); // Set success message
            console.log('Review added successfully'); // Log success message
        }
      );
    } catch (e) {
      setError(e.message); // Set error message
      setLoading(false); // Set loading state to false
      console.error('Error:', e.message); // Log error message
    }
  };

  return { addReview, success, setSuccess, error, setError, loading }; // Return the functions and state variables
};
