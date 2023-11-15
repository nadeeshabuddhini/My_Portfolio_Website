import React from 'react'
import { CardContent, Grid, Typography } from '@mui/material'
import './Skills.css'
import { skills } from '../../Utils/profileData'
import Card from '@mui/material/Card';

function Skills() {
  return (
    <>
    <Grid container className='skill_header'>
      <Grid item>
        <Typography variant='h4'className='skill_title'>Skills</Typography>
        <Typography className='skill_intro'>These are some of my technical skills, I have worked and experienced so far.</Typography>
      </Grid>
    </Grid>

    <Grid container className='skill_content'>
      {skills.map((item) => (
         <Grid item xs={12} lg={6} className='skill_item'>
         <Card className='skill_card'>
           <CardContent className='skill_card_item1'>
             <Typography variant='h5' className='skill_card_header'>{item.title}</Typography>
           </CardContent>
           <Grid container className='skill_sub_container'>
           {item.skills.map((skill) => (
            <Grid item className='skill_sub_content' xs={12} lg={6}>
            <CardContent className='skill_card_item2'>
                <img src={skill.image} width='32px' height='32px' alt=''/>
                <span className='skill_card_text'>{skill.name}</span>
            </CardContent>
            </Grid>
           ))}
           </Grid>
         </Card>
       </Grid>
      ))}

    </Grid>
    </>
  )
}

export default Skills
