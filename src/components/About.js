import React from "react";
import '../styles/about.css';
import profile from '../assets/profile.jpg';
import resume from '../assets/myResume.pdf';
import '../styles/style.css';


export const About = () => {
    return (
        <section className="about" id="aboutme">
            <h1 className="about-head">
                ABOUT ME
            </h1>
            <div class="container">
                <div class="fixed">
                    <img src={profile} width="350" height="400"></img>
                </div>
                <div class="flex-item">
                    <p className="desc">Graduate as a Software Engineer, looking for an Opportunity to contribute  <br />
my skills and knowledge of experience towards developing, analysing <br />
testing and debugging. As a fresher am willing to widen my thoughts and <br />
master new skills to build a better career to bring quality work towards the <br />
organization.  </p>
                    <p>
                        <a rel="noreferrer" className="fill" href={resume}>
                            View Resume
                        </a>
                    </p>
                </div>
            </div>    
        </section>
    )
}