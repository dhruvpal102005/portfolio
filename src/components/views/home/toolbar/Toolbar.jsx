import { useState, useEffect, useRef } from "react";
import Popup from "@/components/elements/Popup";
import SocialShare from "./SocialShare";
import TechStack from "./TechStack";

const Toolbar = () => {
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [showInfoPopup, setShowInfoPopup] = useState(false);

    // Refs for detecting clicks outside the popups
    const PopupRef = useRef(null);

    // Close popups when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (PopupRef.current && !PopupRef.current.contains(event.target) && !event.target.closest('.toolbar button')) {
                setShowSharePopup(false);
                setShowInfoPopup(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="toolbar absolute top-5 right-5 flex gap-2">
            {/* Tombol Share */}
            <div className="relative flex gap-2" ref={PopupRef}>
                <button
                    onClick={() => window.open("https://github.com/sponsors/dwiwijaya", "_blank")}
                    aria-label="Sponsor"
                    title="Sponsor"
                    data-umami-event="Sponsor"
                    target="_blank"
                    className="bg-container px-3 h-full rounded-lg text-primary border border-stroke"
                >
                    <i className="fal fa-heart"></i>
                </button>
                <button
                    data-umami-event="Share"
                    aria-label="Share"
                    title="Share"
                    className="bg-container px-3 h-10 rounded-lg text-primary border border-stroke"
                    onClick={() => { setShowSharePopup((prev) => !prev), setShowInfoPopup(false) }}
                >
                    <i className="fal fa-up-right-from-square"></i>
                </button>
                <button
                    data-umami-event="Info"
                    aria-label="Info"
                    title="Info"
                    className="bg-container px-3 h-10 rounded-lg text-primary border border-stroke"
                    onClick={() => { setShowInfoPopup((prev) => !prev); setShowSharePopup(false) }}
                >
                    <i className="fal fa-lg fa-microchip"></i>
                </button>
                <Popup isVisible={showSharePopup}>
                    <div className="">
                        <SocialShare />
                    </div>
                </Popup>
                <Popup isVisible={showInfoPopup}>
                    <div className="">
                        <TechStack />
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default Toolbar;
