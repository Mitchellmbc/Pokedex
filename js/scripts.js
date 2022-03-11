let pokemonRepository = (function(){
  let pokemonList =[];
  pokemonList = [
  {name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"]},
  {name:"Charmander", height: 0.6, types: ["fire"]},
  {name: "Squirtle", height: 0.5, types: ["water"]}
  ];

  return {
    add: function(pokemon){
      pokemonList.push(pokemon);
    },
    getAll: function(){
      return pokemonList;
    }
  };
})();

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
