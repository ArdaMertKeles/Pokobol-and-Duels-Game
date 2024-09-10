import React, { useState } from "react";
import './arsenalShop.css'
import blacksmithImage from './img/blacksmith.png'
import swordImage from '../arsenalShop/itemDatas/swordImage/SWORDS.png'
import axeImage from '../arsenalShop/itemDatas/axeImage/AXES.png'
import maceImage from '../arsenalShop/itemDatas/maceImage/MACES.png'
import Items from "./itemDatas/Swords";
import shop from './img/arsenalShop2.webp'

export default function ArsenalShop({ setAnyWindow, setArsenal, weaponSelection, swordData, setSwordData, axeData, setAxeData, maceData, setMaceData, currentMoney }) {

    const [enterablesShown, setEnterablesShown] = useState(true)
    const [swordsShown, setSwordsShown] = useState(false)
    const [axesShown, setAxesShown] = useState(false)
    const [macesShown, setMacesShown] = useState(false)
    // Data Setting

    const closeWindow = () => {
        setAnyWindow(false)
        setArsenal(false)
    }

    const openSwords = () => {
        setEnterablesShown(false)
        setSwordsShown(true)
    }

    const openAxes = () => {
        setEnterablesShown(false)
        setAxesShown(true)
    }

    const openMaces = () => {
        setEnterablesShown(false)
        setMacesShown(true)
    }

    const updateStatusSword = (id, price, status) => {
        if(!status && currentMoney >= price){
            setSwordData(prevItems =>
                prevItems.map(item =>
                    item.id === id
                    ? { ...item, status: true, buyStatus: '' }
                    : { ...item }
                )
            );
        }
    };
    const updateStatusAxe = (id, price, status) => {
        if(!status && currentMoney >= price){
            setAxeData(prevItems =>
                prevItems.map(item =>
                    item.id === id
                    ? { ...item, status: true, buyStatus: '' }
                    : { ...item }
                )
            );
        }
    };
    const updateStatusMace = (id, price, status) => {
        if(!status && currentMoney >= price){
            setMaceData(prevItems =>
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
                    <img className="blacksmith" src={blacksmithImage} alt="blacksmith" draggable='false' />
                    {enterablesShown && <div className="textSpeech">
                        <p>Hey there! Want to buy something?</p>
                    </div>}
                    {enterablesShown && <div className="enterablesContainer">
                        <div onClick={openSwords} className="enterables swords">
                            <img src={swordImage} alt="" />
                            <h3>Swords</h3>
                        </div>
                        <div onClick={openAxes} className="enterables axes">
                            <img src={axeImage} alt="" />
                            <h3>Axes</h3>
                        </div>
                        <div onClick={openMaces} className="enterables maces">
                            <img src={maceImage} alt="" />
                            <h3>Maces</h3>
                        </div>
                    </div>}
                    {!enterablesShown && swordsShown && <div className="shownContainer">
                        <h2>Swords</h2>
                        <div className="shownData">
                            {swordData.map((sword) => (
                                <div key={sword.id} className="item">
                                    <Items weaponSelection={() => {weaponSelection(sword); updateStatusSword(sword.id, sword.price, sword.status)}} status={sword.status} buyStatus={sword.buyStatus} itemImg={sword.img} itemName={sword.name} agility={sword.agility} price={sword.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setSwordsShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                    {!enterablesShown && axesShown && <div className="shownContainer">
                        <h2>Axes</h2>
                        <div className="shownData">
                            {axeData.map((axe) => (
                                <div key={axe.id} className="item">
                                    <Items weaponSelection={() => {weaponSelection(axe); updateStatusAxe(axe.id, axe.price, axe.status)}} status={axe.status} buyStatus={axe.buyStatus} itemImg={axe.img} itemName={axe.name} agility={axe.agility} attack={axe.attack} price={axe.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setAxesShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                    {!enterablesShown && macesShown && <div className="shownContainer">
                        <h2>Maces</h2>
                        <div className="shownData">
                            {maceData.map((mace) => (
                                <div key={mace.id} className="item">
                                    <Items weaponSelection={() => {weaponSelection(mace); updateStatusMace(mace.id, mace.price, mace.status)}} status={mace.status} buyStatus={mace.buyStatus} itemImg={mace.img} itemName={mace.name} attack={mace.attack} price={mace.price} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setMacesShown(false); setEnterablesShown(true) }} className="backBtn">Back</button>
                    </div>}
                </div>
                <button onClick={closeWindow} className="closeBtn"></button>
            </div>
        </div>
    )
}