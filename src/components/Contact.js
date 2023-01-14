import React, { useState, useRef} from "react";
import '../styles/connect.css';
import '../styles/style.css';
import { MdLocationPin, MdPhoneIphone, MdMail } from "react-icons/md";


import emailjs from "@emailjs/browser";

export const Contact = () => {

    const form = useRef();

    const formInitialDetails = {
        name: '',
        email: '',
        message: '',
    }
      
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_twfd7ul",
            "template_9v3065o",
            form.current,
            "Qtlacp1ktw7UztZQA"
        )
        .then(
            (result) => {
            console.log(result.text);
            console.log("message sent");
            },
            (error) => {
            console.log(error.text);
            }
        );
        setFormDetails(formInitialDetails);
    };

    return (

        <div className="connect">
            <div className="connect-container">
                <div className="connect-fixed">
                    <h1>CONNECT</h1>
                    <div className="info">
                        <p className="mydetails"><MdLocationPin/>  +91 8338063687</p>
                        <p className="mydetails"><MdPhoneIphone/>  Shakti Nagar 1st lane, Berhampur-760001, Odisha</p>
                        <p className="mydetails"><MdMail/>  ramkrishnabehera1999@gmail.com</p>
                    </div>
                </div>
                <div className="connect-flex-item">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <input 
                            name="name"
                            placeholder="Name"
                            value={formDetails.name}
                            onChange={(e) => onFormUpdate('name',e.target.value)}
                            required
                        />
                        <input 
                            name="email"
                            placeholder="Email"
                            value={formDetails.email}
                            type="email"
                            onChange={(e) => onFormUpdate('email',e.target.value)}
                            required
                        /> 
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formDetails.message}
                            onChange={(e) => onFormUpdate('message',e.target.value)}
                        /> 
                        <button type="submit" className="send"> <span>{buttonText}</span> </button>
                    </form>
                </div>
            </div>
        </div>
    )
} 