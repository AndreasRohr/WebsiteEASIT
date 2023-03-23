import * as React from "react"
import "../styles/collapsible.css"

const Collapsible = ({title, content}) => {
    const [isActive, setIsActive] = React.useState({card: false, heading: false});
    const [isContentVisible, setIsContentVisible] = React.useState(false);

    const toggleCollapsible = () => {
        setIsActive({card: !isActive.card, heading: !isActive.heading});
        setIsContentVisible(!isContentVisible);
    }

    return (
        <div className={`toggle-card ${isActive.card ? 'active' : ''}`}>
            <div className={`toggle-heading ${isActive.heading ? 'active' : ''}`} onClick={toggleCollapsible}>
                <h4 className="toggle-heading-text">{title}</h4>
                <button className={`toggle-card-icon ${isActive.card ? 'active' : ''}`}>
                    <svg id="Regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path className="cls-1" d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"/>
                    </svg>
                </button>
            </div>
            <div className={`toggle-content ${isContentVisible ? 'show' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Collapsible
