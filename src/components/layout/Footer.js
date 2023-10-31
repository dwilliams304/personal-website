import React from "react";
import { iconMap } from "../../Helpers/iconmap";


function Footer(props){
    const {github, linkedin} = props.socialLinks;
    const {openInNewWindow} = props;
    return(
        <footer>
            <button className="social-icn" onClick={() => openInNewWindow(github)}>
                { iconMap["github"] }
            </button>
            <button className="social-icn" onClick={() => openInNewWindow(linkedin)}>
                { iconMap["linkedin"] }
            </button>
        </footer>
    )
}

export default Footer;