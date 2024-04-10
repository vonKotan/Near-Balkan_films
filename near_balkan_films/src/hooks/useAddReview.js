import { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { database, storage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const useAddReview = () => {
  const [success, setSuccess] = useState(null); // State variable to track success message
  const [error, setError] = useState(null); // State variable to track error message
  const [loading, setLoading] = useState(false); // State variable to track loading state

  const addReview = async (data, img, video) => {
    setLoading(true); // Set loading state to true

    try {
      const generateName = `posters/${Date.now()}`;
      const storageRef = ref(storage, generateName);
            // Upload video
            const videoRef = ref(storage, `films/${Date.now()}`);
            const videoUploadTask = uploadBytesResumable(videoRef, video);
      const uploadTask = uploadBytesResumable(storageRef, img);

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

          const docRef = collection(database, 'reviews');

            const docData = {
            image: window.publicUrl,
            videoUrl: videoUrl,
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
