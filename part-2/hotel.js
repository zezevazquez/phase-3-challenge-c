#! /usr/local/bin/node

const { allGuests } = require('./commands/guests')
const { roomAvailability } = require('./commands/rooms')
const { allBookings } = require('./commands/bookings')



const command = process.argv[2]
console.log(allGuests);
switch (command) {
  case 'guests':
    allGuests()
    break
  case 'rooms':
    roomAvailability()
    break
  case 'bookings':
    allBookings()
    break

  default:
    console.log('Please enter valid argument')
}
