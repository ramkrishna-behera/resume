import React from "react";
import { MdExpandLess } from "react-icons/md";
import { ImTwitter, ImLinkedin, ImGithub } from "react-icons/im";

import '../styles/style.css';
import '../styles/footer.css';

export const Footer = () => {
    return(
        <div className="footer">
            <a href="#intro" className="uptop">
            <MdExpandLess fontSize={'xxx-large'}/>
            </a>
            <div className="social-link">
                <a href="" className="hover-item" target="_blank">
                    <i>
                        <ImTwitter color="white" size={'30px'}/>
                    </i>
                </a>
                <a href="https://www.linkedin.com/in/ramkrishna-behera-65b2ba199/" className="hover-item" target="_blank">
                    <i>
                        <ImLinkedin color="white" size={'30px'}/>
                    </i>
                </a>
                <a href="https://github.com/ramkrishna-behera" className="hover-item" target="_blank">
                    <i>
                        <ImGithub color="white" size={'30px'}/>
                    </i>
                </a>
                <hr></hr>
                <p className="footer-text">2023 - Designed & Developed by Ram Krishna Behera</p>
            </div>
        </div>
    )
}