import "../Conandlearn/Conandlearn.scss";
import ImgCon from "../../../assets/ImgCon.svg";
import ImgLearn from "../../../assets/ImgLearn.svg";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const topic = [
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
  {
    title: "Business Analysis and Strategy ",
    desc: "890+ courses",
  },
];

export default function Conandlearn() {
  const [openFolder, setOpenFolder] = useState(false);
  return (
    <div className="wrapper-conandlearn">
      <div className="con">
        <img className="imgcon" src={ImgCon} />
        <div className="con-title">Connect with people who can help</div>
        <button className="con-btn">
          <div className="con-btn-title">Find people you know</div>
        </button>
      </div>
      <div className="learn">
        <img className="imglearn" src={ImgLearn} />
        <div className="learn-title">Learn your skills you need succced</div>
        <button
          className="learn-btn"
          onClick={() => setOpenFolder((prev) => !prev)}
        >
          <div className="learn-btn-title">
            Choose a topic learn about
          </div>
          <AiFillCaretDown className="learn-btn-icon" />
        </button>
        {openFolder && (
          <div className="dropdown-conandlearn-wrapper">
            {topic.map((value, key) => {
              return (
                <div className="dropdown-conandlearn" key={key}>
                  <div className="title-dropdown">{value.title}</div>
                  <div className="desc-dropdown">{value.desc}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
