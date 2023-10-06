const body = document.querySelector("body");
const img = document.createElement("img");
const punchline = document.getElementById("punchline");
const setup = document.getElementById("setup");
const btnNextJoke = document.getElementById("next-joke");
const btnRevealJoke = document.getElementById("reveal-joke");

(async () => {
    try {
        let response = await fetch("/api/xkcd");
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        let data = await response.json();
        img.src = data.img;
        body.appendChild(img);

        response = await fetch("/api/jokes/random");
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        data = await response.json();
        punchline.innerText = data.punchline;
        setup.innerText = data.setup;
        console.log(data);
    } catch (error) {
        console.log("Catch error");
        console.error(error);
    }
})();

btnNextJoke.addEventListener('click', async () => {
    let response = await fetch("/api/jokes/Random");
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    data = await response.json();
    punchline.innerText = data.punchline;
    setup.innerText = data.setup;
    punchline.style.display = 'none'

    console.log(data);
})

btnRevealJoke.addEventListener('click', () => {
    if(punchline.style.display === 'none'){
        punchline.style.display = 'block'
    }   
})