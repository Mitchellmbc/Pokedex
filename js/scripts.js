let pokemonRepository = (function(){
  let pokemonList =[];
  pokemonList = [
  {name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"]},
  {name:"Charmander", height: 0.6, types: ["fire"]},
  {name: "Squirtle", height: 0.5, types: ["water"]}
  ];

  function add(pokemon){
    pokemonList.push(pokemon);
  }

  function getAll(){
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

let pokemonPrint = pokemonRepository.getAll();

pokemonPrint.forEach(function(pokemon){
  document.write(`${pokemon.name}   (height: ${pokemon.height})`);

  if(pokemon.height > 0.6){
    document.write(" - Wow, that's big!");
  }

  document.write("<br>");
});

/*
console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Diglet"});
console.log(pokemonRepository);
*/

/*
for(let i = 0; i < pokemonList.length; i++){
  document.write(`${pokemonList[i].name}   (height: ${pokemonList[i].height})`);

  if(pokemonList[i].height > 0.6){
    document.write(" - Wow, that's big!");
  }

  document.write("<br>");
}
*/
