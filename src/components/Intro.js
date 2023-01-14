import React from "react";
import '../styles/intro.css';
import '../styles/style.css';

export const Intro = () => {
    return (
        <div className="intro-body" id="intro">
            <h1 className="intro">
                Hi, my name is <span className="name">Ram</span>
                <br/>
                And am a Software Developer.
            </h1>
            <p>
                <button rel="noreferrer" className="fill" href="#aboutme" target="_blank">
                    Know more
                </button>
            </p>
        </div>
    )
}