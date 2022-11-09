import React from 'react'
import loader from '../../../assets/images/loader.svg'

interface TitleProps {
  title: string
}

export const Loader: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={loader} alt="loader" className="w-32 h-32 object-contain relative" />
      <h1 className="font-bold text-2xl text-white absolute">{title || 'Loading'}</h1>
    </div>
  )
}
