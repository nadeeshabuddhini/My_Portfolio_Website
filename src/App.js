
import './App.css';
import { Container, Grid } from '@mui/material';
import Header from './Components/Header/Header';
import Skills from './Pages/Skills/Skills';
import Experiance from './Pages/Experiance/Experiance';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container className='container'>
      <Grid container spacing={4}>
        <Grid item xs >
          <Router>
          <Header/>
          <div className='content_wrapper container_shadow'>
            <Routes>
            <Route path='/' element={<About/>}></Route>  
            <Route path='/skill' element={<Skills/>}></Route>
            <Route path='/experiance' element={<Experiance/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          </div>
          </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
