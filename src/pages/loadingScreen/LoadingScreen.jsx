import React, { useEffect, useState } from "react";
import './loadingScreen.css'
import MainMenuImage from '../mainMenu/img/vintage-grunge-style-background-with-scratches-stains.jpg'
import ChovalieImage from './img/chovalie.png'
import windSound from './sounds/wind.wav'
import useSound from "use-sound";

export default function LoadingScreen({setLoading, setMainGame, playMenuMusic, stopMenuMusic}) {

    const [play, {stop}] = useSound(windSound, { volume: 0.2 })
    const [loader, setLoader] = useState(true)
    const [speech, setSpeech] = useState("Wake up, we're in a foreing island. May be you can't remember but our ship wrecked...")
    const [speechCounter, setSpeechCounter] = useState(0)

    useEffect(() => {
        play()
        setTimeout(() => {
            setLoader(false)
        }, 2750);
    }, [play])

    const handleClick = () => {
        setSpeechCounter(prev => prev + 1)
    }

    const speechFunction = () => {
        switch (speechCounter) {
            case 0:
                setSpeech('There is a castle at far, but it can be seen.')
                break;
            case 1:
                setSpeech('I heard about a lot of this place, but i tought it was all about fairytales...')
                break;
            case 2:
                setSpeech("This is the lands of duelmans. There are lots of duelists, hunters, sorcerers etc. They're making there living with fighting at duels.")
                break;
            case 3:
                setSpeech("May be this is the only way we can go back to our homelands. We should go and fight in that duels and tournaments.")
                break;
            case 4:
                setSpeech("Come on we should go and get our freedom back...")
                break;
            case 5:
                stop()
                setLoading(false);
                setMainGame(true);
                playMenuMusic()
        }
    }

    return (
        <div>
            {loader && <div className="loaderWrapper" style={{ backgroundImage: `url(${MainMenuImage})` }}>
                <div className="loader"></div>
            </div>}
            {!loader && <div className="coastLineWrapper">
                <div onClick={() => { handleClick(); speechFunction(); }} className="speechText">
                    {speech}
                </div>
                <img className="chovalieImage" src={ChovalieImage} alt="" draggable='false' />
            </div>}
        </div>
    )
}