#! /usr/local/bin/node

const fs = require('fs')

const {allGuests, allRooms, allBookings} = require('./database')



const command = process.argv[2]
console.log(allGuests);
switch (command) {
  case 'guests':
    allGuests()
    break
  case 'rooms':
    allRooms()
    break
  case 'bookings':
    allBookings()
    break

  default:
    console.log('Please enter valid argument')
}
