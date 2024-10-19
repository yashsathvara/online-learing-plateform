import React, { useState } from 'react';
import '../App.css'; 

const Homework = () => {
    const predefinedHomework = {
        Math: [
            { title: 'Algebra Homework', dueDate: '2024-10-20', isCompleted: false },
            { title: 'Geometry Assignment', dueDate: '2024-10-22', isCompleted: false },
        ],
        Science: [
            { title: 'Physics Experiment Report', dueDate: '2024-10-21', isCompleted: false },
            { title: 'Biology Lab Work', dueDate: '2024-10-25', isCompleted: false },
        ],
        English: [
            { title: 'Essay on Shakespeare', dueDate: '2024-10-18', isCompleted: false },
            { title: 'Grammar Worksheet', dueDate: '2024-10-24', isCompleted: false },
        ],
        History: [
            { title: 'World War II Project', dueDate: '2024-10-30', isCompleted: false },
            { title: 'Ancient Civilizations Review', dueDate: '2024-10-28', isCompleted: false },
        ],
        Geography: [
            { title: 'Map Skills Worksheet', dueDate: '2024-10-26', isCompleted: false },
            { title: 'Climate Change Report', dueDate: '2024-10-29', isCompleted: false },
        ],
    };

    const [selectedSubject, setSelectedSubject] = useState('');

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: 'grey', textAlign: 'center', marginBottom: '20px' }}>Homework</h2>

            <select 
                onChange={(e) => setSelectedSubject(e.target.value)} 
                value={selectedSubject}
                style={{ padding: '10px', borderRadius: '5px', width: '100%', marginBottom: '20px', fontSize: '16px' }}
            >
                <option value="">Select a Subject</option>
                {Object.keys(predefinedHomework).map((subject) => (
                    <option key={subject} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>

            {selectedSubject && (
                <div>
                    <h3 style={{ color: '#007bff', textAlign: 'center', marginBottom: '15px' }}>{selectedSubject} Homework</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {predefinedHomework[selectedSubject].map((item, index) => (
                            <li 
                                key={index} 
                                style={{ 
                                    padding: '10px', 
                                    backgroundColor: '#ffffff', 
                                    marginBottom: '10px', 
                                    borderRadius: '5px', 
                                    transition: 'background-color 0.3s ease', 
                                    textDecoration: item.isCompleted ? 'line-through' : 'none',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0f7fa'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                            >
                                <strong>{item.title}</strong> - Due: <span>{item.dueDate}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Homework;
