class Game {
    constructor(name, altNames, videoArray) {
        this.name = name
        this.altNames = altNames
        this.videoArray = videoArray
        
    }
}

class GameElement {
     constructor(id, innerhtml) {
          this.elem = document.createElement('div')
          this.elem.innerHTML = innerhtml
          this.elem.id = id
          // appendChild
     }
}

var fortnite = new Game('fortnite', [], ["gameplay/fortnite.mp4"])
var csgo = new Game('csgo', ['csgo', 'counter-strike', 'counter strike', 'counter-strike global offensive'], ["gameplay/csgo.mp4"])
var pubg = new Game('pubg', ['pubg', 'playerunknowns battlegrounds', "playerunknown\'s battlegrounds", "player unknowns battlegrounds"], ["gameplay/pubg.mp4"])
var roe = new Game('roe', ['roe', 'ring of elysium'], ["gameplay/roe.mp4"])
var sdv = new Game('stardew valley', ['sdv'], ["gameplay/sdv.mp4"])
var tf2 = new Game('tf2', ['tf2', 'team fortress', 'team fortress 2'], ["gameplay/tf2.mp4"])
var overwatch = new Game('overwatch', ['overwatch'], ["gameplay/overwatch.mp4"])
var deadspace = new Game('dead space', ['dead space'], ["gameplay/deadspace.mp4"])
var soma = new Game('soma', ["soma"], ["gameplay/soma.mp4"])

const Gamedata = {
    games: ["fortnite", "csgo", "counter-strike", "counter strike", "counter-strike global offensive", "pubg", "playerunknowns battlegrounds", "playerunknown's battlegrounds", "player unknowns battlegrounds", "ring of elysium", "roe", "stardew valley", "tf2", "team fortress 2", "overwatch", "dead space", "soma"],
    gameObjects: [fortnite, csgo, pubg, roe, tf2, overwatch, deadspace, soma]
}