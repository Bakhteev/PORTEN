// const bogdan = document.getElementById('liked')

// bogdan.addEventListener('click', function() {
//     const logo = document.getElementById('logo')
//     logo.style.opacity = '1'
// })

const body = document.getElementById('body')

function drug() {
    let random = Math.floor(Math.random() * Math.floor(100))
    body.style.backgrondColor = `#5${random}`;
}
setInterval( drug, 500)