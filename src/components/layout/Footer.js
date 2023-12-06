import React from "react";
import { iconMap } from "../../data/iconmap";


function Footer(props){
    const {github, linkedin} = props.socialLinks;
    const {openInNewWindow} = props;
    return(
        <footer>
            <button className="social-icn" onClick={() => openInNewWindow(github)}>
                { iconMap["GitHub"] }
            </button>
            <button className="social-icn" onClick={() => openInNewWindow(linkedin)}>
                { iconMap["LinkedIn"] }
            </button>
        </footer>
    )
}

export default Footer;