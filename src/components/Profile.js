import React from 'react'
import profilePic from '../assets/profile-pic-1.png'

function Profile() {
    return (
        <div className='profile'>
            <div>
                <h2 className='font-plex-sans-bold'><span className='font-playwrite'>I'm </span>VISHNU N P</h2>
                <p className='font-plex-sans'>
                    Full Stack Developer and Game Developer. I implement front end using HTML, CSS, Javascript, BackEnd using NodeJS, ExpressMongoDB and DataBase using MongoDB.
                </p>
            </div>
                <img alt='profile-img' src={profilePic} />
        </div>
    )
}

export default Profile