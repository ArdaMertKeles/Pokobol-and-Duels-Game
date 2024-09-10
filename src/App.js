import './style.css';
import characters from './CharacterData';
import enemys from './EnemyData'
import bosses from './BossData';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import MainMenu from './pages/mainMenu/MainMenu';
import LoadingScreen from './pages/loadingScreen/LoadingScreen';
import MainGame from './pages/game/MainGame';
import Duel from './pages/battleSection/duelBattle/Duel';
import Tournament from './pages/battleSection/tournamentBattle/Tournament';
import LevelUp from './pages/battleSection/LevelUp';
// Datas
import armors from './pages/game/shops/armoryShop/armoryData'
import agilityDatas from './pages/game/shops/magickaShop/agilityData'
import attackDatas from './pages/game/shops/magickaShop/attackData'
import defenceDatas from './pages/game/shops/magickaShop/defenceData'
import healthDatas from './pages/game/shops/magickaShop/healthData'
import swordsData from './pages/game/shops/arsenalShop/itemDatas/swordData'
import axesData from './pages/game/shops/arsenalShop/itemDatas/axeData'
import macesData from './pages/game/shops/arsenalShop/itemDatas/maceData'
import projectileData from './pages/game/shops/projectilesShop/projectilesData'
// Sounds
import track from './pages/game/sounds/track.wav'
import battleTrack from './pages/game/sounds/battleTrack.mp3'
import track1 from './pages/game/sounds/track1.mp3'
import track2 from './pages/game/sounds/track2.mp3'
import track3 from './pages/game/sounds/track3.mp3'
import track4 from './pages/game/sounds/track4.mp3'
import track5 from './pages/game/sounds/track5.mp3'
import track6 from './pages/game/sounds/track6.mp3'
import track7 from './pages/game/sounds/track7.mp3'
import track8 from './pages/game/sounds/track8.mp3'
import track9 from './pages/game/sounds/track9.mp3'

function App() {

  const [mainMenu, setMainMenu] = useState(true)
  const [loading, setLoading] = useState(false)
  const [mainGame, setMainGame] = useState(false)
  const [duelSection, setDuelSection] = useState(false)
  const [tournamentSection, setTournamentSection] = useState(false)
  const [levelUp, setLevelUp] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  // Datas
  const [armorData, setArmorData] = useState([])
  const [healthData, setHealthData] = useState([])
  const [attackData, setAttackData] = useState([])
  const [defenceData, setDefenceData] = useState([])
  const [agilityData, setAgilityData] = useState([])
  const [swordData, setSwordData] = useState([])
  const [axeData, setAxeData] = useState([])
  const [maceData, setMaceData] = useState([])
  const [projectilesData, setProjectilesData] = useState([])
  const [charactersData, setCharactersData] = useState([])
  const [enemyData, setEnemyData] = useState([])
  const [characterData, setCharacterData] = useState()
  const [bossData, setBossData] = useState([])
  const [baseStats, setBaseStats] = useState()
  const [currentMoney, setCurrentMoney] = useState(1000)
  const [currentXp, setCurrentXp] = useState(0)
  const [enemyDataMultiplier, setEnemyDataMultiplier] = useState(1)
  // Sounds
  // Items
  const [currentWeapon, setCurrentWeapon] = useState()
  const [currentArmor, setCurrentArmor] = useState()
  const [currentProjectile, setCurrentProjectile] = useState()
  const [currentMagicka, setCurrentMagicka] = useState()
  const [randomMusic, setRandomMusic] = useState(track)
  const [randomBattleTrack, setRandomBattleTrack] = useState(battleTrack)
  const [play, {stop}] = useSound(randomMusic, { volume: 0.35 })

  useEffect(() => {
    setCharactersData(characters)
    setEnemyData(enemys)
    setBossData(bosses)
  }, [])

  useEffect(() => {
    setCharacterData(selectedCharacter)
    setBaseStats(selectedCharacter)
  }, [selectedCharacter])

  useEffect(() => {
    setArmorData(armors)
    setHealthData(healthDatas)
    setAttackData(attackDatas)
    setDefenceData(defenceDatas)
    setAgilityData(agilityDatas)
    setSwordData(swordsData)
    setAxeData(axesData)
    setMaceData(macesData)
    setProjectilesData(projectileData)
  }, [])

  const randomTrackPlayer = () => {
    let random = Math.floor(Math.random() * 9)
    if (random === 0) {
      setRandomMusic(track1)
    }
    if (random === 1) {
      setRandomMusic(track2)
    }
    if (random === 2) {
      setRandomMusic(track3)
    }
    if (random === 3) {
      setRandomMusic(track4)
    }
    if (random === 4) {
      setRandomMusic(track5)
    }
    if (random === 5) {
      setRandomMusic(track6)
    }
    if (random === 6) {
      setRandomMusic(track7)
    }
    if (random === 7) {
      setRandomMusic(track8)
    }
    if (random === 8) {
      setRandomMusic(track9)
    }
  }


  return (
    <div className="App">
      {mainMenu && < MainMenu  charactersData={charactersData} setLoading={setLoading} setMainMenu={setMainMenu} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} />}
      {loading && <LoadingScreen playMenuMusic={play} setLoading={setLoading} setMainGame={setMainGame} />}
      {mainGame && <MainGame stopMenuMusic={stop} setTournamentSection={setTournamentSection} currentArmor={currentArmor} currentMagicka={currentMagicka} currentWeapon={currentWeapon} currentProjectile={currentProjectile} setCurrentArmor={setCurrentArmor} setCurrentMagicka={setCurrentMagicka} setCurrentWeapon={setCurrentWeapon} setCurrentProjectile={setCurrentProjectile} currentMoney={currentMoney} setCurrentMoney={setCurrentMoney} currentXp={currentXp} characterData={characterData} baseStats={baseStats} setCharacterData={setCharacterData} setMainGame={setMainGame} setDuelSection={setDuelSection} selectedCharacter={selectedCharacter} projectilesData={projectilesData} setProjectilesData={setProjectilesData} attackData={attackData} setAttackData={setAttackData} armorData={armorData} setArmorData={setArmorData} healthData={healthData} setHealthData={setHealthData} agilityData={agilityData} setAgilityData={setAgilityData} defenceData={defenceData} setDefenceData={setDefenceData} swordData={swordData} setSwordData={setSwordData} axeData={axeData} setAxeData={setAxeData} maceData={maceData} setMaceData={setMaceData} />}
      {duelSection && <Duel randomBattleTrack={randomBattleTrack} setRandomBattleTrack={setRandomBattleTrack} randomTrackPlayer={randomTrackPlayer} playMenuMusic={play} setLevelUp={setLevelUp} enemyDataMultiplier={enemyDataMultiplier} setEnemyDataMultiplier={setEnemyDataMultiplier} currentMagicka={currentMagicka} currentProjectile={currentProjectile} setDuelSection={setDuelSection} setMainGame={setMainGame} setCurrentXp={setCurrentXp} currentMoney={currentMoney} currentXp={currentXp} setCurrentMoney={setCurrentMoney} enemyData={enemyData} characterData={characterData} />}
      {tournamentSection && <Tournament randomBattleTrack={randomBattleTrack} setRandomBattleTrack={setRandomBattleTrack} randomTrackPlayer={randomTrackPlayer} playMenuMusic={play} setLevelUp={setLevelUp} enemyDataMultiplier={enemyDataMultiplier} currentMagicka={currentMagicka} currentProjectile={currentProjectile} setTournamentSection={setTournamentSection} setMainGame={setMainGame} setCurrentXp={setCurrentXp} currentMoney={currentMoney} currentXp={currentXp} setCurrentMoney={setCurrentMoney} enemyData={enemyData} bossData={bossData} characterData={characterData} />}
      {levelUp && <LevelUp characterData={characterData} baseStats={baseStats} setBaseStats={setBaseStats} setCharacterData={setCharacterData} setMainGame={setMainGame} setLevelUp={setLevelUp} setCurrentXp={setCurrentXp} />}
    </div>
  );
}

export default App;
