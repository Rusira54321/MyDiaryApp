'use client'
import axios from 'axios';
import React from 'react'
type DeleteButtonProps = {
    id:number;
}
const DeleteButton = ({id}:DeleteButtonProps) => {
  const handleDelete = async() =>{
      try{
        console.log(id)
          await axios.delete(`/api/Note/Delete/${id}`)
          alert("Delete Successfully");
          window.location.reload();
      }catch(err:unknown)
      {
         if (axios.isAxiosError(err)) {
          alert(err?.response?.data?.error || 'Axios error occurred');
        } else if (err instanceof Error) {
          alert(err?.message);
        } else {
          alert('Something went wrong');
        }
      }
  }
  return (
   <button onClick={handleDelete} className='bg-red-500 hover:bg-red-600 rounded-2xl px-2 cursor-pointer'>Delete</button>
  )
}

export default DeleteButton