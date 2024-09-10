import React from "react";
import knight from './img/knight.png'
import dungeon from './img/dungeon.jpg'
import './duelsection.css'

export default function DuelSection({stopMenuMusic, setAnyWindow, setMainGame, setDuels, setDuelSection}){

    const closeWindow = () => {
        setAnyWindow(false)
        setDuels(false)
    }

    return(
        <div className="duelSectionWrapper">
            <div style={{background: `url(${dungeon})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}  className="duelSectionContainer">
                <div className="insideContainer">
                    <img className="knight" src={knight} alt="Knight" draggable='false' />
                    <div className="textSpeech">
                        Make sure you equipped your weapon.
                    </div>
                    <button onClick={() => {setDuelSection(true); setMainGame(false); stopMenuMusic()}} className="battleBtn">Go Battle</button>
                </div>
                <button onClick={closeWindow} className="closeBtn"></button>
            </div>
        </div>
    )
}