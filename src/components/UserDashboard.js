import React, { useState } from 'react';
import '../App.css'; 

const Dashboard = () => {
    
    const [userStats] = useState({
        completedCourses: 5,
        enrolledCourses: 10,
        totalHoursWatched: 25,
    });

    const [activities] = useState([
        { id: 1, message: 'Completed the course: React Basics', date: '2024-10-18' },
        { id: 2, message: 'Started the course: JavaScript Advanced', date: '2024-10-15' },
        { id: 3, message: 'Watched: CSS for Beginners', date: '2024-10-14' },
    ]);

    const [upcomingTasks] = useState([
        { id: 1, title: 'Finish project for JavaScript Advanced', dueDate: '2024-10-20' },
        { id: 2, title: 'Watch the next lecture on React Hooks', dueDate: '2024-10-21' },
    ]);

    const [newCourses] = useState([
        { id: 1, title: 'Web Development Bootcamp', description: 'Learn full-stack web development from scratch.', duration: '3 months' },
        { id: 2, title: 'Data Science with Python', description: 'Dive into data analysis and machine learning.', duration: '2 months' },
        { id: 3, title: 'Digital Marketing Masterclass', description: 'Understand the ins and outs of digital marketing.', duration: '1.5 months' },
    ]);

    const handleEnroll = (courseTitle) => {
        alert(`Enrolled in ${courseTitle}`);
    };

    return (
        <div className="dashboard-container" style={{ borderRadius: "50px", padding: '20px', backgroundColor: '#4a90e2' }}> {/* Updated background color */}
            <h2 className="dashboard-title" style={{ color: "white" }}>Dashboard</h2>

            <div className="user-stats" style={{ display: 'flex', justifyContent: 'space-around' }}>
                {Object.entries(userStats).map(([key, value]) => (
                    <div key={key} className="stat-card" style={{ backgroundColor: "#f0f0f0", borderRadius: '10px', padding: '20px', textAlign: 'center', flex: '1', margin: '0 10px' }}>
                        <h3 style={{ color: "grey" }}>{value}</h3>
                        <p style={{ color: "grey" }}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</p>
                    </div>
                ))}
            </div>

            <div className="activities-section">
                <h3 style={{ color: "white" }}>Recent Activities</h3>
                <ul>
                    {activities.map((activity) => (
                        <li key={activity.id} className="activity-item" style={{ margin: '10px 0', padding: '10px', border: '1px solid #f0f0f0', borderRadius: '5px', backgroundColor: 'white' }}>
                            <p>{activity.message}</p>
                            <small>{activity.date}</small>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="upcoming-tasks">
                <h3 style={{ color: "white" }}>Upcoming Tasks</h3>
                <ul>
                    {upcomingTasks.map((task) => (
                        <li key={task.id} className="task-item" style={{ margin: '10px 0', padding: '10px', border: '1px solid #f0f0f0', borderRadius: '5px', backgroundColor: 'white' }}>
                            <strong>{task.title}</strong> - Due: {task.dueDate}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="new-courses-section">
                <h3 style={{ color: "white" }}>New Courses</h3>
                <ul>
                    {newCourses.map((course) => (
                        <li key={course.id} className="course-item" style={{ margin: '10px 0', padding: '10px', border: '1px solid #f0f0f0', borderRadius: '5px', backgroundColor: 'white' }}>
                            <h4 style={{ color: "#4a90e2" }}>{course.title}</h4>
                            <p>{course.description}</p>
                            <p>Duration: {course.duration}</p>
                            <button 
                                style={{
                                    backgroundColor: "#4a90e2", // Changed button background to match header
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    padding: '10px 15px', 
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s, transform 0.2s' // Smooth transition
                                }} 
                                className="enroll-button" 
                                onClick={() => handleEnroll(course.title)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#3a7cc1'; // Darker shade on hover
                                    e.currentTarget.style.transform = 'scale(1.05)'; // Scale effect on hover
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#4a90e2'; // Reset background color
                                    e.currentTarget.style.transform = 'scale(1)'; // Reset scale
                                }}
                            >
                                Enroll Now
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
