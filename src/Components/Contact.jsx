import React from 'react'
import './Contact.css'
function Contact() {

    
const form = document.querySelector(".form_container")
function sendMesg(e) {
    e.preventDefault();
    const name = document.querySelector('.name')
    const email = document.querySelector('.email')
    const message = document.querySelector('.message')
    
    
    Email.send({
        SecureToken : "2d235e42-d140-4055-9a1e-471580e64355",
        To : 'zain.kodestudio@gmail.com',
        From : "umramr2@gmail.com",
        Subject : "Contact From",
        Body : "Hello Hi zain"
    }).then(
      message => alert(message)
    );

    console.log('Email Submited')
    
}

// form.addEventListener('submit', sendMesg)    
    return (
        <>
            <section className="Contact_section">
                <div className="contact_heading">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact_form">
                    <div className="form_container">
                        <div className="form_box1">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="What should I call you?"
                                name="name"
                                id="name"
                                className='name'
                            />
                        </div>
                        <div className="form_box2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Where can I reach you?"
                                name="email"
                                id="email"
                                className='email'
                            />
                        </div>
                        <div className="form_box3">
                            <label htmlFor="email">Message</label>
                            <br />
                            <textarea
                                placeholder=". . . . ."
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                defaultValue={""}
                                className='message'
                            />
                        </div>
                        <div className="form_box4">
                            <button onClick={sendMesg}>Sand</button>
                        </div>
                        <div className="form_box5">
                            <p>Or send me a direct email at</p>
                            <p>arslan-rahman@outlook.com</p>
                        </div>
                        <div className="form_box6">
                            <p>Or...</p>
                            <a href="">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="mr-4 "
                                    height={20}
                                    width={20}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" />
                                </svg>
                                Book a direct meeting to discuss any project or idea.
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact