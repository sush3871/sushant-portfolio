"use client"
import React from 'react'

const title = ({title, lgFont = 'lg:text-6xl', lgFontBig = 'lg:text-7xl', color= 'text-theme-primary'}) => {
  return (
    <div className="relative w-full whitespace-nowrap text-center">
        <h2 className={`opacity-10 text-4xl sm:text-5xl md:text-6xl ${lgFontBig} text-transparent  font-bold font-outline-2-primary`}>{title}</h2>
        <h3 className={`${lgFont} text-3xl sm:text-4xl md:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color}`}>{title}</h3>
    </div>
  )
}

export default title