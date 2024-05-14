import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useAddReview } from '../hooks/useAddReview';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';


const genreOptions = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Documentary',
  'Drama',
  'Family-friendly',
  'Fantasy',
  'Historical',
  'Horror',
  'Musical',
  'Mystery',
  'Romance',
  'Science Fiction',
  'Sports',
  'Thriller',
  'Western',
];

const genreOptionsHUN = [
  'Akció',
  'Kaland',
  'Animáció',
  'Vígjáték',
  'Dokumentum',
  'Dráma',
  'Családi',
  'Fantasy',
  'Történelmi',
  'Horror',
  'Musical',
  'Rejtély',
  'Romantikus',
  'Sci-fi',
  'Sport',
  'Thriller',
  'Western',
];

const NewReview = ({ user }) => {
  const { t, i18n } = useTranslation(); 
  const [image, setImage] = useState('');             //kep
  const [title, setTitle] = useState('');             //cim
  const [rating, setRating] = useState('');           //ertekeles - felesleges valszeg - helyette a szavazasokat kellene hasznalni(?)
  const [genre, setGenre] = useState('');             //mufaj
  const [description, setDescription] = useState(''); //leiras
  const [video, setVideo] = useState('');             //video link
  /*2024.04.12*/
  const [views, setViews] = useState(0);              //megtekintesek szama
  const [moneygoal, setMoneygoal] = useState(0);      //ez nem biztos hogy igy kell matyival egyeztetni
  const [collected, setCollected] = useState(0);      // Az eddig gyujtott penz
  /*2024.04.19*/
  const [script, setScript] = useState('');           //script

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');


  const schema = yup.object().shape({
    title: yup.string().required("Please provide the title"),
    englishTitle: yup.string(),
    rating: yup.number().typeError("please provide a number").required("Please provide a rating"),
    moneygoal: yup.number().min(1, "Number is too small").max(1000000, "Number is too high").required("Please fill this field").typeError("Please provide a number"),
    genre: yup.string().required("Please choose a genre for your film"),
    description: yup.string().min(20, "Description too short").max(1500, "Description too long").required("Please provide a description"),
    englishDescription: yup.string(),
    image: yup.mixed().required("please provide a poster for your film"),
    video: yup.mixed().required("Please provide a demo for your film"),
    script: yup.mixed().required("Please provide a script for your film")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const {
    addReview,
    error: firebaseError,
    success: firebaseSuccess,
    setError: firebaseSetError,
    setSuccess: firebaseSetSuccess,
    loading,
  } = useAddReview(user);

  const handleUpload = ( formData) => {
    //e.preventDefault();
    firebaseSetError(null);
    firebaseSetSuccess(null);

    console.log('Calling addReview function');
    const data = {
      user: user.uid,
      ...formData,
      views, //Ennek itt mi a szerepe
      collected, // meg ennek?
    };

    addReview(data);
  };

  useEffect(() => {
    if (firebaseError) {
      setError(firebaseError);
    }
    if (firebaseSuccess) {
      setSuccess(firebaseSuccess);
      setImage(null);
      setVideo(null);
      setScript(null);
      setTitle('');
      setRating(0);
      setGenre('');
      setDescription('');

      setMoneygoal(0);
      setCollected(0);
      setViews(0);
    }
  }, [firebaseError, firebaseSuccess]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), 3000);
    }

    if (success) {
      setTimeout(() => setSuccess(''), 3000);
    }
  }, [error, success, loading]);

  return (
    <section className='flex flex-col items-center justify-center bg-amber-200 sectionHeight'>
      <h1 className='my-8 sm:text-xl md:text-2xl font-bold text-zinc-800 w-[90%] text-center '>
        {t("new_reviews.upload_films")}
      </h1>

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt='preview'
          className='max-w-[600px] w-[90%] object-cover mb-8 shadow-md rounded-md'
        />
      )}

      <form
        onSubmit={handleSubmit(handleUpload)}
        className='flex flex-col max-w-[600px] w-[90%] mx-auto gap-3 mb-16'
      >
        {errors?.image && (<p>{errors.image?.message}</p>)}
        <label htmlFor='poster'>{t("new_reviews.poster")}</label>
        <input
          type='file'
          name='poster'
          accept='image/*'
          className='block w-full p-3 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          {...register("image")}
          disabled={loading}
        />

        {errors?.video && (<p>{errors.video?.message}</p>)}
        <label htmlFor='film'>{t("new_reviews.film")}</label>
        <input
          type='file'
          name='film'
          accept='video/mp4'
          className='block w-full p-3 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          {...register("video")}
          disabled={loading}
        />

        {errors?.script && (<p>{errors.script?.message}</p>)}
        <label htmlFor='film'>{t("new_reviews.script")}</label>
        <input
          type='file'
          name='script'
          accept='.pdf'
          className='block w-full p-3 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          {...register("script")}
          disabled={loading}
        />

        {errors?.title && (<p>{errors.title?.message}</p>)}
        <input
          type='text'
          placeholder={t("new_reviews.title")}
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          value={title || ''} // Ezek fölöslegesek voltak sztem eddig is, de most már bizto azok
          {...register('title')}
        />

        {errors?.englishTitle && (<p>{errors.englishTitle?.message}</p>)}
        <input
          type='text'
          placeholder={t("new_reviews.original_title")}
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          {...register('englishTitle')}
        />
        
        {/*errors?.rating && (<p>{errors.rating?.message}</p>)}
        <input // Ezt amugy az egészet kikukázhatnánk sztem mer fölös
          type='number'
          placeholder='Rating (0 - 5)'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          min={0}
          max={5}
          //value={rating || ''}
          {...register('rating')}
    />*/}
      
        {errors?.moneygoal && (<p>{errors.moneygoal?.message}</p>)}
        <input
          type='number'
          placeholder={t("new_reviews.needed_money")}
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          //value={moneygoal || ''}
          {...register('moneygoal')}
        />

        {errors?.genre && (<p>{errors.genre?.message}</p>)}
        <select
          className={`p-4  rounded-md shadow-md outline-none bg-slate-50 ${genre === '' && 'text-gray-400'
            }`}
          {...register('genre')}
        >
          <option value='' className='disabled:text-gray-500' disabled>
            {t("new_reviews.genre")}
          </option>
          {genreOptions.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {errors?.description && (<p>{errors.description?.message}</p>)}
        <textarea
          type='text'
          placeholder={t("new_reviews.desc")}
          className='p-4 rounded-md shadow-md outline-none resize-none bg-slate-50 h-[200px]'
          {...register('description')}
        />
        {errors?.englishDescription && (<p>{errors.englishDescription?.message}</p>)}
        <textarea
          type='text'
          placeholder={t("new_reviews.original_desc")}
          className='p-4 rounded-md shadow-md outline-none resize-none bg-slate-50 h-[200px]'
          {...register('englishDescription')}
        />

        {loading ? (
          <div className='flex items-center justify-center w-full'>
            <Loading size={'30px'} />
          </div>
        ) : (
          <input
            type='submit'
            value={t("new_reviews.upload_films")}
            className='w-full p-4 font-bold text-white transition-all duration-300 rounded-md shadow-sm cursor-pointer bg-zinc-800 hover:bg-zinc-700 hover:tracking-wider'
          />
        )}
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
      </form>
    </section>
  );
};

export default NewReview;
