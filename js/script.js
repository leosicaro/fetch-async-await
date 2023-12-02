const getPokemons = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!res.ok) {
            throw new Error("Hubo un problema cargando los pokemon");
        }
        const pokemons = await res.json();
        //console.log(pokemons)//results[0].url
        pokemons.results.forEach(async (urlPokemon) => {
            try {
                const res = await fetch(urlPokemon.url)
                if (!res.ok) {
                    throw new Error("Hubo un problema cargando los pokemon")
                }
                const arrpokemon = await res.json();
                //console.log(pokemon)
                printPokemon(arrpokemon)
                
            } catch (error) {
                console.error
            }
        })
    } catch (error) {
        console.error(error);

    }
    
}

const container = document.getElementById('app')

getPokemons()
  
const printPokemon = arrpokemon =>{
    console.log(arrpokemon.name);
    
    container.innerText += `
    <div class= 'card'>
    <img src='${sprites.other.home}' alt='pokemon image'>
    <h2> ${arrpokemon.name} </h2>
    </div>
    `;
    }







//let api = urlPokemon.results[0].url
