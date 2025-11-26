import React from 'react';
import backgroundImage from '../assets/images/background.jpg';
import tawga from '../assets/images/tawga.png';
import '../styles/HomeScreen.css';
import { FaUserFriends, FaCog, FaUser, FaTrophy, FaUserPlus } from "react-icons/fa";

export default function HomeScreen() {
    return (
        <div className="home-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="header">
                <div className="header-left">
                    <FaUser className="user-icon" />
                </div>
                <div className="header-center">
                    <span className="coins-badge">100</span>
                    <span className="plus-icon">+</span>
                </div>
                <div className="header-right">
                    <div className="calendar-icon"></div>
                    <FaCog className="settings-icon" />
                </div>
            </div>

            <div className="content">
               
                <button className="play-button">Тоглох</button>
                <div className="coins-display">
                    <span className="coin-amount">1,400</span>
                </div>
                
            </div>

            <div className="footer">
                <div className="footer-buttons">
                    <button className="footer-btn">
                        <FaUserFriends />
                        <span>Найз</span>
                    </button>
                    <button className="footer-btn">
                        <FaTrophy />
                        <span>Эрэмбэ</span>
                    </button>
                    <button className="footer-btn">
                        <FaUserPlus />
                        <span>Урих</span>
                    </button>
                    
                </div>

                
            </div>
                              <img src={tawga} alt="Horse Racing" className="banner-image" />
        </div>
    );
}