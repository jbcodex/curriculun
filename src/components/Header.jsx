import '../styles/styles.css';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return (
        <div className='Header'>
            <div className='HeaderName'>
                <p>Jarbas Bento Souza da Silva</p>
                <p>Cell: (21) 97998-6220</p>
                <p>E-mail: jbdev@tutanota.com</p>
            </div>
            <div className='Divisor'></div>
            <div className='Links'>
                <a href="https://github.com/jbcodex">GitHub</a>
                <a href="https://www.linkedin.com/in/euclides-silva-48b1b2157/">Linkedin</a>
            </div>
        </div>
    )
}