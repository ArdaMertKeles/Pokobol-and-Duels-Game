import React from "react";
import './log.css'

export default function Log({ battleLog }) {

    return (
        <div className="logContainer">
            <h1>Battle Log</h1>
            <div className="log">
                {battleLog && battleLog.map((log, key) => (
                    <div key={key}>
                        <p>{log.log}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}