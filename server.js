const express = require ('express')
const app = express()
const PORT = 3000


const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900, 
        avatar: 'https://images.app.goo.gl/YwNw3ijVo95eYe5S6',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Master',
        forcePoints: 10000,
        age: 40, 
        avatar: 'https://images.app.goo.gl/M3Kv4xFfmzFo6cdi8',
        routeName: 'lukeskywalker'
    },
    {
        name: 'Princess Leia',
        role: 'Princess General',
        forcePoints: 100,
        age: 40, 
        avatar: 'https://images.app.goo.gl/9S8E6XPf4iYSiNs99',
        routeName: 'princessleia'
    }

]
app.get('/', (req, res) => {
    res.send('May the force be with you')

})

// /api/characters - show all char data

app.get('/api/characters', (req, res) => {
    res.json(characters)
})

// /api/characters/:routename

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})