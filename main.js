import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

function getExpScoreA(ratingA - ratingB) {
  return 1.0 / (1 + 10 ** ((ratingB - ratingA) / 400))
}

function ratingAdj(rating, expScore, score, k=32) {
  return rating + k * (score - expScore)
}

class Player(object) {
  constructor(name, rating=1500) {
    this.name = name
    this.rating = rating
    this.games = 0
    this.wins = 0
    this.losses = 0
    this.draws = 0
  }

  function match(self, other, result) {
    self.games += 1
    other.games += 1

    expScoreA = getExpScoreA(self.rating, other.rating)
    
    if (result == self.name) {
      self.wins += 1
      other.losses += 1
      self.rating = ratingAdj(self.rating, expScoreA, 1)
      other.rating = ratingAdj(other.rating, expScoreA, 0)
    } else if (result == other.name) {
      self.losses += 1
      other.wins += 1
      self.rating = ratingAdj(self.rating, expScoreA, 0)
      other.rating = ratingAdj(other.rating, expScoreA, 1)
    } else if (result == "Draw") {
      self.draws += 1
      other.draws += 1
      // add some code for draws here later 
    } else {
      console.log('error, wrong name')
    }

    
    }
  }



