import React from "react";
import Horse from '../components/Horse';

export default function GameScreen() {
    // Positions for horses arranged in a curved pattern like the image
    const positions = [
        { top: '100%', left: '10%', transform: 'rotate(90deg)' },
        { top: '100%', left: '17.3%', transform: 'rotate(90deg)' },
        { top: '100%', left: '24.6%', transform: 'rotate(90deg)' },
        { top: '100%', left: '31.6%', transform: 'rotate(90deg)' },
        { top: '100%', left: '38.6%', transform: 'rotate(90deg)' },
        { top: '100%', left: '45.6%', transform: 'rotate(80deg)' },
        { top: '99%', left: '52.6%', transform: 'rotate(70deg)' },
        { top: '97%', left: '59%', transform: 'rotate(60deg)' },
        { top: '95%', left: '65.5%', transform: 'rotate(50deg)' },
        { top: '92%', left: '71%', transform: 'rotate(10deg)' },
        { top: '87.5%', left: '72%', transform: 'rotate(310deg)' },
        { top: '85.5%', left: '65.8%', transform: 'rotate(270deg)' },
        
        
        { top: '97%', left: '4.0%', transform: 'rotate(60deg)' },
        { top: '15%', left: '25%', transform: 'rotate(0deg)' },
        { top: '20%', left: '40%', transform: 'rotate(20deg)' },
        { top: '30%', left: '50%', transform: 'rotate(30deg)' },
        { top: '45%', left: '55%', transform: 'rotate(45deg)' },
        { top: '60%', left: '50%', transform: 'rotate(60deg)' },
        { top: '70%', left: '40%', transform: 'rotate(70deg)' },
        { top: '75%', left: '25%', transform: 'rotate(80deg)' },
    ];

    return (
        <div style={{paddingBottom: "80px"}}>
        <div style={{ position: 'relative', width: '100%', height: '600px' } }>
            {positions.map((pos, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        transform: pos.transform,
                    }}
                >
                    <Horse />
                </div>
            ))}
        </div>
        </div>
    );
}