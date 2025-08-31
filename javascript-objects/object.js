const player = {
    name: 'Imran Nazir',
    id: 120,
    address: 'Pakistan Lahore',
    isMarried: true,
    friends: ['babar azam', 'hafiz', 'imran khan', 'md: rahim'],
    match: [{name: 'ODI', year: 2012, win: true}, {name: 'T20', year: 2015, win: false}],
    drawMatch: function () {
        return (
            console.log('this match very hard')
        )

    },
    car: {
        brand: 'tesla',
        price: 12000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }
}

console.log(player.name)
const draw = player.drawMatch();
console.log(draw)
