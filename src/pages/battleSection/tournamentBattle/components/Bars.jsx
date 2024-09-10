import React from "react";
import './bars.css'

export default function Bars({ name, attack, agility, accuracy, defence, hp, currentHp, containerClass }) {

    const heightCalcuate = () => {
        if(currentHp >= 0){
            return `${currentHp / hp * 100}%`
        }else{
            return '0'
        }
    }

    return (
        <div className={containerClass} >
            <div className="stats">
                <h2>{name}</h2>
                <p>Attack: {attack}</p>
                <p>Agility: {agility}</p>
                <p>Accuracy: {accuracy}</p>
                <p>Defence: {defence}</p>
            </div>
            <div className="healthBarBorder">
                <p className="hp">{currentHp} / {hp}</p>
                <div style={{ height: heightCalcuate() }} className="healthBar">
                </div>
            </div>
        </div>
    )
}