import React, { useState } from "react";
import "../FindJob/FindJob.scss";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

export default function FindJob() {
    const searches = [
        {
            name: "Business Development",
            path: "BusinessDevelopment",
        },
        {
            name: "Administrative Assistant",
            path: "AdministrativeAssistant",
        },
        {
            name: "Customer Service",
            path: "CustomerService",
        },
        {
            name: "Engineering",
            path: "Enginerring",
        },
        {
            name: "Finance",
            path: "Finance",
        },
        {
            name: "Information Technology",
            path: "InformationTechnology",
        },
        {
            name: "Marketing",
            path: "Marketing",
        },
        {
            name: "Operations",
            path: "Operations",
        },
        {
            name: "Retail Associate",
            path: "RetailAssociate",
        },
    ];
    const [visible, setVisible] = useState(3);
    const showMoreBtn = () => {
        setVisible((prevValue) => prevValue + searches.length);
    };
    const showLessBtn = () => {
        setVisible((prevValue) => prevValue - searches.length);
    };
    return (
        <div className="wrapper-findjob">
            <div className="title">Find the right job or internship for you</div>
            <div className="suggested-searches">
                <div className="suggested-searches-tittle">SUGGESTED SEARCHES</div>
                <div className="search-filter">
                    {searches.slice(0, visible).map((val, key) => {
                        return (
                            <Link key={key} className="search-name" to={val.path}>
                                <div className="search-name-title">{val.name}</div>
                            </Link>
                        );
                    })}
                </div>
                <button className="showmore-btn" onClick={showMoreBtn}>
                    <div className="showmore-btn-title">Show more</div>
                    <div className="icon-showmore-btn" ><AiFillCaretDown/></div>
                </button>
            </div>
        </div>
    );
}
