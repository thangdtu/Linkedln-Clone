import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "../SlideList/SlideList.scss";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Let the right people know you’re open to work",
      description:
        "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
      icon: "https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own",
    },
    {
      title: "Conversations today could lead to opportunity tomorrow",
      description:
        "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career",
      icon: "https://static.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5",
    },
    {
      title: "Stay up to date on your industry",
      description:
        "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
      icon: "https://static.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel-wrapper" >
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <div>
          <BsFillArrowLeftCircleFill className="icon-btn" />
        </div>{" "}
      </button>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 106.5}%)` }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"200%"} />;
          })}
        </div>
      </div>
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <div >
          <BsFillArrowRightCircleFill className="icon-btn"  />
        </div>
      </button>
    </div>
  );
};
