import React from 'react';
import '../App.css'; 

const Messages = () => {
    const messages = [
        {
            id: 1,
            sender: 'Instructor John',
            content: 'Don’t forget to submit your assignments by Friday!',
            date: '2024-10-17 10:30 AM',
        },
        {
            id: 2,
            sender: 'Student Sarah',
            content: 'Can I get some help with the homework?',
            date: '2024-10-17 09:45 AM',
        },
        {
            id: 3,
            sender: 'Instructor Emily',
            content: 'Your project presentations are scheduled for next week.',
            date: '2024-10-16 03:00 PM',
        },
        {
            id: 4,
            sender: 'Student Mike',
            content: 'I have a question regarding the lecture notes.',
            date: '2024-10-15 01:15 PM',
        },
    ];

    return (
        <div 
            className="messages-container" 
            style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '30px 50px', 
                maxWidth: '800px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 className="messages-title" style={{ color: 'grey', textAlign: 'center', marginBottom: '20px' }}>Messages</h2>
            <ul className="messages-list" style={{ listStyleType: 'none', padding: 0 }}>
                {messages.map((message) => (
                    <li 
                        key={message.id} 
                        className="message-item" 
                        style={{ 
                            padding: '15px', 
                            backgroundColor: '#ffffff', 
                            marginBottom: '15px', 
                            borderRadius: '15px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                            transition: 'background-color 0.3s ease, transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0f7fa'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                        <h4 className="message-sender" style={{ color: '#e5cec8', marginBottom: '5px' }}>{message.sender}</h4>
                        <p className="message-content" style={{ color: '#333', marginBottom: '10px' }}>{message.content}</p>
                        <span className="message-date" style={{ color: '#888', fontSize: '14px' }}>{message.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
