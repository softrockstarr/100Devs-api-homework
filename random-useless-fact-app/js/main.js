//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://uselessfacts.jsph.pl//random.json?language=en'

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.text
        document.querySelector('a').innerText = data.source_url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

