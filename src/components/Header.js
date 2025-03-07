import React from "react";

export default function Header(){
    return (
    <div className="header">
        <h1>Recruiter Dashboard</h1>
        <div className="menu-icon" onclick="toggleMenu()">
            <i className="fas fa-bars"></i>
        </div>
    </div>
);
}