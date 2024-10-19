import React from 'react';
import '../App.css'; 

const Progress = () => {
    const courses = [
        {
            title: 'React Basics',
            progress: 80, 
            totalLessons: 10,
            completedLessons: 8,
        },
        {
            title: 'JavaScript Advanced',
            progress: 50,
            totalLessons: 12,
            completedLessons: 6,
        },
        {
            title: 'CSS Flexbox and Grid',
            progress: 30,
            totalLessons: 10,
            completedLessons: 3,
        },
        {
            title: 'HTML & CSS Fundamentals',
            progress: 100,
            totalLessons: 8,
            completedLessons: 8,
        },
    ];

    return (
        <div 
            className="progress-container" 
            style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '30px 50px', 
                maxWidth: '600px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 className="progress-title" style={{ color: "#e5cec8", textAlign: 'center', marginBottom: '20px' }}>Course Progress</h2>

            {courses.map((course, index) => (
                <div key={index} className="course-card" style={{ marginBottom: '20px' }}>
                    <h3 className="course-title" style={{ color: "#e5cec8", marginBottom: '10px' }}>{course.title}</h3>
                    <div className="progress-bar" style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', height: '20px' }}>
                        <div
                            className="progress-fill"
                            style={{ 
                                width: `${course.progress}%`, 
                                backgroundColor: '#4a90e2', 
                                height: '100%', 
                                transition: 'width 0.5s ease-in-out' 
                            }}
                        ></div>
                    </div>
                    <p className="progress-info" style={{ marginTop: '5px', color: '#333' }}>
                        {course.completedLessons} of {course.totalLessons} lessons completed ({course.progress}%)
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Progress;
