import deathBringer from './img/enemyImg/Bringer-of-Death-SpritSheet.png'
import heavyBandit from './img/enemyImg/HeavyBandit_Idle_2.png'
import lightBandit from './img/enemyImg/LightBandit_Idle_3.png'
import necromancer from './img/enemyImg/Necromancer_creativekind-Sheet.png'
import nightborne from './img/enemyImg/NightBorne.png'
import death from './img/enemyImg/death.png'
import demon from './img/enemyImg/demon_slime_FREE_v1.0_288x160_spritesheet.png'
import elemental from './img/enemyImg/elemental.png'
import ghost from './img/enemyImg/ghost.gif'
import goblin from './img/enemyImg/goblin.png'
import hellBeast from './img/enemyImg/hell-beast-idle.gif'
import hellHound from './img/enemyImg/hell-hound-idle.gif'
import ghoul from './img/enemyImg/idle.gif'
import mushroom from './img/enemyImg/mushroom.png'
import nightmare from './img/enemyImg/nightmare-idle.gif'
import littleImp from './img/enemyImg/ready_4.png'
import heavyImp from './img/enemyImg/ready_3.png'
import skeleton from './img/enemyImg/skeleton.gif'
import skeletonWarrior from './img/enemyImg/skeleton.png'

const enemys = [
    {
        img: deathBringer,
        name: 'Death Bringer',
        hp: 170,
        attack: 13,
        defence: 10,
        agility: 10,
        accuracy: 0.7 
    },
    {
        img: heavyBandit,
        name: 'Heavy Bandit',
        hp: 250,
        attack: 13,
        defence: 6,
        agility: 6,
        accuracy: 0.6
    },
    {
        img: lightBandit,
        name: 'Light Bandit',
        hp: 160,
        attack: 10,
        defence: 4,
        agility: 20,
        accuracy: 0.8
    },
    {
        img: necromancer,
        name: 'Necromancer',
        hp: 130,
        attack: 17,
        defence: 3,
        agility: 7,
        accuracy: 1 
    },
    {
        img: nightborne,
        name: 'the Nightborne',
        hp: 100,
        attack: 20,
        defence: 6,
        agility: 4,
        accuracy: 0.9 
    },
    {
        img: death,
        name: 'Death',
        hp: 200,
        attack: 3,
        defence: 10,
        agility: 7,
        accuracy: 0.6 
    },
    {
        img: demon,
        name: 'Demon',
        hp: 250,
        attack: 8,
        defence: 15,
        agility: 2,
        accuracy: 0.6
    },
    {
        img: elemental,
        name: 'Rock Elemental',
        hp: 300,
        attack: 3,
        defence: 15,
        agility: 2,
        accuracy: 0.3 
    },
    {
        img: ghost,
        name: 'Losen Soul',
        hp: 160,
        attack: 14,
        defence: 10,
        agility: 10,
        accuracy: 0.6 
    },
    {
        img: goblin,
        name: 'Goblin',
        hp: 100,
        attack: 20,
        defence: 5,
        agility: 15,
        accuracy: 0.8 
    },
    {
        img: hellBeast,
        name: 'Hell Beast',
        hp: 170,
        attack: 13,
        defence: 14,
        agility: 6,
        accuracy: 0.7 
    },
    {
        img: hellHound,
        name: 'Hell Hound',
        hp: 220,
        attack: 11,
        defence: 11,
        agility: 6,
        accuracy: 0.8
    },
    {
        img: ghoul,
        name: 'Ghoul',
        hp: 140,
        attack: 14,
        defence: 12,
        agility: 10,
        accuracy: 0.7 
    },
    {
        img: mushroom,
        name: 'Mushroom',
        hp: 230,
        attack: 3,
        defence: 13,
        agility: 11,
        accuracy: 0.5
    },
    {
        img: nightmare,
        name: 'the Nightmare',
        hp: 120,
        attack: 20,
        defence: 10,
        agility: 8,
        accuracy: 0.8 
    },
    {
        img: littleImp,
        name: 'Little Imp',
        hp: 120,
        attack: 9,
        defence: 9,
        agility: 20,
        accuracy: 0.8 
    },
    {
        img: heavyImp,
        name: 'Heavy Imp',
        hp: 200,
        attack: 6,
        defence: 14,
        agility: 10,
        accuracy: 0.5 
    },
    {
        img: skeleton,
        name: 'Skeleton',
        hp: 100,
        attack: 10,
        defence: 2,
        agility: 28,
        accuracy: 0.9 
    },
    {
        img: skeletonWarrior,
        name: 'Skeleton Warrior',
        hp: 140,
        attack: 12,
        defence: 7,
        agility: 17,
        accuracy: 0.7 
    }
]

export default enemys