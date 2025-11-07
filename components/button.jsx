import Link from 'next/link'
import React from 'react'

const Button = ({ 
  href = '#!', 
  variant = 'outlined',  // 'outlined' or 'primary'
  icon = null, 
  text = '', 
  className = '', 
  onClick,  // For <button> mode
  asButton = false  // If true, renders as <button> instead of <Link>
}) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-theme-primary' 
    : 'btn-theme-primary-outlined'
  
  const Component = asButton ? 'button' : Link
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${className} font-semibold`} 
      aria-label={text || 'Button'}
    >
      {icon && (
        <div className="shrink-0">
          {icon}
        </div>
      )}
      {text && <span>{text}</span>}
    </Component>
  )
}

export default Button