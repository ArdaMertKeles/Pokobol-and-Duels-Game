import React, { useEffect, useState } from "react";
import blacksmith from './img/blacksmith.png'
import Items from "./Armors";
import './armoryShop.css'
import shop from './img/shop.webp'

export default function ArmoryShop({ setArmory, setAnyWindow, armorSelection, currentMoney, armorData, setArmorData}) {


    const closeWindow = () => {
        setAnyWindow(false)
        setArmory(false)
    }

    const updateStatus = (id, price, status) => {
        if(!status && currentMoney >= price){
            setArmorData(prevItems =>
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
            <div style={{ background: `url(${shop})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="arsenalShopContainer">
                <div className="insideContainer">
                    <img className="blacksmith" src={blacksmith} alt="blacksmith" draggable='false' />
                    <div className="textSpeechArmory">
                        <p>How can i help you son?</p>
                    </div>
                    <div className="enterablesContainerArmory">
                        <h2>Armory</h2>
                        <div className="shownDataArmory">
                            {armorData.map((armor) => (
                                <div key={armor.id} className="item">
                                    <Items armorSelection={() => { armorSelection(armor); updateStatus(armor.id, armor.price, armor.status) }} 
                                    status={armor.status}
                                    buyStatus={armor.buyStatus}
                                    itemImg={armor.img} 
                                    itemName={armor.name} 
                                    defence={armor.defence}
                                    price={armor.price} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button onClick={closeWindow} className="closeBtn"></button>
            </div>
        </div>
    )
}