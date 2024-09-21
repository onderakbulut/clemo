"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "./index.css";

const ScrollToTop = (props) => {
    const [stick, setStick] = useState(false);
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        var position = window.pageYOffset;

        const scrollHandler = () => {
            let scrollPos = window.pageYOffset;
            if (scrollPos < 200) {
                setStick(false);
            } else if (scrollPos < position) {
                setStick(true);
            } else {
                setStick(false);
            }
            position = scrollPos;
        };

        window.addEventListener("scroll", function () {
            scrollHandler();
        });
        return () => {
            window.removeEventListener("scroll", function () {
                scrollHandler();
            });
        };
    }, [stick]);

    return (
        <button
            type="button"
            className={`scroll-top ${stick ? "show" : ""}`}
            onClick={onClickHandler}
            {...props}
        >
            <MdOutlineKeyboardArrowUp className="arrow-top" />
            <MdOutlineKeyboardArrowUp className="arrow-bottom" />
        </button>
    );
};

export default ScrollToTop;
