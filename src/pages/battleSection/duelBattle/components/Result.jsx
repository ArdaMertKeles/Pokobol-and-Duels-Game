import React from "react";
import './result.css'
import ducat from './img/ducat.png'

export default function Result({ stop, playMenuMusic, setLevelUp, currentMoney, currentXp, addedXp, addedMoney, setDuelSection, setMainGame }) {

    const backBtn = () => {
        playMenuMusic()
        stop()
        if(currentXp > 1000){
            setDuelSection(false)
            setLevelUp(true)
        }else{
            setDuelSection(false)
            setMainGame(true)
        }
    }

    return (
        <div className="resultWrapper">
            <div className="resultContainer">
                <h3>Congratulations!</h3>
                <p>You won!</p>
                <div className="info">
                    <div className="economyContainer">
                        <img src={ducat} alt="Ducat" draggable='false' />
                        <p>{currentMoney}</p>
                        <p>(+{addedMoney})</p>
                    </div>
                    <div className="xpContainer">
                        <p> Xp: {currentXp} / 1000 (+{addedXp})</p>
                    </div>
                </div>
                <button onClick={backBtn}>Back to town</button>
            </div>
        </div>
    )
}