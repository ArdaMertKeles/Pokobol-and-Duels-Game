import React from "react";
import queen from './img/queen.png'
import castle from './img/castle.jpg'
import './tournamentsection.css'

export default function TournamentSection({stopMenuMusic, setAnyWindow, setTournaments, setTournamentSection, setMainGame}){

    const closeWindow = () => {
        setAnyWindow(false)
        setTournaments(false)
    }

    return(
        <div className="tournamentSectionWrapper">
            <div style={{background: `url(${castle})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}  className="tournamentSectionContainer">
                <div className="insideContainer">
                    <img className="queen" src={queen} alt="Knight" draggable='false' />
                    <div className="textSpeech">
                        Are you ready my child?
                    </div>
                    <button onClick={() => {setTournamentSection(true); setMainGame(false); stopMenuMusic()}} className="battleBtn">Go Battle</button>
                </div>
                <button onClick={closeWindow} className="closeBtn"></button>
            </div>
        </div>
    )
}