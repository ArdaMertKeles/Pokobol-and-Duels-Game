import React, { useEffect, useState } from "react";
import './duel.css'
import lightAttackImage from '../skillImg/Icon4.png'
import mediumAttackImage from '../skillImg/Icon3.png'
import heavyAttackImage from '../skillImg/Icon6.png'
import archery from '../skillImg/image_processing20201123-23784-1lcsiqf.jpg'
import potion from '../skillImg/9e4fed320bfc07dea97a7cfb2f39531c.jpg'
import Bars from "./components/Bars";
import Log from "./components/Log";
import track2 from '../sounds/track2.wav'
import track3 from '../sounds/track3.wav'
import track4 from '../sounds/track4.wav'
import track5 from '../sounds/track5.wav'
import track6 from '../sounds/track6.wav'
import sound1 from '../sounds/slash1.wav'
import sound2 from '../sounds/slash2.wav'
import sound3 from '../sounds/slash3.wav'
import sound4 from '../sounds/slash4.ogg'
import sound5 from '../sounds/slash5.wav'
import sound6 from '../sounds/slash6.wav'
import sound7 from '../sounds/slash7.wav'
import miss1 from '../sounds/miss1.wav'
import miss2 from '../sounds/miss2.wav'
import miss3 from '../sounds/miss3.wav'
import potion1 from '../sounds/potion1.wav'
import potion2 from '../sounds/potion2.wav'
import potion3 from '../sounds/potion3.wav'
import useSound from "use-sound";
import Result from "./components/Result";
import LostResult from "./components/LostResult";
import ghostImage from './components/img/ghost.png'

export default function Duel({ randomTrackPlayer, randomBattleTrack, setRandomBattleTrack, playMenuMusic, setLevelUp, enemyDataMultiplier, setEnemyDataMultiplier, enemyData, characterData, currentMoney, currentXp, setCurrentMoney, setMainGame, setDuelSection, setCurrentXp, currentProjectile, currentMagicka }) {

    const [enemyBaseData, setEnemyBaseData] = useState(null)
    const [enemy, setEnemy] = useState(null)
    const [enviroment, setEnviroment] = useState()
    const [playerCurrentHp, setPlayerCurrentHp] = useState(characterData.hp)
    const [enemyCurrentHp, setEnemyCurrentHp] = useState()
    const [buttons, setButtons] = useState(true)
    const [battleLog, setBattleLog] = useState([])
    const [result, setResult] = useState(false)
    const [lostResult, setLostResult] = useState(false)
    const [addedMoney, setAddedMoney] = useState()
    const [addedXp, setAddedXp] = useState()
    const [arrowCount, setArrowCount] = useState(5)
    const [attackPotion, setAttackPotion] = useState(0)
    const [agilityPotion, setAgilityPotion] = useState(0)
    const [defencePotion, setDefencePotion] = useState(0)
    const [magickaChecker, setMagickaChecker] = useState()
    const [potionType, setPotionType] = useState()
    const [playerDeath, setPlayerDeath] = useState(false)
    const [enemyDeath, setEnemyDeath] = useState()
    const [playerAlive, setPlayerAlive] = useState(true)
    const [enemyAlive, setEnemyAlive] = useState(true)
    const [checkMusic, setCheckMusic] = useState(false)

    // Animations
    const [playerAnimation, setPlayerAnimation] = useState('characterImg')
    const [aiAnimation, setAiAnimation] = useState('enemy')
    const [playerDamage, setPlayerDamage] = useState('')
    const [enemyDamage, setEnemyDamage] = useState('')

    // Sounds
    const [play1] = useSound(sound1, { volume: 0.35 })
    const [play2] = useSound(sound2, { volume: 0.35 })
    const [play3] = useSound(sound3, { volume: 0.35 })
    const [play4] = useSound(sound4, { volume: 0.35 })
    const [play5] = useSound(sound5, { volume: 0.35 })
    const [play6] = useSound(sound6, { volume: 0.35 })
    const [play7] = useSound(sound7, { volume: 0.35 })
    const [missPlay1] = useSound(miss1, { volume: 0.35 })
    const [missPlay2] = useSound(miss2, { volume: 0.35 })
    const [missPlay3] = useSound(miss3, { volume: 0.35 })
    const [consume1] = useSound(potion1, { volume: 0.35 })
    const [consume2] = useSound(potion2, { volume: 0.35 })
    const [consume3] = useSound(potion3, { volume: 0.35 })
    const [play, {stop}] = useSound(randomBattleTrack, {volume: 0.05})

    useEffect(() => {
        randomTrackPlayer()
    }, [])

    const randomSlashSound = () => {
        let random = Math.floor(Math.random() * 7)
        setTimeout(() => {
            if (random === 0) {
                play1()
            }
            if (random === 1) {
                play2()
            }
            if (random === 2) {
                play3()
            }
            if (random === 3) {
                play4()
            }
            if (random === 4) {
                play5()
            }
            if (random === 5) {
                play6()
            }
            if (random === 6) {
                play7()
            }
        }, 300);
    }
    const randomMissSound = () => {
        let random = Math.floor(Math.random() * 3)
        if (random === 0) {
            missPlay1()
        }
        if (random === 1) {
            missPlay2()
        }
        if (random === 2) {
            missPlay3()
        }
    }
    const randomPotionSound = () => {
        let random = Math.floor(Math.random() * 3)
        if (random === 0) {
            consume1()
        }
        if (random === 1) {
            consume2()
        }
        if (random === 2) {
            consume3()
        }
    }
    const randomBattleTrackSetter = () => {
        let random = Math.floor(Math.random() * 5)
        if (random === 0) {
            setRandomBattleTrack(track2)
        }
        if (random === 1) {
            setRandomBattleTrack(track3)
        }
        if (random === 2) {
            setRandomBattleTrack(track4)
        }
        if (random === 3) {
            setRandomBattleTrack(track5)
        }
        if (random === 4) {
            setRandomBattleTrack(track6)
        }
    }
    useEffect(() => {
        randomBattleTrackSetter()
        play()
    }, [])

    // Hovering requierements
    const [isHoveringLight, setIsHoveringLight] = useState(false)
    const [isHoveringMedium, setIsHoveringMedium] = useState(false)
    const [isHoveringHeavy, setIsHoveringHeavy] = useState(false)
    const [isHoveringProjectile, setIsHoveringProjectile] = useState(false)
    const [isHoveringPotion, setIsHoveringPotion] = useState(false)
    const [isHoveringSkill, setIsHoveringSkill] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const hoveringStyle = { position: 'absolute', top: position.top - 635, left: position.left - 560, pointerEvents: 'none', zIndex: 10 }

    const handleMouseMove = (e) => {
        setPosition({ top: e.clientY, left: e.clientX });
    };

    const randomEnemy = () => {
        const randomIndex = Math.floor(Math.random() * enemyData.length)
        setEnemyBaseData(enemyData[randomIndex])
    }

    useEffect(() => {
        if (enemyBaseData) {
            setEnemyCurrentHp(Math.floor(enemyBaseData.hp * enemyDataMultiplier))
            setEnemy({
                img: enemyBaseData.img,
                name: enemyBaseData.name,
                hp: Math.floor(enemyBaseData.hp * enemyDataMultiplier),
                attack: Math.floor(enemyBaseData.attack * enemyDataMultiplier),
                defence: Math.floor(enemyBaseData.defence * enemyDataMultiplier),
                agility: Math.floor(enemyBaseData.agility * enemyDataMultiplier),
                accuracy: enemyBaseData.accuracy
            })
        }
    }, [enemyBaseData])


    const randomEnviromentPicker = () => {
        const randomIndex = Math.floor(Math.random() * 3)
        if (randomIndex === 0) {
            setEnviroment('canal')
        } else if (randomIndex === 1) {
            setEnviroment('town')
        } else if (randomIndex === 2) {
            setEnviroment('forest')
        }
    }

    useEffect(() => {
        randomEnemy()
        randomEnviromentPicker()
    }, [])

    const aiAttack = () => {
        if (enemyCurrentHp > 0) {
            let random = Math.floor(Math.random() * 3)
            if (random === 0) {
                let damage = Math.floor((enemy.attack * 0.5) + (enemy.agility * 0.1))
                setAiAnimation('moveForwardForAi')
                setEnemyDamage(damage)
                setPlayerCurrentHp(prev => prev - damage)
                setBattleLog(prevLogs => [...prevLogs, { log: `${enemy.name} successfully soft attacked! ${damage} damage dealt...` }])
                randomSlashSound()
                setTimeout(() => {
                    setEnemyDamage(false)
                    setAiAnimation('enemy')
                }, 1500);
            }
            if (random === 1) {
                let random = Math.random()
                if (random < enemy.accuracy) {
                    setAiAnimation('moveForwardForAi')
                    let damage = Math.floor(((enemy.attack * 0.75) + (enemy.agility * 0.3) * (enemy.accuracy / (enemy.accuracy + (characterData.defence + defencePotion)))))
                    setEnemyDamage(damage)
                    setPlayerCurrentHp(prev => prev - damage)
                    setBattleLog(prevLogs => [...prevLogs, { log: `${enemy.name} successfully medium attacked! ${damage} damage dealt...` }])
                    randomSlashSound()
                    setTimeout(() => {
                        setEnemyDamage(false)
                        setAiAnimation('enemy')
                    }, 1500);
                } else {
                    randomMissSound()
                    setBattleLog(prevLogs => [...prevLogs, { log: `${enemy.name} tried to medium attack! But it's missed.` }])
                    setEnemyDamage('Missed')
                    setTimeout(() => {
                        setEnemyDamage(false)
                    }, 1500);
                }
            }
            if (random === 2) {
                let random = Math.random()
                if (random < enemy.accuracy) {
                    setAiAnimation('moveForwardForAi')
                    let damage = Math.floor(((enemy.attack * 1.5) + (enemy.agility * 0.5) * (enemy.accuracy / (2 * (enemy.accuracy + (characterData.defence + defencePotion))))))
                    setEnemyDamage(damage)
                    setPlayerCurrentHp(prev => prev - damage)
                    setBattleLog(prevLogs => [...prevLogs, { log: `${enemy.name} successfully heavy attacked! ${damage} damage dealt...` }])
                    randomSlashSound()
                    setTimeout(() => {
                        setEnemyDamage(false)
                        setAiAnimation('enemy')
                    }, 1500);
                } else {
                    randomMissSound()
                    setBattleLog(prevLogs => [...prevLogs, { log: `${enemy.name} tried to heavy attack! But it's missed.` }])
                    setEnemyDamage('Missed')
                    setTimeout(() => {
                        setEnemyDamage(false)
                        setAiAnimation('enemy')
                    }, 1500);
                }
            }
        }
    }

    const softAttack = () => {
        if(!checkMusic){
            play()
            setCheckMusic(true)
        }
        let damage = Math.floor((characterData.attack + attackPotion * 0.5) + (characterData.agility + agilityPotion * 0.1))
        setPlayerDamage(damage)
        setEnemyCurrentHp(prev => prev - damage)
        setButtons(false)
        setPlayerAnimation('moveForward')
        setBattleLog(prevLogs => [...prevLogs, { log: `${characterData.name} successfully soft attacked! ${damage} damage dealt...` }])
        randomSlashSound()
        setTimeout(() => {
            setPlayerDamage(false)
            setPlayerAnimation('characterImg')
        }, 1250);
    }

    useEffect(() => {
        if (enemy && enemy.hp !== enemyCurrentHp)
            if (enemyCurrentHp > 0) {
                setTimeout(() => {
                    aiAttack()
                    setTimeout(() => {
                        setButtons(true)
                    }, 1250);
                }, 1250);
            }
    }, [enemyCurrentHp])

    const mediumAttack = () => {
        if(!checkMusic){
            play()
            setCheckMusic(true)
        }
        let random = Math.random()
        if (random < characterData.accuracy) {
            let damage = Math.floor((characterData.attack + attackPotion * 0.75) + (characterData.agility + agilityPotion * 0.3) * (characterData.accuracy / (characterData.accuracy + enemy.defence)))
            setPlayerDamage(damage)
            setEnemyCurrentHp(prev => prev - damage)
            setButtons(false)
            setPlayerAnimation('moveForward')
            setBattleLog(prevLogs => [...prevLogs, { log: `${characterData.name} successfully medium attacked! ${damage} damage dealt...` }])
            randomSlashSound()
            setTimeout(() => {
                setPlayerDamage(false)
                setPlayerAnimation('characterImg')
            }, 1250);
        } else {
            randomMissSound()
            setBattleLog(prevLogs => [...prevLogs, { log: `${characterData.name} tried to medium attack! But it's missed.` }])
            setPlayerDamage('Missed')
            setButtons(false)
            setTimeout(() => {
                setPlayerDamage(false)
                setPlayerAnimation('characterImg')
                aiAttack()
                setTimeout(() => {
                    setButtons(true)
                }, 1250);
            }, 1250);
        }
    }

    const heavyAttack = () => {
        if(!checkMusic){
            play()
            setCheckMusic(true)
        }
        let random = Math.random()
        if (random < characterData.accuracy) {
            let damage = Math.floor((characterData.attack + attackPotion * 1.5) + (characterData.agility + agilityPotion * 0.5) * (characterData.accuracy / (2 * (characterData.accuracy + enemy.defence))))
            setPlayerDamage(damage)
            setEnemyCurrentHp(prev => prev - damage)
            setButtons(false)
            setPlayerAnimation('moveForward')
            setBattleLog(prevLogs => [...prevLogs, { log: `${characterData.name} successfully heavy attacked! ${damage} damage dealt...` }])
            randomSlashSound()
            setTimeout(() => {
                setPlayerDamage(false)
                setPlayerAnimation('characterImg')
            }, 1250);
        } else {
            randomMissSound()
            setBattleLog(prevLogs => [...prevLogs, { log: `${characterData.name} tried to heavy attack! But it's missed.` }])
            setPlayerDamage('Missed')
            setButtons(false)
            setTimeout(() => {
                setPlayerDamage(false)
                setPlayerAnimation('characterImg')
                aiAttack()
                setTimeout(() => {
                    setButtons(true)
                }, 1250);
            }, 1250);
        }
    }

    const projectileAttack = () => {
        let damage = currentProjectile.projectileAttack
        setBattleLog(prevLogs => [...prevLogs, { log: `${characterData.name} sent a projectile! ${damage} damage dealt...` }])
        setPlayerDamage(damage)
        setEnemyCurrentHp(prev => prev - damage)
        setButtons(false)
        setArrowCount(prev => prev - 1)
        randomSlashSound()
        setTimeout(() => {
            setPlayerDamage(false)
        }, 1250);
    }

    useEffect(() => {
        if (currentMagicka) {
            if (currentMagicka.agility) {
                setPotionType('Agility')
            }
            if (currentMagicka.attack) {
                setPotionType('Attack')
            }
            if (currentMagicka.defence) {
                setPotionType('Defence')
            }
            if (currentMagicka.health) {
                setPotionType('Health')
            }
        }
    }, [])

    const consumePotion = () => {
        randomPotionSound()
        if (currentMagicka.agility) {
            setAgilityPotion(currentMagicka.agility)
            setMagickaChecker(false)
            setPotionType('Agility')
        }
        if (currentMagicka.attack) {
            setAttackPotion(currentMagicka.attack)
            setMagickaChecker(false)
            setPotionType('Attack')
        }
        if (currentMagicka.defence) {
            setDefencePotion(currentMagicka.defence)
            setMagickaChecker(false)
            setPotionType('Defence')
        }
        if (currentMagicka.health) {
            setPotionType('Health')
            setPlayerCurrentHp(
                function hpChecker() {
                    if (playerCurrentHp + currentMagicka.health > characterData.hp) {
                        return characterData.hp
                    } else {
                        return playerCurrentHp + currentMagicka.health
                    }
                }
            )
            setMagickaChecker(false)
        }
        setButtons(false)
        setTimeout(() => {
            setPlayerDamage(false)
            setPlayerAnimation('characterImg')
            aiAttack()
            setTimeout(() => {
                setButtons(true)
            }, 1250);
        }, 1250);
    }

    // Winner-Loser checker
    useEffect(() => {
        if (playerCurrentHp <= 0) {
            setBattleLog(prevLogs => [...prevLogs, { log: `Duel is over! ${enemy.name} has won...` }])
            setButtons(false)
            setPlayerDeath(true)
            setPlayerAlive(false)
            setLostResult(true)
            setTimeout(() => {
                setPlayerDeath(false)
            }, 1400);
        }
    }, [playerCurrentHp])
    useEffect(() => {
        if (enemyCurrentHp <= 0) {
            setEnemyDataMultiplier(prev => prev + 0.2)
            setEnemyDeath(true)
            setEnemyAlive(false)
            setBattleLog(prevLogs => [...prevLogs, { log: `Duel is over! ${characterData.name} has won...` }])
            setButtons(false)
            let randomMoney = Math.floor((Math.random() * 100) * enemyDataMultiplier) + 150
            setAddedMoney(randomMoney)
            setCurrentMoney(prev => prev + randomMoney)
            let randomXp = Math.floor(Math.random() * 100) + 300
            setAddedXp(randomXp)
            setCurrentXp(prev => prev + randomXp)
            setResult(true)
            setTimeout(() => {
                setEnemyDeath(false)
            }, 1400);
        }
    }, [enemyCurrentHp])
    useEffect(() => {
        if (currentMagicka) {
            setMagickaChecker(true)
        }
    }, [])

    return (
        <div id={enviroment} className="duelWrapper">
            <Log battleLog={battleLog} />
            <div className="character">
                {buttons && <div className="leftSide">
                    {currentProjectile && arrowCount !== 0 && <span onClick={projectileAttack} onMouseEnter={() => setIsHoveringProjectile(true)} onMouseLeave={() => setIsHoveringProjectile(false)} onMouseMove={handleMouseMove}> <img src={archery} alt="" /> </span>}
                    {isHoveringProjectile && <div style={hoveringStyle} className="details"> Archery {arrowCount} / 5 </div>}
                    {magickaChecker && <span onClick={consumePotion} onMouseEnter={() => setIsHoveringPotion(true)} onMouseLeave={() => setIsHoveringPotion(false)} onMouseMove={handleMouseMove}> <img src={potion} alt="" /> </span>}
                    {isHoveringPotion && <div style={hoveringStyle} className="details"> {potionType} Potion </div>}
                    <span onMouseEnter={() => setIsHoveringSkill(true)} onMouseLeave={() => setIsHoveringSkill(false)} onMouseMove={handleMouseMove}> <img src={archery} alt="" /> </span>
                    {isHoveringSkill && <div style={hoveringStyle} className="details"> Special Ability </div>}
                </div>}
                {playerAlive && <img className={playerAnimation} src={characterData.img} alt="Character" draggable='false' />}
                {playerDeath && <img className='ghost' src={ghostImage} alt="" draggable='false' />}
                {enemyDamage && <span className="enemyDamage">{enemyDamage}</span>}
                {buttons && <div className="rightSide">
                    <span onClick={softAttack} onMouseEnter={() => setIsHoveringLight(true)} onMouseLeave={() => setIsHoveringLight(false)} onMouseMove={handleMouseMove}> <img src={lightAttackImage} alt="" /> </span>
                    {isHoveringLight && <div style={hoveringStyle} className="details"> Light Attack </div>}
                    <span onClick={mediumAttack} onMouseEnter={() => setIsHoveringMedium(true)} onMouseLeave={() => setIsHoveringMedium(false)} onMouseMove={handleMouseMove}> <img src={mediumAttackImage} alt="" /> </span>
                    {isHoveringMedium && <div style={hoveringStyle} className="details"> Medium Attack </div>}
                    <span onClick={heavyAttack} onMouseEnter={() => setIsHoveringHeavy(true)} onMouseLeave={() => setIsHoveringHeavy(false)} onMouseMove={handleMouseMove}> <img src={heavyAttackImage} alt="" /> </span>
                    {isHoveringHeavy && <div style={hoveringStyle} className="details"> Heavy Attack </div>}
                </div>}
            </div>
            {enemy && enemyAlive && <img className={aiAnimation} src={enemy.img} alt="" draggable='false' />}
            {enemyDeath && <img className='enemyGhost' src={ghostImage} alt="" draggable='false' />}
            {playerDamage && <span className="damage">{playerDamage}</span>}
            <Bars containerClass={'statBarContainer'} name={characterData.name} attack={characterData.attack} agility={characterData.agility} accuracy={characterData.accuracy} defence={characterData.defence} hp={characterData.hp} currentHp={playerCurrentHp} />
            {enemy && <Bars containerClass={'statBarContainerEnemy'} name={enemy.name} attack={enemy.attack} agility={enemy.agility} accuracy={enemy.accuracy} defence={enemy.defence} hp={enemy.hp} currentHp={enemyCurrentHp} />}
            {result && <Result stop={stop} playMenuMusic={playMenuMusic} setLevelUp={setLevelUp} setMainGame={setMainGame} setDuelSection={setDuelSection} currentMoney={currentMoney} currentXp={currentXp} addedMoney={addedMoney} addedXp={addedXp} />}
            {lostResult && <LostResult stop={stop} playMenuMusic={playMenuMusic} setMainGame={setMainGame} setDuelSection={setDuelSection} currentMoney={currentMoney} currentXp={currentXp} addedMoney={addedMoney} addedXp={addedXp} />}
        </div>
    )
}