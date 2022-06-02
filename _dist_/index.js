/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')



const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=Caracas,ve&appid=da7fbe90814d1c0df0952d23c1bd66d7`

async function fecthProve(){
    const response = await window.fetch(baseUrl)
    const resJson = response.json()
    return resJson
}

fecthProve().then(
    data => console.log(data)
)
