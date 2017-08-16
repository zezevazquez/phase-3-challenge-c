const pgp = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${'hotel_db'}`
const db = pgp(connectionString)

const allGuests = () => {
  return db.any('SELECT * FROM guests')
}

const roomAvailability = () => {
  return db.many("SELECT room_number, capacity, check_in, check_out, CASE WHEN date '08-15-2017' >= check_in AND date '08-15-2017' <= check_out THEN false ELSE true END FROM rooms JOIN bookings ON bookings.room_id = rooms.id")
}

const allBookings = () => {
  return db.any('SELECT room_number,name, check_in, check_out FROM bookings JOIN rooms ON  bookings.room_id = rooms.id JOIN guests ON bookings.guest_id = guests.id')
}


module.exports = {
  allGuests,
  roomAvailability,
  allBookings
}
