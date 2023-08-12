import React from "react";


export default function Contact(){
    return(
        <div className='contact-container'>
            <form onSubmit={{}}>
                <label>Your Name:&nbsp;
                    <input
                        className='contact name-input'
                        type='text'
                        placeholder='Enter name...'
                    />
                </label><br />

                <label>Your Email:&nbsp;
                    <input
                        className='contact email-input'
                        type='email'
                        placeholder='Enter email...'
                    />
                </label><br />

                <label>Additional Info:&nbsp;
                    <textarea
                        className='contact additional-info'
                        type='text'
                        rows='5'
                        cols='50'
                        placeholder='Enter additional info here...'
                    />
                </label>

            </form>
        </div>
    )
}