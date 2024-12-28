async function fetchDataPokemon(){
    let response = await fetch('https://pokeapi.co/api/v2/pokemon'); 

    let data = await response.json();

    data.results.map((poke)=>{
        console.log(poke.name);
    })


}


fetchDataPokemon()

// KENAPA HARUS PAKE ASYNC AWAIT 
// https://chatgpt.com/c/676edf4b-524c-800b-b158-6f4a531a4717