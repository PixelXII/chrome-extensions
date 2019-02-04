function id(e) {
    return document.getElementById(e)
}

function searchForGame(a) {
    Gamedata.gameObjects.forEach(e => {
         if(e.altNames.includes(a)) {
              // display game from search
         }
    })
}

var contentBox = id('content-box')
var landingPage = id('landing-page')

const events = {
    search: new Event('search')
}

var searchBar = id('search-bar')
var searchButton = id('search-button')
searchBar.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
        window.dispatchEvent(events.search)
    }
})
searchButton.addEventListener('click', () => {
    window.dispatchEvent(events.search)
})

window.addEventListener('search', () => {
    searchForGame(searchBar.value)
    searchBar.value = ''
})

let a = id('title-text')
window.addEventListener('resize', () => {
     a.style.fontSize = window.innerHeight/15
})