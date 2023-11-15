import React from 'react';
import './About.css';
import { Grid, Typography } from '@mui/material';
import profileData from '../../Utils/profileData';
import CustomBtn from '../../Components/Button/Button';
import GetAppIcon from "@mui/icons-material/GetApp";
import PdfFile from '../../Files/Buddhini.pdf';
import CustomTimeline from '../../Components/Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
 
  const About = () => {
  return (
    <>
    <Grid container spacing={12}>
        <Grid item className='about_wrapper' xs={12} lg={6}>
            <div className='about_name'>Hi, I am <br/>{profileData.name}</div>
            <div className='about_title'>I am a <span className='typewriter'>{profileData.title}</span></div>
            <Typography className='about_intro'>{profileData.introduction}</Typography>
        <div className='about_btn'>
            <a href={PdfFile} download='Buddhini cv'>
            <CustomBtn text={'Download Cv'} icon={<GetAppIcon />}></CustomBtn>
            </a>
        </div>
        </Grid>
        <Grid item xs={12} lg={6}>
        <div className='profile_img'>
            <figure>
                <img src={require('../../Assets/images/my photo.png')} alt=''/>
            </figure>
        </div>
        </Grid>
    </Grid>
    <Grid container className='profile_timeline'>
        <Grid item xs={12} lg={6} className='profile_timeWrapper'>
            <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}/>
        </Grid>
    </Grid>
    </>
  )
}

export default About
