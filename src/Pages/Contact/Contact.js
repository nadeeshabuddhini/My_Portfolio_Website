import {React, useRef, useState} from 'react'
import { Grid, Typography, Card, CardContent, TextField, CardMedia, CardActions, Alert} from '@mui/material'
import './Contact.css'
import  gmailimg from './../../Assets/images/gmail icon.png'
import CustomBtn from '../../Components/Button/Button'
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();
  const [show, setShow] = useState(false)
  const initialValues = {user_name:"", user_email:"", subject:"", message:""};
  const [values, setValues] = useState(initialValues);
  const [errors, seterrors] = useState({})

  const handleChange = (e) =>{
   const {name,value} = e.target 
   setValues({...values, [name]:value})
  };
  // useEffect(()=>{
  //   console.log(errors)
  //   if(Object.keys(errors).length === 0 && setShow){
  //     console.log(values)
  //   }
  // },[errors])

  const validate = (value) =>{
   const error = {}
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   const regexString = /^([^0-9]*)$/;

   if(!value.user_name){
    error.user_name = "Your name is required"
   }else if(!regexString.test(value.user_name)){
    error.user_name = "Numbers is not allowed"
   }
   if(!value.user_email){
    error.user_email = "Your email is required"
   }else if(!regex.test(value.user_email)){
    error.user_email = "This is a invalid email format"
   }
   if(!value.subject){
    error.subject = "Subject is required"
   }
   if(!value.message){
    error.message = "Message is required"
   }
   return error;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    seterrors(validate(values));
    setShow(true);
    if(Object.keys(validate(values)).length === 0){
    emailjs.sendForm('service_xpmcahk', 'template_nnt4vmc', form.current, 'Vy27EXnr67Q9wC8Yp')
      .then(() => {  
      }, (error) => {
          alert(error)
      });
    }
    setTimeout(() => {
      setShow(false);
    }, 3000);
    }
  return (
    <>
    <Grid container className='contact_header'>
      <Grid item>
        <Typography variant='h4' className='contact_title'>Contact Me</Typography>
        <Typography className='contact_intro'>Contact me if you have any question or any job opportunity</Typography>
      </Grid>
    </Grid>
    <Grid container className='contact_body'>
      <Grid item xs={12} lg={8}>
        <Card className='contact_card'>
          <CardContent className='contact_cardcontent'>
          <Typography variant='h5' className='contact_cardheader'>Send me a Message</Typography>
          <CardMedia className='contact_cardheadimg' sx={{ height: 40, width:40 }} image={gmailimg}/>
          </CardContent>
          <form ref={form} onSubmit={sendEmail}>
          <CardContent>
          <TextField 
          className='contact_textfield' 
          name='user_name' fullWidth 
          id="outlined-basic" label="Your Name" variant="outlined"
          value={values.user_name}
          onChange={handleChange}
          helperText={errors.user_name}  
          error={errors.user_name?true:false}/>
          <TextField 
          className='contact_textfield' 
          name='user_email' fullWidth 
          id="outlined-basic" label="Your Email" variant="outlined"
          value={values.user_email}
          onChange={handleChange}
          helperText={errors.user_email}  
          error={errors.user_email?true:false} 
          />
          <TextField 
          className='contact_textfield' 
          name='subject' fullWidth
          id="outlined-basic" label="Subject" variant="outlined"
          value={values.subject}
          onChange={handleChange}
          helperText={errors.subject}  
          error={errors.subject?true:false}
          />
          <TextField 
          className='contact_textfield' 
          name='message' fullWidth multiline rows={5} maxRows={10} 
          id="outlined-basic" label="Your Message" variant="outlined"
          value={values.message}
          onChange={handleChange}
          helperText={errors.message}  
          error={errors.message?true:false} 
          />
          </CardContent>
          <CardActions>
            <CustomBtn bool={true} size={'large'} text={'Send'}></CustomBtn>
          </CardActions>
          </form>  
          {Object.keys(errors).length === 0 && show ?<Alert severity="success" onClose={()=>{setShow(false);}}>Suceessfully send the message</Alert>:null}
        </Card>
      </Grid>
    </Grid>
    </>
  )
}

export default Contact
