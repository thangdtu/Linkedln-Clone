import React from "react";
import "../PostJob/PostJob.scss";
export default function PostJob() {
    return (
        <div className="wrapper-postjob">
            <div className="title-postjob">Post your job for millions of people to see</div>
            <div className="postjob-inner">
                <button className="postjob-btn">
                    <div className="postjob-btn-title">Post a job</div>
                </button>
            </div>
        </div>
    );
}
