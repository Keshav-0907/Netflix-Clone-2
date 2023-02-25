import React from 'react'
import './Footer.css'
import socials from '../Images/Social.png'
import drop from '../Images/DownArrow.png'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='socials'>
                <img src={socials} alt='err'></img>
            </div>
            <div className='options'>
                <div className='opt'>
                    <p> FAQ </p>
                    <p> Invester Relations</p>
                    <p> Ways to Watch </p>
                    <p> Netflix Originals </p>
                </div>
                <div className='opt'>
                    <p> Help Center </p>
                    <p> Jobs </p>
                    <p> Terms of Use </p>
                    <p> Contact Us </p>
                </div>
                <div className='opt'>
                    <p> Account </p>
                    <p> Redeem Gift Cards </p>
                    <p> Privacy </p>
                    <p> Speed Test </p>
                </div>
                <div className='opt'>
                    <p> Media Center </p>
                    <p> Buy Gift Cards </p>
                    <p> Cookie Preferences </p>
                    <p> Legal Notices </p>
                </div>
            </div>


        </div>
    )
}

export default Footer