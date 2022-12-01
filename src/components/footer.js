import React from 'react';
import { NavLink } from "react-router-dom";
import { Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='row footer' style={{ width: "100%" }}>
            <div className='col-md-2 col-lg-2 col-6' >
                <div className="logowriting footerlogo logo2" >The<span id="themewriting">Hom</span></div>
                <p className='footernote'>Eu elit magnae deserunt volup excepteur irure. Aute exercitation consectetur
                    cillum id in a </p>
            </div>
            <div className='col-md-2 col-sm-1 col-1'></div>
            <div className=' col-md-2 col-lg-2 col-5 footerdets'>
                <h4 className='blackfont'>Quick Links</h4>
                <Row ><NavLink to="/">Home</NavLink></Row>
                <Row><NavLink to="/about">About</NavLink></Row>
                <Row><NavLink to="/service">Service</NavLink></Row>
                <Row><NavLink to="/blog">Blog</NavLink></Row>
                <Row><NavLink to="/contact">Contact</NavLink></Row>
            </div>
            <div className='col-lg-1 col-md-1 col-0'></div>
            <div className=' col-md-2 col-lg-2 col-6 footerdets'>
                <h4 className='blackfont'>Services</h4>
                <Row>About Us</Row>
                <Row>Blogs & Articles</Row>
                <Row>Terms and Conditions</Row>
                <Row>Privacy Policy</Row>
                <Row>About Us</Row>
            </div>
            <div className='col-1'></div>
            <div className='col-md-2 col-lg-2 col-5 footerdets'>
                <h4 className='blackfont'>Contact</h4>
                <Row>Address: 002 Crown Street Lodon SW17 55Z</Row>
                <Row>Phone: 000 1234 5678</Row>
                <Row>Email:rents@gmail.cm</Row>
            </div>
        </div>
    )
}

export default Footer;