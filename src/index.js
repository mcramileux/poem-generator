function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "efea043c4addbbb4t1937c3df4occ86c";
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with '~ The Poet AI 💖' inside a < strong > element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;


    // console.log("Generating poem");
    // console.log(`Prompt: ${prompt}`);
    // console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);