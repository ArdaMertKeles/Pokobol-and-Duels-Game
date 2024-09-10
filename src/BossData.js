import iceGolem from './img/bossImg/boss.png'
import demon from './img/bossImg/demon-idle.gif'
import fireSkull from './img/bossImg/fire-skull.gif'
import fallenKnight from './img/bossImg/Knight-Idle.gif'

const bosses = [
    {
        name: 'Ice Golem',
        img: iceGolem,
        hp: 400,
        attack: 23,
        defence: 20,
        agility: 17,
        accuracy: 0.7,
    },
    {
        name: 'Demon King',
        img: demon,
        hp: 450,
        attack: 25,
        defence: 16,
        agility: 14,
        accuracy: 0.8,
    },
    {
        name: 'Fire Skull',
        img: fireSkull,
        hp: 350,
        attack: 45,
        defence: 13,
        agility: 17,
        accuracy: 0.7,
    },
    {
        name: 'Fallen Knight',
        img: fallenKnight,
        hp: 250,
        attack: 30,
        defence: 20,
        agility: 30,
        accuracy: 0.8,
    }
]

export default bosses