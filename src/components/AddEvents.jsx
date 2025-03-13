import React, { useState } from 'react';
import InputField from './InputFeild';
import { motion } from 'framer-motion';
export default function AddEvents({ onEventAdded }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [image, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [errorData, setErrorData] = useState({});
  const [eventList, setEventList] = useState([]); // Local event list

  const validation = (formData) => {
    const errors = {};
    if (formData.title.trim() === '') errors.title = 'Title is required';
    if (formData.date.trim() === '') errors.date = 'Date is required';
    if (formData.category.trim() === '') errors.category = 'Category is required';
    if (formData.image.trim() === '') errors.image = 'Image is required';
    if (formData.description.trim() === '') errors.description = 'Description is required';

    setErrorData(errors);
    return errors;
  };

  const handleValues = (e) => {
    e.preventDefault();
    const formData = { title, category, date, image: image, description };
    const errors = validation(formData);
    if (Object.keys(errors).length > 0) return;
    setEventList((prevList) => [...prevList, formData]);
   
    fetch('https://api.jsonbin.io/v3/b/67d1c3d78561e97a50eaa974', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2a$10$5wJahouHL9KEgb/2wIQKR.19Ou3RBuZcmoPARWNj03Nhzj76HV6dq'
      },
      body: JSON.stringify([...eventList, formData])
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((response) => {
        onEventAdded(formData);
      })
      .catch((error) => console.error('Fetch error:', error));

    setTitle('');
    setCategory('');
    setDate('');
    setImg('');
    setDescription('');
    setErrorData({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      }}
      className='w-full min-h-[300px] my-10 px-2 flex justify-center items-center flex-col gap-4'>
      <h1 className='text-[27px] sm:text-4xl font-bold text-zinc-900 text-center'>Add Events Here</h1>


      <form
        onSubmit={handleValues}
        className='w-full sm:w-[80%] h-full flex justify-center items-center flex-col mt-8 bg-gray-100 gap-5 p-3'
      >
        <InputField
          label="Title"
          placeholder="Write Title Here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errorData.title}
        />
        <InputField
          label="Date"
          placeholder="Write Date Here..."
          value={date}
          onChange={(e) => setDate(e.target.value)}
          error={errorData.date}
        />
        <InputField
          label="Category"
          placeholder="Write Category Here..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          error={errorData.category}
        />
        <InputField
          label="Image"
          placeholder="Paste Image URL Here..."
          value={image}
          onChange={(e) => setImg(e.target.value)}
          error={errorData.image}
        />
        <InputField
          label="Description"
          placeholder="Write Description Here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={errorData.description}
        />

        <button
          className='text-xl font-bold mt-10 bg-zinc-900 rounded-2xl px-3 py-1 text-rose-300 hover:text-black hover:bg-rose-300 transition-all duration-300 ease-linear cursor-pointer'
          type='submit'
        >
          Create Event
        </button>
      </form>
    </motion.div>
  );
}
