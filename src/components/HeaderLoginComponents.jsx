import React from "react";
import LinkedlnLogo from "../assets/linkedinLogo.png";
import "../Sass/HeaderLoginComponents.scss";
import {
  RiCompassDiscoverFill,
  RiBriefcaseFill,
  RiGroupFill,
} from "react-icons/ri";
import { AiFillPlaySquare } from "react-icons/ai";

export default function HeaderLoginComponents() {
  return (
    <div className="wrapper">
      <div className="inner">
        <img src={LinkedlnLogo} className="linkedinLogo" />
        <div className="SubHeadline">
          <div className="discover">
            <div className="icon">
              <RiCompassDiscoverFill size={20} />
            </div>
            <div>Discover</div>
          </div>
          <div className="people">
            <div className="icon">
              <RiGroupFill size={20} />
            </div>
            <div>people</div>
          </div>
          <div className="learning">
            <div className="icon">
              <AiFillPlaySquare size={20} />
            </div>
            <div>Learning</div>
          </div>
          <div className="jobs">
            <div className="icon">
              <RiBriefcaseFill size={20} />
            </div>
            <div>Jobs</div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
