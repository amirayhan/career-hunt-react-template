import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
    const [fix, setFix] = useState(false);

    const setFixed = () => {
        if (window.scrollY >= 400) {
            setFix(true);
        } else {
            setFix(false);
        }
    };
    window.addEventListener("scroll", setFixed);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <button onClick={() => handleBackToTop()} className={fix ? "back_to_top active_fixed" : "back_to_top"}>
                <FontAwesomeIcon icon={faArrowUpLong} />
            </button>
        </div>
    );
};

export default BackToTop;
