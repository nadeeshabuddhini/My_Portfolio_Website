import React from 'react'
import { Button } from '@mui/material'
import './Button.css'

const CustomBtn = ({text,icon,bool,size}) => {
  return (
    <Button type='submit' fullWidth={bool} size={size} className='btn_wrapper' endIcon={icon?<div className='icon_wrapper'>{icon}</div>:null}>
        <span className='btn_text'>{text}</span>
    </Button>
  )
}

export default CustomBtn




