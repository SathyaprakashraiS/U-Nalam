import React from 'react'
import { Link } from 'react-router-dom';
import "./Mhome.css"
import logo from"./logo.png" 
const Mhome = () => {
  return (
    <div>  
         <div className='navbar'>
            <p><img src={logo} width="200" height="50"></img></p>
    <p><Link to="/" id="link">
                HOME
            </Link></p>
    <p><Link to="/search" id="link">
                SEARCH DISEASE
            </Link></p>
            <p><Link to="/model" id="link">
                MODEL VIEW
            </Link></p>
    <p><Link to="/info" id="link">
                ORGAN VIEW
            </Link></p>
    <p><Link to="/news" id="link">
                NEWS
            </Link></p>
    </div>
    <div className='mhome_main'>
        <div className='inhome'>
            <div className='img_h'>
                <img src="https://media-exp1.licdn.com/dms/image/C5612AQHGma1zF5-Wkw/article-cover_image-shrink_600_2000/0/1647922824789?e=2147483647&v=beta&t=13GMJLQWaNqhQU7EDMnsF5dMmj4SEyeaOYL23Puqdac"></img>
            </div>
            <div className='mhome_cont'>
                <h1>தமிழ் மொழியில் சுகாதார தகவல்</h1>
                <div className='hinfo1'><h2>நோய்கள் பற்றிய தேடல்</h2></div>
                <div className='hinfo2'><h2>வரைபட வடிவில் சுகாதார தகவல்</h2></div>
                <div className='hinfo3'><h2>உறுப்பு வாரியான பார்வை</h2></div>
                <div className='hinfo4'><h2>தினசரி சுகாதார செய்தி</h2></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Mhome
