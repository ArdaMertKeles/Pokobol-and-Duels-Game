import React, { useEffect, useState } from "react";
import './mainMenu.css'
import MainMenuImage from './img/vintage-grunge-style-background-with-scratches-stains.jpg'
import MainMenuSound from './sounds/mainMenuSound.mp3'
import useSound from "use-sound";

export default function MainMenu({ charactersData, setLoading, setMainMenu, selectedCharacter, setSelectedCharacter }) {

    const [main, setMain] = useState(true)
    const [howToPlay, setHowToPlay] = useState(false)
    const [credits, setCredits] = useState(false)
    const [characterSelection, setCharacterSelection] = useState(false)
    const [volume, setVolume] = useState(0.3)
    const [play, {stop}] = useSound(MainMenuSound, { volume: volume })

    const playBtn = () => {
        setCharacterSelection(true)
        setMain(false)
    }

    const howToPlayBtn = () => {
        setHowToPlay(true)
        setMain(false)
    }

    const creditsBtn = () => {
        setCredits(true)
        setMain(false)
    }

    const backBtn = () => {
        setHowToPlay(false)
        setCredits(false)
        setCharacterSelection(false)
        setMain(true)
    }

    useEffect(() => {
        play()
    }, [play])

    const selection = (item) => {
        setSelectedCharacter(item)
    }

    const startGame = () => {
        setMainMenu(false)
        setLoading(true)
        stop()
    }

    return (
        <div className="mainMenuWrapper" style={{ backgroundImage: `url(${MainMenuImage})` }}>
            {main && <div className="container">
                <h1>Pokobol and Duel</h1>
                <button onClick={playBtn}>Play</button>
                <button onClick={howToPlayBtn}>How to Play</button>
                <button onClick={creditsBtn}>Credits</button>
                <div className="volumeSection">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" /></svg>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.02}
                        value={volume}
                        onChange={event => {
                            setVolume(event.target.valueAsNumber)
                        }}
                    />
                </div>
            </div>}
            {howToPlay && <div className="container">
                <h1>How to Play</h1>
                <p>You should pick your character by stats or its looks. Then in a city you can fight in duels or tournaments.
                    By progressing more and more, your enemies will get stronger...
                    <br />
                    <br />
                    By buying items and magics at shops in city you can upgrade your character.
                </p>
                <button onClick={backBtn}>Back</button>
            </div>
            }
            {credits && <div className="container">
                <p>Made by Arda Mert Keleş 2024©</p>
                <button onClick={backBtn}>Back</button>
            </div>}
            {characterSelection && <div className="characterSelectionWrapper">
                <h1>Character Selection</h1>
                <div className="middleSection">
                    <div className="characterLister">
                        {charactersData && charactersData.map((poko, key) => (
                            <img className='character' onClick={() => selection(poko)} style={{ width: '128px', height: '128px' }} draggable='false' src={poko.img} alt='karakter' key={key} />
                        ))}
                    </div>
                    <div className="characterStats">
                        {selectedCharacter && <div>
                            <img src={selectedCharacter.img} alt="" />
                            <h3 className="name">{selectedCharacter.name}</h3>
                            <p>Hp: <b> {selectedCharacter.hp} </b></p>
                            <p>Attack: <b> {selectedCharacter.attack} </b></p>
                            <p>Defence: <b> {selectedCharacter.defence} </b></p>
                            <p>Agility: <b> {selectedCharacter.agility}</b></p>
                            <p>Accuracy: <b> {selectedCharacter.accuracy} </b></p>
                            <p>Special Ability: <b> {selectedCharacter.specialAbility} </b></p>
                            <button onClick={startGame}>Start</button>
                        </div>}
                    </div>
                </div>
                <button className="backBtn" onClick={backBtn}>Back</button>
            </div>}
        </div>
    )
}