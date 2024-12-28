// Tanpa Async Await 

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
        // Jangan lupa harus .json()
        return response.json()
    })
    .then((data)=>{
        data.results.map((poke)=>{
            console.log(poke.name)
        })
    })