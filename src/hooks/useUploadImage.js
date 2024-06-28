import { useState } from 'react';

import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/config';

export const useUploadImage = () => {

  const uploadImage = async (folder, image, fileName, email) => {
    if (!image) {
      return;
    }
    
    const urlname = email.split('@')[0];
    // Upload image
    const generateName = `${folder}/${urlname}/${fileName}`;
    const storageRef = ref(storage, generateName);

    const snapshot = await uploadBytes(storageRef, image);
    return await getDownloadURL(snapshot.ref);
  };

  return { uploadImage };
};
