import React, { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const allCards = [
    { name: "Alice Johnson", email: "alice.johnson@test.com", status: "Shortlisted", experience: 7, role: "Product Manager", location: "San Francisco" },
    { name: "Bob Smith", email: "bob.smith@test.com", status: "In Review", experience: 3, role: "Junior Developer", location: "Austin" },
    { name: "Charlie Brown", email: "charlie.brown@test.com", status: "Rejected", experience: 10, role: "Tech Lead", location: "Seattle" },
    { name: "Diana Prince", email: "diana.prince@test.com", status: "Shortlisted", experience: 5, role: "UI/UX Designer", location: "New York" },
    { name: "Ethan Hunt", email: "ethan.hunt@test.com", status: "In Review", experience: 8, role: "DevOps Engineer", location: "Boston" },
    { name: "Fiona Gallagher", email: "fiona.gallagher@test.com", status: "Rejected", experience: 6, role: "Backend Developer", location: "Chicago" },
    { name: "George Costanza", email: "george.costanza@test.com", status: "Shortlisted", experience: 4, role: "Business Analyst", location: "Miami" },
    { name: "Hannah Baker", email: "hannah.baker@test.com", status: "In Review", experience: 2, role: "Intern", location: "Los Angeles" },
    { name: "Ian Malcolm", email: "ian.malcolm@test.com", status: "Rejected", experience: 12, role: "Data Scientist", location: "Denver" },
    { name: "Jessica Jones", email: "jessica.jones@test.com", status: "Shortlisted", experience: 9, role: "Security Engineer", location: "Houston" }
];


const List = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = useState(allCards);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (filter) => {
        setAnchorEl(null);  // Always close the menu first
        const filteredCards = filter === "All" ? allCards : allCards.filter(card => card.status === filter);
        setData(filteredCards);
    };

    return (
        <div className="main-content">
            <div className="filters text-right">
                <i className="fa-light fa-search"></i>
                <i className="fa-light fa-filter"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                ></i>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => handleClose('All')}>All</MenuItem>
                    <MenuItem onClick={() => handleClose('Shortlisted')}>Shortlisted</MenuItem>
                    <MenuItem onClick={() => handleClose('In Review')}>In Review</MenuItem>
                    <MenuItem onClick={() => handleClose('Rejected')}>Rejected</MenuItem>
                </Menu>
            </div>

            <div className="container">
                {data.map((card, index) => (
                    <div key={index} className={`card ${card.status.toLowerCase().replace(" ", "")}`}>
                        <div className="card-header">
                            <a href="/Detail">{card.name}</a>
                            <span>{card.email}</span>
                        </div>
                        <hr />
                        <p><i className="fa-light fa-briefcase"></i> {card.role}</p>
                        <p><i className="fa-light fa-code"></i> {card.experience} Years</p>
                        <p><i className="fa-light fa-map-marker-alt"></i> {card.location}</p>
                        <div className="btn-status">{card.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
