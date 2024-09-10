import React from "react";
import './result.css'

export default function LostResult({ stop, playMenuMusic, setTournamentSection, setMainGame }) {

    const backBtn = () => {
        playMenuMusic()
        stop()
        setTournamentSection(false)
        setMainGame(true)
    }

    return (
        <div className="resultWrapper">
            <div className="resultContainer">
                <h3>Unfortunately!</h3>
                <p>You lost!</p>
                <p>Good luck next time...</p>
                <p style={{fontSize: '0.9em'}}>Tip: You dont die when you lost on duel...</p>
                <button onClick={backBtn}>Back to town</button>
            </div>
        </div>
    )
}