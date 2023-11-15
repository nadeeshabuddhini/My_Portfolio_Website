import React from 'react';
import './Footer.css'
import { Typography } from '@mui/material';
import profileData from '../../Utils/profileData';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_name_wrapper'>
        <Typography className='footer_name'>{profileData.name}</Typography>
      </div>
      <div className='footer_copyright_wrapper'>
        <Typography className='footer_copyright'>© {new Date().getFullYear()}{" "}
        <a href='/' target='_blank'>{profileData.name}</a>
        <br/>
        All rights reserved.</Typography>
      </div>
    </div>
  )
}

export default Footer
