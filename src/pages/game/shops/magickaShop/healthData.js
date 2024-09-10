import health1 from './img/health1.png'
import health2 from './img/health2.png'
import health3 from './img/health3.png'

const healthDatas = [
    {
        id: 1,
        status: false,
        buyStatus: 'unBought',
        img: health1,
        name: "Small Health Potion",
        health: 14,
        attack: 0,
        agility: 0,
        hp: 0,
        price: 960
    },
    {
        id: 2,
        status: false,
        buyStatus: 'unBought',
        img: health2,
        name: "Medium Health Potion",
        health: 28,
        attack: 0,
        agility: 0,
        hp: 0,
        price: 1650
    },
    {
        id: 3,
        status: false,
        buyStatus: 'unBought',
        img: health3,
        name: "Great Health Potion",
        health: 50,
        attack: 0,
        agility: 0,
        hp: 0,
        price: 2748
    }
]

export default healthDatas