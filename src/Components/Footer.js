import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Footer(props){
    const {github, linkedin} = props.socialLinks;
    const {openInNewWindow} = props;
    return(
        <footer>
            <button className="social-icn" onClick={() => openInNewWindow(github)}>
                <FaGithub />
            </button>
            <button className="social-icn" onClick={() => openInNewWindow(linkedin)}>
                <FaLinkedin />
            </button>
        </footer>
    )
}

export default Footer;