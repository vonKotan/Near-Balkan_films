import { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { database, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { User } from 'firebase/auth'
import { Film } from '../models/Film';

export const useAddReview = (user: User) => {
  const [success, setSuccess] = useState<string | null>(null); // State variable to track success message
  const [error, setError] = useState<string | null>(null); // State variable to track error message
  const [loading, setLoading] = useState(false); // State variable to track loading state

  const addReview = async (data: FilmUploadDto) => {
    setLoading(true);

    console.log(data)// Set loading state to true

    //get the files from the object and then remove them
    //so we dont ty to upload them to db

    try {
      if (!user?.email) return;
      //itt tartok....
      const urlname = user.email.split('@')[0];
      // Upload image
      const generateName = `posters/${urlname}/${Date.now()}`; //TESZTELNI KELL, HA MŰÖDIK, AKKOR A FILS ÉS A SCRIPTSNÉL UGYANEZ!
      const storageRef = ref(storage, generateName);
      const uploadTask = uploadBytesResumable(storageRef, data.poster);
      // Upload video
      const videoRef = ref(storage, `films/${urlname}/${Date.now()}`);     //ITT!!
      const videoUploadTask = uploadBytesResumable(videoRef, data.video);
      //Upload script
      const scriptRef = ref(storage, `scripts/${urlname}/${Date.now()}`);   //ITT!!
      const scriptUploadTask = uploadBytesResumable(scriptRef, data.script);


      /* uploadTask.on(
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
            //Ez itt eléggé kőbaltás módszer
            window.publicUrl = url;
          console.log('Download URL:', url); // Log download URL
        },
      ); */

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

          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('Script Download URL:', imageUrl); // Log image download URL

          const docRef = collection(database, 'films');

          const newFilm: Film = {
            image: imageUrl,
            videoUrl: videoUrl,
            scriptUrl: scriptUrl,
            createdAt: Timestamp.now(),
            title: data.title,
            englishTitle: data.englishTitle,
            moneygoal: data.moneygoal,
            description: data.description,
            englishDescription: data.englishDescription,
            genre: data.genre,
            user: data.userId,
            views: 0,
            collected: 0
          };

          await addDoc(docRef, newFilm); // Add document to Firestore collection
          setLoading(false); // Set loading state to false
          //setSuccess('Review added successfully'); // Set success message
          console.log('Review added successfully'); // Log success message
        }
      );
    } catch (e: any) {
      setError(e.message); // Set error message
      setLoading(false); // Set loading state to false
      console.error('Error:', e.message); // Log error message
    }
  };

  return { addReview, success, setSuccess, error, setError, loading }; // Return the functions and state variables
};
