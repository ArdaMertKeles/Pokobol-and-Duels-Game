import React, { useState } from "react";
import './magickashop.css'
import Items from './Magics'
import sorcerer from './img/sorcerer.png'
import healthImg from './img/health3.png'
import attackImg from './img/strength3.png'
import defenceImg from './img/defence3.png'
import agilityImg from './img/agility3.png'
import shop from './img/shop.webp'

export default function MagickaShop({ setAnyWindow, setMagickaShop, magickaSelection, currentMoney, healthData, setHealthData, attackData, setAttackData, defenceData, setDefenceData, agilityData, setAgilityData }) {

    const [enterablesShown, setEnterablesShown] = useState(true)
    const [healthShown, setHealthShown] = useState(false)
    const [attackShown, setAttackShown] = useState(false)
    const [defenceShown, setDefenceShown] = useState(false)
    const [agilityShown, setAgilityShown] = useState(false)


    const closeWindow = () => {
        setAnyWindow(false)
        setMagickaShop(false)
    }

    const updateStatusHealth = (id, price, status) => {
        if(!status && currentMoney >= price){
            setHealthData(prevItems =>
                prevItems.map(item =>
                    item.id === id
                    ? { ...item, status: true, buyStatus: '' }
                    : { ...item }
                )
            );
        }
    };
    const updateStatusAttack = (id, price, status) => {
        if(!status && currentMoney >= price){
            setAttackData(prevItems =>
                prevItems.map(item =>
                    item.id === id
                    ? { ...item, status: true, buyStatus: '' }
                    : { ...item }
                )
            );
        }
    };
    const updateStatusDefence = (id, price, status) => {
        if(!status && currentMoney >= price){
            setDefenceData(prevItems =>
                prevItems.map(item =>
                    item.id === id
                    ? { ...item, status: true, buyStatus: '' }
                    : { ...item }
                )
            );
        }
    };
    const updateStatusAgility = (id, price, status) => {
        if(!status && currentMoney >= price){
            setAgilityData(prevItems =>
                prevItems.map(item =>
                    item.id === id
                    ? { ...item, status: true, buyStatus: '' }
                    : { ...item }
                )
            );
        }
    };
    
    return (
        <div className="arsenalShopWrapper">
            <div style={{background: `url(${shop})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className="arsenalShopContainer">
                <div className="insideContainer">
                    <img className="blacksmith" src={sorcerer} alt="blacksmith" draggable='false' />
                    {enterablesShown && <div className="textSpeech">
                        <p>I've seen your fate young boy...</p>
                    </div>}
                    {enterablesShown && <div className="enterablesContainer">
                        <div onClick={() => { setHealthShown(true); setEnterablesShown(false) }} className="enterables swords">
                            <img src={healthImg} alt="" />
                            <h3>Health</h3>
                        </div>
                        <div onClick={() => { setAgilityShown(true); setEnterablesShown(false) }} className="enterables axes">
                            <img src={agilityImg} alt="" />
                            <h3>Agility</h3>
                        </div>
                        <div onClick={() => { setAttackShown(true); setEnterablesShown(false) }} className="enterables maces">
                            <img src={attackImg} alt="" />
                            <h3>Attack</h3>
                        </div>
                        <div onClick={() => { setDefenceShown(true); setEnterablesShown(false) }} className="enterables maces">
                            <img src={defenceImg} alt="" />
                            <h3>Defence</h3>
                        </div>
                    </div>}
                    {!enterablesShown && healthShown && <div className="shownContainer">
                        <h2>Health Potions</h2>
                        <div className="shownData">
                            {healthData.map((health, key) => (
                                <div className="item">
                                    <Items magickaSelection={() => {magickaSelection(health); updateStatusHealth(health.id, health.price, health.status)}} key={key} buyStatus={health.buyStatus} itemImg={health.img} itemName={health.name} health={health.health} price={health.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setHealthShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                    {!enterablesShown && agilityShown && <div className="shownContainer">
                        <h2>Agility Potions</h2>
                        <div className="shownData">
                            {agilityData.map((agility, key) => (
                                <div className="item">
                                    <Items magickaSelection={() => {magickaSelection(agility); updateStatusAgility(agility.id, agility.price, agility.status)}} key={key} buyStatus={agility.buyStatus} itemImg={agility.img} itemName={agility.name} agility={agility.agility} price={agility.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setAgilityShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                    {!enterablesShown && attackShown && <div className="shownContainer">
                        <h2>Attack Potions</h2>
                        <div className="shownData">
                            {attackData.map((attack, key) => (
                                <div className="item">
                                    <Items magickaSelection={() => {magickaSelection(attack); updateStatusAttack(attack.id, attack.price, attack.status)}} key={key} buyStatus={attack.buyStatus} itemImg={attack.img} itemName={attack.name} attack={attack.attack} price={attack.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setAttackShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                    {!enterablesShown && defenceShown && <div className="shownContainer">
                        <h2>Defence Potions</h2>
                        <div className="shownData">
                            {defenceData.map((defence, key) => (
                                <div className="item">
                                    <Items magickaSelection={() => {magickaSelection(defence); updateStatusDefence(defence.id, defence.price, defence.status)}} key={key} buyStatus={defence.buyStatus} itemImg={defence.img} itemName={defence.name} defence={defence.defence} price={defence.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setDefenceShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                </div>
                <button onClick={closeWindow} className="closeBtn"></button>
            </div>
        </div>
    )
}