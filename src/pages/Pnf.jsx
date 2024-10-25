import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
      <Header/>
        <div style={{paddingTop:"100px"}} className='flex justify-center items-center flex-col'>
          <h1 className='text-5xl font-bold'>404</h1>
          <img width={'300px'} height={'300px'} src="https://media0.giphy.com/media/VwoJkTfZAUBSU/200w.gif?cid=6c09b95260vbzsxi8po2dxe8z45b5s5lbcx1efbc81jayj45&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
          <h1 className='font-bold text-4xl mb-2'>Page Not Found... Click The home to redirect to Home Page</h1>
          <Link className='bg-blue-600 p-2 text-white rounded' to={'/'}>Home</Link>
        </div>
    </>

  )
}

export default Pnf