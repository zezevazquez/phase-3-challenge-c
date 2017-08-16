const { allBookings } = require('../database')

const bookings = () => {
  allBookings().then(result => {
    const roomNumberColumnLength = Math.max.apply(null, result.map(booking => booking.room_number.toString().length))

    const guestColumnLength = Math.max.apply(null, result.map(booking => booking.name.toString().length))

    const checkinColumnLength = Math.max.apply(null, result.map(booking => booking.check_in.toString().length))

    console.log('Room #' + ' '.repeat(roomNumberColumnLength) + 'Guest Name' + ' '.repeat(guestColumnLength) + 'Check In' + ' '.repeat(checkinColumnLength) + 'Check Out')

    console.log('-'.repeat(roomNumberColumnLength + 4) + ' ' + '-'.repeat(33))

    result.forEach((booking) => {
      console.log(booking.room_number + ' '.repeat(roomNumberColumnLength + 5 - booking.room_number.toString().length) + booking.name + ' '.repeat(guestColumnLength + 8 - booking.name.toString().length) + booking.check_in)
    })
    // console.log(result.length);
  })
}

module.exports.allBookings = bookings
