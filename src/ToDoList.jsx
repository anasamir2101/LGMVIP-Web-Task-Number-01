import React, { useState } from 'react';

const ToDoList = () => {
  const [action, setAction] = useState('');
  const [data, setData] = useState([]);

  const addaction = () => {
    if (action.trim() !== '') {
      setData((data) => {
        const newdata = [...data, action];
        console.log(newdata);
        setAction('');
        return newdata;
      });
    } else {
      alert('Please enter activity');
    }
  };
  const removeAction = (id) => {
    const updateddata = data.filter((task, i) => id !== i);
    setData(updateddata);
  };

  return (
    <section className='flex items-center justify-center min-h-screen'>
      <div className='bg-orange-700 w-[80%] md:w-[50%] p-8 rounded-lg text-center shadow-lg shadow-black'>
        <h1 className='text-3xl font-bold mb-6 text-white'>TODO LIST</h1>
        <div className='mb-6'>
          <input
            className='w-full py-2 px-4 border border-gray-300 rounded-md'
            type='text'
            placeholder='Please add a task'
            value={action}
            onChange={(e) => {
              setAction(e.target.value);
            }}
          />
        </div>
        <button
          className='w-full md:w-[40%] py-2 px-4 bg-green-600 text-white rounded-md'
          onClick={addaction}
        >
          Add
        </button>

        <h2 className='mt-6 font-bold text-2xl'>The Task List</h2>
        {data !== [] &&
          data.map((value, id) => {
            return (
              <div
                className='bg-slate-600 my-4 px-4 py-2 rounded-md flex justify-between'
                key={id}
              >
                <span className='text-white'>{value}</span>
                <button
                  className='bg-slate-400 py-2 px-4 text-white rounded-md'
                  onClick={() => removeAction(id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        {data.length >= 2 && (
          <button
            className='bg-slate-400 py-2 px-4 text-white rounded-md'
            onClick={() => setData([])}
          >
            Delete All
          </button>
        )}
      </div>
    </section>
  );
};

export default ToDoList;
