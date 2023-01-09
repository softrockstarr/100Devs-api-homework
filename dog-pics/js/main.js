
/*document.querySelector('button').addEventListener('click', getCatFact)

function getCatFact(){
fetch("https://random-d.uk/api/v2/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.random[0]) 
        document.querySelector('img').src = data.random[0]
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

console.log("test")*/

document.querySelector('button').addEventListener('click', getDogImg)

function getDogImg(){
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
