import React, { useState } from 'react';
import '../App.css'; 

const Settings = () => {
    const [settings, setSettings] = useState({
        username: 'test',
        email: 'test@gmail.com',
        notifications: true,
        darkMode: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Settings saved!');
    };

    return (
        <div 
            className="settings-container" 
            style={{ 
                borderRadius: "30px 50px", 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                maxWidth: '500px', 
                margin: '0 auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
        >
            <h2 style={{ color: "grey", textAlign: 'center' }}>Settings</h2>
            <form onSubmit={handleSubmit} className="settings-form">
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="username" style={{ color: "grey" }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={settings.username}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px', 
                            borderRadius: '5px', 
                            border: '1px solid #ccc', 
                            width: '100%', 
                            marginTop: '5px'
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ color: "grey" }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '10px', 
                            borderRadius: '5px', 
                            border: '1px solid #ccc', 
                            width: '100%', 
                            marginTop: '5px'
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ color: "grey" }}>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                            style={{ marginRight: '10px' }}
                        />
                        Enable Notifications
                    </label>
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ color: "grey" }}>
                        <input
                            type="checkbox"
                            name="darkMode"
                            checked={settings.darkMode}
                            onChange={handleChange}
                            style={{ marginRight: '10px' }}
                        />
                        Enable Dark Mode
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="settings-save-btn" 
                    style={{ 
                        backgroundColor: "#4a90e2", 
                        color: "#fff", 
                        padding: '10px', 
                        borderRadius: '5px', 
                        border: 'none', 
                        cursor: 'pointer', 
                        transition: 'background-color 0.3s' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;
