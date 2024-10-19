import React from 'react';
import '../App.css'; 

const Lecture = () => {
    const lectures = [
        {
            title: 'React Basics',
            duration: '1 hour',
            timing: 'Monday, 10:00 AM - 11:00 AM',
            description: 'Learn the fundamentals of React, including components, props, and state management.',
            videoUrl: 'https://youtu.be/SqcY0GlETPk',
        },
        {
            title: 'JavaScript Advanced',
            duration: '1.5 hours',
            timing: 'Wednesday, 2:00 PM - 3:30 PM',
            description: 'Dive deep into advanced JavaScript concepts, including closures, promises, and async programming.',
            videoUrl: 'https://youtu.be/R9I85RhI7Cg?t=4',
        },
    ];

    return (
        <div 
            className="lecture-container" 
            style={{ borderRadius: '50px 30px', padding: '20px', backgroundColor: '#f8f9fa', maxWidth: '800px', margin: '0 auto' }}
        >
            <h2 className="lecture-title" style={{ color: 'grey', textAlign: 'center', marginBottom: '20px' }}>Lectures</h2>

            {lectures.map((lecture, index) => (
                <div 
                    key={index} 
                    className="lecture-card" 
                    style={{
                        padding: '20px', 
                        backgroundColor: '#ffffff', 
                        marginBottom: '20px', 
                        borderRadius: '15px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0f7fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                    <h3 
                        className="lecture-card-title" 
                        style={{ color: '#e5cec8', marginBottom: '10px' }}
                    >
                        {lecture.title}
                    </h3>
                    <p className="lecture-card-duration">Duration: {lecture.duration}</p>
                    <p className="lecture-card-timing">Timing: {lecture.timing}</p>
                    <p className="lecture-card-description" style={{ marginBottom: '20px' }}>{lecture.description}</p>
                    <a 
                        href={lecture.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <button 
                            className="watch-button" 
                            style={{
                                backgroundColor: '#4a90e2', 
                                border: 'none', 
                                padding: '10px 20px', 
                                borderRadius: '5px', 
                                color: 'white', 
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                        >
                            Watch Now
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Lecture;
