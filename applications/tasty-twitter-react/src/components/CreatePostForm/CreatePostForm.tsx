import React, {FormEvent, useState} from 'react'
import './create-post-form.sass'
import { CreatePostFormProps } from './types';

export const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState<string>('');

  const [submitInProgress, setSubmitInProgress] = useState<boolean>(false);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value.trim());
  };

  const submitHandler: React.ChangeEventHandler<FormEvent> = (event) => {
    event.preventDefault()
    setSubmitInProgress(true)
    onSubmit({ content: message })
      .then(() => {
        setMessage('')
      })
      .finally(() => {
        setSubmitInProgress(false)
      })
  }

  return (
    <form className='create-post-form' onSubmit={submitHandler}>
      <div className='create-post-form__input-area'>
        <input
          className='create-post-form__input'
          type='text'
          placeholder='Что происходит?'
          onChange={changeHandler}
          disabled={submitInProgress}
        />
      </div>
      <div className='create-post-form__submit-area'>
        <button
          className='create-post-form__submit'
          type='submit'
          disabled={submitInProgress}
        >
          Поделиться
        </button>
      </div>
    </form>
  )
}
