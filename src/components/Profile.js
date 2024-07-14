import React from 'react'
import profilePic from '../assets/profile-pic-1.png'

function Profile() {
    return (
        <div className='profile'>
            <div>
                <h2>VISHNU N P</h2>
                <p>
                    I'm a Full Stack Developer and Game Developer. I implement front end using HTML, CSS, Javascript, BackEnd using NodeJS, ExpressMongoDB and DataBase using MongoDB.
                </p>
            </div>
            <img alt='profile-img' src={profilePic} />
        </div>
    )
}

export default Profile