

const villagerSpecies = document.querySelector('#species')
const villagerCatchphrase = document.querySelector('#catchphrase')
const villagerBirthday = document.querySelector('#birthday')

document.querySelector('button').addEventListener('click', getVillager)

fetch("http://acnhapi.com/v1/villagers/")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

function getVillager(){
  const url = `http://acnhapi.com/v1/villagers/${pickRandomVillagerId()}`


  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name["name-USen"]
        document.querySelector('img').src = data.image_uri
        document.querySelector('#birthday').innerText = data['birthday-string']
        document.querySelector('#catchphrase').innerText = data['catch-phrase']
        document.querySelector('#species').innerText = data.species
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function pickRandomVillagerId (){
  return getRandomInt(1, 391)
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}