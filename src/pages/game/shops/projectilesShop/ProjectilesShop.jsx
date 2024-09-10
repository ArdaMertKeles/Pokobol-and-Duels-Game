import React, { useEffect, useState } from "react";
import blacksmith from './img/archer.png'
import Items from "./Projectiles";
import './projectiles.css'
import shop from './img/shop.webp'

export default function ProjectilesShop({ setProjectiles, setAnyWindow, projectileSelection, projectilesData, setProjectilesData, currentMoney }) {


    const closeWindow = () => {
        setAnyWindow(false)
        setProjectiles(false)
    }

    const updateStatus = (id, price, status) => {
        if(!status && currentMoney >= price){
            setProjectilesData(prevItems =>
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
                    <img className="blacksmith" src={blacksmith} alt="blacksmith" draggable='false' />
                    <div className="textSpeechArmory">
                        <p>Looking for trouble?</p>
                    </div>
                    <div className="enterablesContainerArmory">
                        <h2>Projectiles</h2>
                        <div className="shownDataArmory">
                            {projectilesData.map((projectile) => (
                                <div key={projectile.id} className="item">
                                    <Items projectileSelection={() => {projectileSelection(projectile); updateStatus(projectile.id, projectile.price, projectile.status)}} buyStatus={projectile.buyStatus} itemImg={projectile.img} itemName={projectile.name} damage={projectile.projectileAttack} price={projectile.price} />
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