const { allGuests } = require('../database')

const guests = () => {
  allGuests().then(result => {
    const idColumnLength = Math.max.apply(null, result.map(guest => guest.id.toString().length))

    const guestColumnLength = Math.max.apply(null, result.map(guest => guest.name.toString().length))

    const emailColumnLength = Math.max.apply(null, result.map(guest => guest.email.toString().length))

    console.log('ID' + ' '.repeat(idColumnLength) + 'Guest' + ' '.repeat(guestColumnLength) + 'Email')

    console.log('-'.repeat(idColumnLength + 1) + ' ' + '-'.repeat(guestColumnLength) + ' ' + '-'.repeat(emailColumnLength))

    result.forEach((guest) => {
      console.log(guest.id + ' '.repeat(idColumnLength + 2 - guest.id.toString().length) + guest.name + ' '.repeat(guestColumnLength + 2 - guest.name.toString().length) + guest.email)
    })
  })
}

module.exports.allGuests = guests
