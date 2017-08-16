const { roomAvailability } = require('../database')

const rooms = () => {
  roomAvailability().then(results => {
    const roomNumberColumnLength = Math.max.apply(null, results.map(room => room.room_number.toString().length))

    const capacityColumnLength = Math.max.apply(null, results.map(room => room.capacity.toString().length))

    const availabilityColumnLength = Math.max.apply(null, results.map(room => room.capacity.toString().length))

    console.log('Room #' + ' '.repeat(roomNumberColumnLength) + 'Capacity' + ' '.repeat(capacityColumnLength) + 'Availability')

    console.log('-'.repeat(roomNumberColumnLength + 4) + ' ' + '-'.repeat(capacityColumnLength + 8) + ' ' + '-'.repeat(availabilityColumnLength + 12))

    results.forEach((room) => {
      console.log(room.room_number + ' '.repeat(roomNumberColumnLength + 8 - room.room_number.toString().length) + room.capacity + ' '.repeat(capacityColumnLength + 8 - room.capacity.toString().length) + room.case)
    })
  })
}

module.exports.roomAvailability = rooms
