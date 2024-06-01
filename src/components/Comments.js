import React, { useState } from 'react';
import { useComment } from '../hooks/useComment';
import { useFetchData } from '../hooks/useFetchData';

import { FaLock } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Comments = ({ id, user }) => {
  const [newComment, setNewComment] = useState('');

  const { documents: comments } = useFetchData(`films/${id}/comments`);
  const { insertComment, deleteComment } = useComment(`films/${id}/comments`);

  const commentHandler = (e) => {
    e.preventDefault();

    if (newComment === '') {
      return;
    }
    const commentData = {
      order: comments.length + 1,
      userId: user.uid,
      username: user.displayName,
      comments: newComment,
    };
    insertComment(commentData);
    setNewComment('');
  };

  return (
    <section className='flex flex-col gap-2 rounded-md bg-teal-700 px-7 py-5'>
      <h3 className="text-lg font-semibold font-h2-title text-nbgreylight opacity-70">comments</h3>
      {comments
        ?.sort((a, b) => b.order - a.order)
        .map((comment, index) => (
          <div className='py-1 ' key={index}>
            <p className='mb-1 font-bold lg:text-xl '>{comment.username}</p>
            <div className='flex items-center justify-between w-full gap-4'>
              <p className='w-full py-2 overflow-hidden text-sm italic text-gray-700 break-words'>
                "{comment.comments}"
              </p>
              {user && user.uid === comment.userId && (
                <p
                  onClick={() => deleteComment(comment.id)}
                  className='text-2xl text-red-500'
                >
                  <TiDelete />
                </p>
              )}
            </div>
          </div>
        ))}
      {user ? (
        <form className='relative' onSubmit={commentHandler}>
          <input
            value={newComment || ''}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            type='text'
            placeholder='Write your comment'
            className='w-full p-2 text-lg border-2 rounded-lg outline-none lg:p-4 bg-slate-50'
          />
          <input
            className='absolute right-0 px-10 py-2 text-lg font-bold text-white transition-all duration-300 bg-nbgreenmain border-2 border-nbgreenmain rounded-r-lg cursor-pointer lg:py-4 hover:bg-nbgreenlight hover:border-nbgreenlight hover:tracking-wider'
            type='submit'
            value='Send'
          />
        </form>
      ) : (
        <p className='flex items-center justify-center gap-2 p-4 font-bold border-2 border-gray-500 rounded-md bg-slate-50 text-slate-400'>
          <FaLock className='mt-[-4px]' /> <Link to='/login'>Log in</Link> to
          comment
        </p>
      )}
      <div>
      </div>
    </section>
  );
};

export default Comments;
