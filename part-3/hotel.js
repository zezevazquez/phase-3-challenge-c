let count = 0;
let totalPrice = 0;

const span = document.querySelectorAll('.close')[0];
span.addEventListener('click', toggleModal)

function toggleModal() {
  document.querySelector('#modal').classList.toggle('modal-toggle')
}

const bookRoom = document.querySelectorAll('#book-room');
bookRoom.forEach(function(item) {
  item.addEventListener('click', toggleModal)
})

const roomDetails = document.querySelectorAll('#book-room')
roomDetails.forEach((item) => {
  item.addEventListener('click', (event) => {
    const roomCost = Number(event.target.parentNode.previousElementSibling.innerHTML.slice(1))

    const roomNumber = event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML

    document.querySelector('.modal-room-number').innerHTML = '<b>Room</b>' + ` <b>${roomNumber}</b>`

    document.querySelector('.modal-room-cost').innerHTML = '$' + roomCost + '/night'

    const numberNights = document.querySelectorAll('.dropdown-option')
    numberNights.forEach((click) => {
      click.addEventListener('click', (event) => {
        const totalNights = Number(event.target.innerHTML);
        const totalRate = roomCost * totalNights

        document.querySelector('.total').innerHTML = '$' + totalRate.toFixed(2)
      })
    })
  })
})


const confirm = document.querySelector('.confirm')
confirm.addEventListener('click', function(event) {
  toggleModal()
})

const dropDown = document.querySelector('.dropbtn')
dropDown.addEventListener('click', () => {
  document.querySelector('#myDropdown').classList.toggle('show')
})

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    const dropdowns = document.querySelector('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
