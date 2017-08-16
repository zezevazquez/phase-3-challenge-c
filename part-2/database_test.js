const expect = require('chai').expect

const queries = require('./database')

describe('queries', () => {
  describe('allGuests', () => {
    it('returns query for all guests in guests table', () => {
      return queries.allGuests()
      .then(results => {
        expect(results).to.be.an('array')
        expect(results[0].name).to.equal('Aurthur Velti')
        expect(results[19].id).to.equal(20)
        expect(results.length).to.equal(20)
      })
      .catch(console.error)
    })
  })

  describe('roomAvailability', () => {
    it('returns query for all guests in guests table', () => {
      return queries.roomAvailability()
      .then(results => {
        expect(results).to.be.an('array')
        expect(results[0].room_number).to.equal('3B')
        expect(results[0].case).to.equal(true)
        expect(results.length).to.equal(40)
      })
      .catch(console.error)
    })
  })

  describe('allBookings', () => {
    it('returns query for all guests in guests table', () => {
      return queries.allBookings()
      .then(results => {
        expect(results).to.be.an('array')
        expect(results[0].name).to.equal('Janie Powers')
        expect(results[1].room_number).to.equal('3C')
        expect(results.length).to.equal(40)
      })
      .catch(console.error)
    })
  })

})
