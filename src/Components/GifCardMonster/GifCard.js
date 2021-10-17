import React from "react";
import './GifCard.css';
import monster from "../../Assets/monster.gif";
import ProgressBar from "./ProgressBar.js";

    const testData = [
        { name: "PV :", bgcolor: "rgba(133,6,6,1)" , bgbar: "rgba(133,6,6,0.4)" , completed: 60 },
        { name: "MN :", bgcolor: "rgba(0,140,255,1)", bgbar: "rgba(0,140,255,0.4)", completed: 30 },
        { name: "PS :", bgcolor: "rgba(59,135,83,1)", bgbar: "rgba(59,135,83,0.4)", completed: 23 },
    ];

    export default function GifCard(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="card-title">Godzilla</h1>
                <img className="card-image" src={monster} alt="Logo" />
            </div>
            <div className="ProgressBar">
                    {testData.map((item, idx) => (
                    <ProgressBar 
                    key={idx}
                    name={item.name}
                    bgcolor={item.bgcolor}
                    bgbar={item.bgbar}
                    completed={item.completed} />
                    ))}
            </div>
        </div>
    );
    }
