

document.querySelector('#PokemonChoice').addEventListener('click', function(){

    let pokemon_input = document.querySelector('#pokemonKind').value
    let pokemon = pokemon_input.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    getPokemon(url)

}

)

let results = null;
async function getPokemon(url) { 
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
  
    const data = await response.json();
    console.log(data)
    doStuff(data);
  }
  

  


}
function doStuff(results) {

  const outputElement = document.querySelector('#output')
  const html = `<h2> ${results.name.toUpperCase()} <h2> <img src = '${results.sprites.front_default}' alt = 'Image of ${results.name}'> 
  <h3>Height: ${results.height}</h3> `

  outputElement.innerHTML = html

  getType(results)
  getStrength(results)
  getWeakness(results);
  getAbilities(results);
  getMoves(results);

}


function getAbilities(results){
    

    let pokeAbilities = results.abilities
    
    let article = document.createElement('article')
      let html = document.createElement('h1')
      html.textContent = 'Abilities'
      article.appendChild(html)

    pokeAbilities.forEach((number) => {
        let ability = document.createElement('li')
        ability.textContent = number.ability.name
         
        article.appendChild(ability)


        document.querySelector('#output').appendChild(article)
    });
    
    
}

function getMoves(results){
    let pokeMoves = results.moves;
    
    let article = document.createElement('article')
      let html = document.createElement('h1')
      html.textContent = 'Moves'
      article.appendChild(html)
    
    pokeMoves.forEach((number) =>{
    let  name = number.move.name
    let move = document.createElement('li')
    move.textContent = name
    
   
    article.appendChild(move)

      
      document.querySelector('#output').appendChild(article);

    }
    
  
    )}

  function getType(results){
    let pokeType = results.types
    let article = document.createElement('article')
      let html = document.createElement('h1')
      html.textContent = 'Type'
      article.appendChild(html)
    pokeType.forEach((number) =>{

      let type = document.createElement('li')
      type.textContent = number.type.name
      
      article.appendChild(type)
      
      document.querySelector('#output').appendChild(article)

     
    }
    
    )
    
  }

  function getWeakness(results){
    let weakness
    let pokeType = results.types
    let article = document.createElement('article')
      let html = document.createElement('h1')
      html.textContent = 'Weaknesses'
      article.appendChild(html)
    pokeType.forEach((number)=>{
    let type = number.type.name
  

  switch(type){
    case 'bug':

    weakness = "Fire, Flying, Rock"
    break;
    case 'dark':

    weakness = "Bug, Fairy, Fighting"
    break;
    case 'dragon':

    weakness = "Dragon, Fairy, Ice"
    break;
    case 'electric':

    weakness = "Ground"
    break;
    case 'fairy':

    weakness = "Poison, Steel"
    break;
    case 'fighting':

    weakness = "Fairy, Flying, Psychic"
    break;
    case 'fire':

    weakness = "Ground, Rock, Water"
    break;
    case 'flying':

    weakness = "Electric, Ice, Rock"
    break;
    case 'ghost':

    weakness = "Dark, Ghost"
    break;
    case 'grass':

    weakness = "Bug, Fire, Flying, Ice, Poison"
    break;
    case 'ground':

    weakness = "	Grass, Ice, Water"
    break;
    case 'ice':

    weakness = "Fighting, Fire, Rock, Steel"
    break;
    case 'normal':

    weakness = "Fighting"
    break;
    case 'poison':

    weakness = "Ground, Psychic"
    break;
    case 'psychic':

    weakness = "Bug, Dark, Ghost"
    break;
    case 'rock':

    weakness = "Fighting, Grass, Ground, Steel, Water"
    break;
    case 'steel':

    weakness = "Fighting, Fire, Ground"
    break;
    case 'water':

    weakness = "Fighting, Fire, Ground"
    break;

  }
  let types = document.createElement('h3')
    types.textContent = `For ${type}:`

  article.append(types)
 let weaknesses = document.createElement('p')
 weaknesses.textContent = weakness

 article.appendChild(weaknesses)

 document.querySelector('#output').appendChild(article)
})
  
  

  }

  function getStrength(results){
    let strength
    let pokeType = results.types
    let article = document.createElement('article')
      let html = document.createElement('h2')
      html.textContent = 'Strengths'
      article.appendChild(html)
    pokeType.forEach((number)=>{
    let type = number.type.name
  

  switch(type){
    case 'bug':

    strength = "Grass, Dark, Psychic	"
    break;
    case 'dark':

    strength = "Ghost, Psychic"
    break;
    case 'dragon':

    strength = "Dragon"
    break;
    case 'electric':

    strength = "Flying, Water"
    break;
    case 'fairy':

    strength = "	Fighting, Dark, Dragon"
    break;
    case 'fighting':

    strength = "Dark, Ice, Normal, Rock, Steel"
    break;
    case 'fire':

    strength = "Bug, Grass, Ice, Steel"
    break;
    case 'flying':

    strength = "Bug, Fighting, Grass"
    break;
    case 'ghost':

    strength = "Ghost, Psychic"
    break;
    case 'grass':

    strength = "Ground, Rock, Water"
    break;
    case 'ground':

    strength = "	Electric, Fire, Poison, Rock, Steel"
    break;
    case 'ice':

    strength = "Dragon, Flying, Grass, Ground"
    break;
    case 'normal':

    strength = "Nothing"
    break;
    case 'poison':

    strength = "Fairy, Grass"
    break;
    case 'psychic':

    strength = "Fighting, Poison"
    break;
    case 'rock':

    strength = "Bug, Fire, Flying, Ice"
    break;
    case 'steel':

    strength = "Fairy, Ice, Rock"
    break;
    case 'water':

    strength = "	Fire, Ground, Rock"
    break;

  }
    let types = document.createElement('h3')
    types.textContent = `For ${type}:`

  article.append(types)
 let strengths = document.createElement('p')
 strengths.textContent = strength

 article.appendChild(strengths)

 document.querySelector('#output').appendChild(article)
})
  
  



  }