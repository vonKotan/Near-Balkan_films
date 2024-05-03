import { useState } from 'react';

import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/config';

export const useUploadImage = (user) => {
  const [imageRef, setImageRef] = useState('');
  const [progress, setProgress] = useState('');

  const uploadImage = async (image, filmName) => {
    if (!image) {
      return;
    }
    console.log(user.user.email);
    const urlname = user.user.email.split('@')[0];
    // Upload image
    const generateName = `filmography/${urlname}/${filmName}`;
    const storageRef = ref(storage, generateName);

    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);
  };

  return { uploadImage, imageRef, progress };
};
