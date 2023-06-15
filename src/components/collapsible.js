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
            <div className={`toggle-heading ${isActive.heading ? 'active' : ''}`} onClick={toggleCollapsible} id={"FAQ-heading"}>
                <h4 className="toggle-heading-text" id={"FAQ-H4"}>{title}</h4>
                <button className={`toggle-card-icon ${isActive.card ? 'active' : ''}`} title="expand" id={"FAQ-Button"}>
                    <svg id="Regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path className="cls-1" d="m 0 0 l 10 10 m -0.5 0 l 10 -10"/>
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
