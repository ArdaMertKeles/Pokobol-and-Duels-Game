import React from "react";
import './characterInfo.css'
import ducat from './img/ducat.png'

export default function CharacterInfo({ characterData, currentWeapon, currentArmor, currentMoney, currentProjectile, currentMagicka, currentXp }) {

    return (
        <div className="CharacterInfoWrapper">
            <div className="infos">
                <img src={characterData && characterData.img} alt="" draggable='false' />
                <div className="infoContainer">
                    <h2>{characterData && characterData.name}</h2>
                    <div className="data">
                        <p><b>Hp: </b> {characterData && characterData.hp} </p>
                        <p><b>Defence: </b> {characterData && characterData.defence} </p>
                        <p><b>Attack: </b> {characterData && characterData.attack} </p>
                        <p><b>Agility: </b> {characterData && characterData.agility} </p>
                        <p><b>Accuracy: </b> {characterData && characterData.accuracy} </p>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="economyContainer">
                    <img src={ducat} alt="Ducat" draggable='false' />
                    <p>{currentMoney}</p>
                </div>
                <div>
                    <p> Xp: {currentXp} / 1000</p>
                </div>
            </div>
            <div className="Inventory">
                <div> {currentWeapon && <img src={currentWeapon.img} alt="Weapon" />} </div>
                <div> {currentArmor && <img src={currentArmor.img} alt="Armor" />} </div>
                <div> {currentProjectile && <img src={currentProjectile.img} alt="Projectile" />} </div>
                <div> {currentMagicka && <img src={currentMagicka.img} alt="Magicka" />} </div>
            </div>
        </div>
    )
}