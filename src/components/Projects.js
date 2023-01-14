import React from "react";
import '../styles/projects.css';
import '../styles/style.css';
import ml from '../assets/ml.jpg';
import eagle from '../assets/Eagle.jpg';


export const Projects = () => {
    return (
        <div className="projects-body">
            <h1 className="projects-head">
                PROJECTS
            </h1>
            <div class="project-container">
                <div class="project-fixed">
                    <h2 className="project-title">LSB based Steganalysis</h2>
                    <div><p className="desc">There's a secret message inside the image you're seeing beside using Last significant bit. My task was was to extract the message hidden in the last bits of pixel in the image.</p></div>
                    <button
                        rel="noreferrer"
                        target="_blank"
                        className="fill"
                        href="#!"
                        disabled
                    >
                        See Live
                    </button>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        class="cta-btn text-color-main"
                        href="#!"
                    >
                        Source Code
                    </a>
                </div>
                <div class="project-flex-item">
                    <div class="col-lg-8 col-sm-12">
                        <div class="project-wrapper__image load-hidden">
                            
                                <div
                                    data-tilt
                                    data-tilt-max="4"
                                    data-tilt-glare="true"
                                    data-tilt-max-glare="0.5"
                                    class="thumbnail rounded js-tilt"
                                >
                                    <img
                                        alt="Project Image"
                                        class="img-fluid"
                                        src={eagle} width="400" height="400"
                                    />
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-container">
                <div class="project-fixed">
                    <h2 className="project-title">Diabetic Prediction</h2>
                    <div><p className="desc">This was a machine learning project where you predict diabetic in future by using some health constrains like a persons BMI, BloodPressure, SkinThickness etc. </p></div>
                    <button
                        rel="noreferrer"
                        target="_blank"
                        className="fill"
                        href="#!"
                        disabled
                    >
                        See Live
                    </button>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        class="cta-btn text-color-main"
                        href=""
                        disabled
                    >
                        Source Code
                    </a>
                </div>
                <div class="project-flex-item">
                    <div class="col-lg-8 col-sm-12">
                        <div class="project-wrapper__image load-hidden">
                            
                                <div
                                    data-tilt
                                    data-tilt-max="4"
                                    data-tilt-glare="true"
                                    data-tilt-max-glare="0.5"
                                    class="thumbnail rounded js-tilt"
                                >
                                    <img
                                        alt="Project Image"
                                        class="img-fluid"
                                        src={ml} width="800" height="300"
                                    />
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}