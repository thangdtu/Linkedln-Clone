import React from "react";
import "../SlideList/SlideList.scss";
export const CarouselItem = ({ item, width }) => {
    return (
        <div className="wrapper-slidelist" style={{ width: width }}>
            <div className="slidelist-inner">
                <div className="slidelist-title">
                    {item.title}
                </div>
                <div className="desc">
                    {item.description}
                </div>
            </div>
            <div className="postjob-inner">
                <img className="img-slidelist" src={item.icon} />
            </div>
        </div>
    );
};

