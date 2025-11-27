import React from 'react';

export default function GameScreen1() {
    return (
        <div className="parent" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div className="div1" style={{ flex: 1, display: 'flex', backgroundColor: '#E1E4F5', borderRadius: '10px', margin: '10px' }}>
                <div style={{ flex: 1, borderRight: '1px solid black', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
                    {[{ id: 1, color: '#FF6B6B' }, { id: 2, color: '#4ECDC4' }, { id: 3, color: '#45B7D1' }, { id: 4, color: '#FFA07A' }].map((tire) => (
                        <div key={tire.id} style={{ width: '20px', height: '20px', borderRadius: '50%', border: '8px solid #333', background: tire.color }}></div>
                    ))}
                </div>
                <div style={{ flex: 2 }}></div>
            </div>
            <div className="div2" style={{ flex: 11, borderBottom: '1px solid black', backgroundColor: '#E1E4F5', borderRadius: '10px', margin: '10px' }}></div>
            <div className="div3" style={{ flex: 1, display: 'flex', borderRight: '1px solid black', backgroundColor: '#E1E4F5', borderRadius: '10px', margin: '10px' }}>
                <div style={{ flex: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
                    {[{ id: 1, color: '#FF6B6B' }, { id: 2, color: '#4ECDC4' }, { id: 3, color: '#45B7D1' }].map((tire) => (
                        <div key={tire.id} style={{ width: '20px', height: '20px', borderRadius: '50%', border: '8px solid #333', background: tire.color }}></div>
                    ))}
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                    <button style={{ padding: '10px 20px', backgroundColor: '#FF6B6B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Click Me</button>
                </div>
            </div>
        </div>

    );
}