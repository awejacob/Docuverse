"use client"

import { CircleArrowDown, RocketIcon } from 'lucide-react'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function FileUploader() {
    const onDrop = useCallback((acceptedFiles:File[]) => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive, isFocused,isDragAccept} = useDropzone({onDrop})
  return (
   <main className='mx-auto max-w-7xl flex flex-col justify-center  items-center'>
     <div
    {...getRootProps()} className= {`flex justify-center border-2 p-2 border-indigo-600 mt-12 h-64 border-dashed w-[85%] items-center ${isFocused || isDragActive ? "bg-indigo-300" : "bg-indigo-100"}`}>
    {
      isDragActive ?
        <div className='flex flex-col justify-center items-center'>
            <RocketIcon className='h-9 w-[5rem] animate-bounce mb-2 text-indigo-600 font-bold'/>
         <p className='text-sm text-center text-indigo-600 font-semibold'>Drop the files here ...</p>
        </div>
        
         :
        <div className='flex flex-col justify-center items-center'>
            <CircleArrowDown className='h-9 w-[5rem] animate-bounce mb-2 text-indigo-600 font-bold'/>
            <p className='text-sm text-center text-indigo-600 font-semibold'>Drag 'n' drop some files here, or click to select files</p>
        </div>
    }
  </div>
   </main>
  )
}

export default FileUploader
