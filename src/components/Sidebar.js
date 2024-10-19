import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Sidebar = () => {
    return (
        <div 
            className="sidebar" 
            style={{
                borderRadius: "2px 30px 50px 20px", 
                backgroundColor: '#f8f9fa', 
                padding: '20px', 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                width: '200px'
            }}
        >
            <h2 style={{ color: '#333', textAlign: 'center' }}>Menu</h2>
            <ul className="sidebar-menu" style={{ listStyleType: 'none', padding: 0 }}>
                {[
                    { path: "/dashboard", label: "Dashboard" },
                    { path: "/schedule", label: "Schedule" },
                    { path: "/homework", label: "Homework" },
                    { path: "/lecture", label: "Lecture" },
                    { path: "/progress", label: "Progress" },
                    { path: "/messages", label: "Messages" },
                    { path: "/settings", label: "Settings" },
                ].map((item) => (
                    <li key={item.path} style={{ margin: '10px 0' }}>
                        <Link 
                            to={item.path} 
                            className="sidebar-link" 
                            style={{
                                color: "grey", 
                                textDecoration: 'none', 
                                padding: '10px', 
                                borderRadius: '5px', 
                                display: 'block', 
                                transition: 'background-color 0.3s, color 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#4a90e2'; // Change background color on hover
                                e.currentTarget.style.color = 'white'; // Change text color on hover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'; // Reset background color
                                e.currentTarget.style.color = 'grey'; // Reset text color
                            }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
