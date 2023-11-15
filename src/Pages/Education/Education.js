import React from 'react'
import { Grid, Typography } from '@mui/material'
import './Education.css'
import EducationTimeline from '../../Components/Timeline/EducationTimeline'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';


function Education() {
  return (
    <>
    <Grid container className='education_header'>
      <Grid item>
        <Typography variant='h4' className='education_title'>Education</Typography>
        <Typography className='education_intro'>Below are my educational qualifications which have helped me in my journey.</Typography>
      </Grid>
    </Grid>
    <Grid container className='experiance_content'>
      <Grid item>
        <EducationTimeline icon={<AutoStoriesOutlinedIcon/>}/>
      </Grid>
    </Grid>
    </>
  )
}

export default Education
