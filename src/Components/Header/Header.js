import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './Header.css';
import '../../Utils/profileData'
import profileData from '../../Utils/profileData';
import CustomBtn from '../Button/Button';
import { Telegram } from '@mui/icons-material';

function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="header container_shadow">
      <Nav.Link as={NavLink} to='/'>
        <Navbar.Brand className='header_home'>
          <HomeRoundedIcon/>
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle/>
      <Navbar.Collapse className='header_collapse'>
        <Nav className='header_left'>
        <Nav.Link as={NavLink} to='/skill' className='header_link'>Skills</Nav.Link>
        <Nav.Link as={NavLink} to='/experiance' className='header_link'>Experiance</Nav.Link>
        <Nav.Link as={NavLink} to='/education' className='header_link'>Education</Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(profileData.social).map((key) =>(
            <a href={profileData.social[key].link} target='_blank'>{profileData.social[key].icon}</a>
          ))}
        <Nav.Link as={NavLink} to='/contact' className='header_link'>
        <CustomBtn text={'Contact Me'} icon={<Telegram/>}/>
        </Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
