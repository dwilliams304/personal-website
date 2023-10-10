import React from "react";


function Footer(props){
    const {github, linkedin} = props.socialLinks;
    const {openInNewWindow} = props;
    return(
        <footer>
            <h2>Property of Davis Williams</h2>
            <button className="social-icn" onClick={() => openInNewWindow(github)}>github</button>
            <button className="social-icn" onClick={() => openInNewWindow(linkedin)}>linkedin</button>
        </footer>
    )
}

export default Footer;