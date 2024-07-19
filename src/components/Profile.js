import React from 'react'
import profilePic from '../assets/profile-pic-1.png'

function Profile() {
    return (
        <div className='profile'>
            <div>
                <h2 className='font-plex-sans-bold'><span className='font-playwrite'>I'm </span >VISHNU N P</h2>
                <p className='font-plex-sans'>
                    Full Stack Developer and Game Developer. I implement front end using <strong>HTML, CSS, Javascript</strong>, BackEnd using <strong>NodeJS, ExpressMongoDB</strong> and DataBase using <strong>MongoDB</strong>.
                </p>
            </div>
                <img alt='profile-img' src={profilePic} />
        </div>
    )
}

export default Profile