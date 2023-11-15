import { Grid, Typography } from '@mui/material'
import React from 'react'
import './Experiance.css'
import ExperianceTimeline from '../../Components/Timeline/ExperianceTimeline';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';


function Experiance() {
  return (
    <>
    <Grid container className='experiance_header'>
      <Grid item>
        <Typography variant='h4' className='experiance_title'>Experiance</Typography>
        <Typography className='experiance_intro'>Here are some of the experiences I have received so far in different companies and projects.</Typography>
      </Grid>
    </Grid>

    <Grid container className='experiance_content'>
      <Grid item xs={12}>
        <ExperianceTimeline icon={<PermContactCalendarOutlinedIcon/>} text='Technology used: '/>
      </Grid>
    </Grid>
    </>
  )
}

export default Experiance
