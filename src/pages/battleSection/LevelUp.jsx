import React, { useEffect, useState } from "react";
import './levelup.css'

export default function LevelUp({ characterData, setCharacterData, baseStats, setBaseStats, setMainGame, setLevelUp, setCurrentXp }) {

    const [statCounter, setStatCounter] = useState(3)
    const [backBtnStatus, setBackBtnStatus] = useState(true)

    const backBtn = () => {
        setLevelUp(false)
        setMainGame(true)
    }

    useEffect(() => {
        if(statCounter === 0){
            setBackBtnStatus(false)
            setCurrentXp(0)
        }
    }, [statCounter])

    const levelUpHealth = () => {
        setStatCounter(prev => prev -1)
        setBaseStats({
            name: characterData.name,
            img: characterData.img,
            hp: characterData.hp + 15,
            attack: characterData.attack,
            defence: characterData.defence,
            agility: characterData.agility,
            accuracy: characterData.accuracy
        })
    }
    const levelUpAttack = () => {
        setStatCounter(prev => prev -1)
        setBaseStats({
            name: characterData.name,
            img: characterData.img,
            hp: characterData.hp,
            attack: characterData.attack + 2,
            defence: characterData.defence,
            agility: characterData.agility,
            accuracy: characterData.accuracy
        })
    }
    const levelUpAgility = () => {
        setStatCounter(prev => prev -1)
        setBaseStats({
            name: characterData.name,
            img: characterData.img,
            hp: characterData.hp,
            attack: characterData.attack,
            defence: characterData.defence,
            agility: characterData.agility + 2,
            accuracy: characterData.accuracy
        })
    }
    const levelUpDefence = () => {
        setStatCounter(prev => prev -1)
        setBaseStats({
            name: characterData.name,
            img: characterData.img,
            hp: characterData.hp,
            attack: characterData.attack,
            defence: characterData.defence + 2,
            agility: characterData.agility,
            accuracy: characterData.accuracy
        })
    }

    useEffect(() => {
        setCharacterData(baseStats)
    }, [baseStats])

    return (
        <div className="levelUpWrapper">
            <h2>You Leveled Up!</h2>
            <div className="levelUpContainer">
                <div className="stats">
                    <h4>You have {statCounter} skill points!</h4>
                    <div className="stat"> <p> Health: {characterData.hp} </p>  <button onClick={levelUpHealth} disabled={!backBtnStatus}>+</button> </div>
                    <div className="stat"> <p> Attack: {characterData.attack} </p> <button onClick={levelUpAttack} disabled={!backBtnStatus}>+</button> </div>
                    <div className="stat"> <p> Agility: {characterData.agility} </p> <button onClick={levelUpAgility} disabled={!backBtnStatus}>+</button> </div>
                    <div className="stat"> <p> Defence: {characterData.defence} </p> <button onClick={levelUpDefence} disabled={!backBtnStatus}>+</button> </div>
                </div>
                <div className="shownContainer">
                    <img src={characterData.img} alt="" />
                    <button disabled={backBtnStatus} onClick={backBtn}>Back to town</button>
                </div>
            </div>
        </div>
    )
}