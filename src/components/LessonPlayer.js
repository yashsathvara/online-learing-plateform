import React from 'react';

const LessonPlayer = ({ lesson }) => {
    return (
        <div 
            className="lesson-player-container" 
            style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '15px', 
                maxWidth: '800px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 style={{ color: '#333', marginBottom: '20px' }}>{lesson.title}</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <video 
                    src={lesson.videoUrl} 
                    controls 
                    style={{ 
                        width: '100%', 
                        maxWidth: '700px', 
                        borderRadius: '10px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                    }}
                ></video>
            </div>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>{lesson.content}</p>
        </div>
    );
};

export default LessonPlayer;
