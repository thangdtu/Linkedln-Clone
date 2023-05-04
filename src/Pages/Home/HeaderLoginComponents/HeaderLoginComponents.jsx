import React from "react";
import LinkedInLogo from "../../../assets/LinkedInLogo.png";
import "../HeaderLoginComponents/HeaderLoginComponents.scss";
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
        <img src={LinkedInLogo} className="linkedinLogo" />
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
          <div className="join-now-btn" >Join now</div>
          <div className="sign-in-btn" >Sign in</div>
        </div>
      </div>
    </div>
  );
}
