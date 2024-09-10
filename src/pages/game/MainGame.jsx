import React, { useState } from "react";
import './mainGame.css'
import homeOne from './img/aslev1.png'
import homeTwo from './img/DAWD.png'
import homeThree from './img/SAGEVASIL.png'
import homeFour from './img/turkbapragev.png'
import castle from './img/kaleasl.png'
import ArsenalShop from "./shops/arsenalShop/ArsenalShop";
import ArmoryShop from "./shops/armoryShop/ArmoryShop";
import ProjectilesShop from "./shops/projectilesShop/ProjectilesShop";
import MagickaShop from "./shops/magickaShop/MagickaShop";
import CharacterInfo from "./characterInfo/CharacterInfo";
import DuelSection from "./duelSection/DuelSection";
import TournamentSection from "./tournamentSection/TournamentSection";
// Sounds

export default function MainGame({ stopMenuMusic, setTournamentSection, currentArmor, setCurrentArmor, currentMagicka, setCurrentMagicka, currentWeapon, setCurrentWeapon, currentProjectile, setCurrentProjectile, characterData, baseStats, setCharacterData, setMainGame, setDuelSection, currentXp, currentMoney, setCurrentMoney, armorData, setArmorData, healthData, setHealthData, attackData, setAttackData, defenceData, setDefenceData, agilityData, setAgilityData, swordData, setSwordData, axeData, setAxeData, maceData, setMaceData, projectilesData, setProjectilesData }) {

    const [armory, setArmory] = useState(false)
    const [arsenal, setArsenal] = useState(false)
    const [projectiles, setProjectiles] = useState(false)
    const [magickaShop, setMagickaShop] = useState(false)
    const [duels, setDuels] = useState(false)
    const [tournaments, setTournaments] = useState(false)
    const [anyWindow, setAnyWindow] = useState(false)

    // Openings

    const armoryOpen = () => {
        if (!anyWindow) {
            setArmory(true)
            setAnyWindow(true)
        }
    }
    const arsenalOpen = () => {
        if (!anyWindow) {
            setArsenal(true)
            setAnyWindow(true)
        }
    }
    const projectilesOpen = () => {
        if (!anyWindow) {
            setProjectiles(true)
            setAnyWindow(true)
        }
    }
    const magickaOpen = () => {
        if (!anyWindow) {
            setMagickaShop(true)
            setAnyWindow(true)
        }
    }
    const duelsOpen = () => {
        if (!anyWindow) {
            setDuels(true)
            setAnyWindow(true)
        }
    }
    const tournamentsOpen = () => {
        if (!anyWindow) {
            setTournaments(true)
            setAnyWindow(true)
        }
    }

    // Item Selection

    const weaponSelection = (item) => {
        if(item.status){
            setCurrentWeapon(item)
            setCharacterData({
                name: baseStats.name,
                img: baseStats.img,
                hp: characterData.hp,
                attack: item.attack ? baseStats.attack + item.attack : baseStats.attack,
                defence: characterData.defence,
                agility: item.agility ? baseStats.agility + item.agility : baseStats.agility,
                accuracy: baseStats.accuracy
            })
        }
        if(!item.status && currentMoney >= item.price){
            setCurrentMoney(prev => prev - item.price)
        }
    }
    const armorSelection = (item) => {
        if(item.status){
            setCurrentArmor(item)
            setCharacterData({
                name: baseStats.name,
                img: baseStats.img,
                hp: characterData.hp,
                attack: characterData.attack,
                defence: baseStats.defence + item.defence,
                agility: characterData.agility,
                accuracy: baseStats.accuracy
            })
        }
        if(!item.status && currentMoney >= item.price){
            setCurrentMoney(prev => prev - item.price)
        }
    }
    const projectileSelection = (item) => {
        if(item.status){
            setCurrentProjectile(item)
        }
        if(!item.status && currentMoney >= item.price){
            setCurrentMoney(prev => prev - item.price)
        }
    }
    const magickaSelection = (item) => {
        if(item.status){
            setCurrentMagicka(item)
        }
        if(!item.status && currentMoney >= item.price){
            setCurrentMoney(prev => prev - item.price)
        }
    }


    return (
        <div className="mainGameWrapper">
            <div onClick={armoryOpen} className="enterables">
                <img className="homeOne" src={homeOne} alt="" draggable='false' />
                <span className="armory">Armory</span>
            </div>
            <div onClick={arsenalOpen} className="enterables">
                <img className="homeTwo" src={homeTwo} alt="" draggable='false' />
                <span className="arsenal">Arsenal</span>
            </div>
            <div onClick={magickaOpen} className="enterables">
                <img className="homeThree" src={homeThree} alt="" draggable='false' />
                <span className="magicka">Magicka Shop</span>
            </div>
            <div onClick={projectilesOpen} className="enterables">
                <img className="homeFour" src={homeFour} alt="" draggable='false' />
                <span className="projectiles">Projectiles</span>
            </div>
            <div onClick={tournamentsOpen} className="enterables">
                <img className="castle" src={castle} alt="" draggable='false' />
                <span className="tournaments">Tournaments</span>
            </div>
            <div onClick={duelsOpen} className="enterables">
                <span className="duels">Duels</span>
            </div>
            <CharacterInfo currentXp={currentXp} currentMoney={currentMoney} characterData={characterData} currentArmor={currentArmor} currentMagicka={currentMagicka} currentProjectile={currentProjectile} currentWeapon={currentWeapon} />
            {arsenal && <ArsenalShop currentMoney={currentMoney} swordData={swordData} setSwordData={setSwordData} axeData={axeData} setAxeData={setAxeData} maceData={maceData} setMaceData={setMaceData} setAnyWindow={setAnyWindow} setArsenal={setArsenal} weaponSelection={weaponSelection} />}
            {armory && <ArmoryShop armorData={armorData} setArmorData={setArmorData} setAnyWindow={setAnyWindow} setArmory={setArmory} armorSelection={armorSelection} currentMoney={currentMoney} />}
            {projectiles && <ProjectilesShop currentMoney={currentMoney} projectilesData={projectilesData} setProjectilesData={setProjectilesData} setAnyWindow={setAnyWindow} setProjectiles={setProjectiles} projectileSelection={projectileSelection} />}
            {magickaShop && <MagickaShop healthData={healthData} setHealthData={setHealthData} attackData={attackData} setAttackData={setAttackData} defenceData={defenceData} setDefenceData={setDefenceData} agilityData={agilityData} setAgilityData={setAgilityData} setAnyWindow={setAnyWindow} setMagickaShop={setMagickaShop} magickaSelection={magickaSelection} currentMoney={currentMoney} />}
            {duels && <DuelSection stopMenuMusic={stopMenuMusic} characterData={characterData} setMainGame={setMainGame} setDuelSection={setDuelSection} setAnyWindow={setAnyWindow} setDuels={setDuels} />}
            {tournaments && <TournamentSection stopMenuMusic={stopMenuMusic} setAnyWindow={setAnyWindow} setTournaments={setTournaments} setTournamentSection={setTournamentSection} setMainGame={setMainGame} />}
        </div>
    )
}