let pokemonRepository = (function(){
  let pokemonList =[];
  pokemonList = [
  {name: "Bulbasaur", height: 0.7, types: ["Grass", "Poison"]},
  {name:"Charmander", height: 0.6, types: ["fire"]},
  {name: "Squirtle", height: 0.5, types: ["water"]}
  ];

  function isEqual(array1,array2){
    if(array1.length === array2.length){
      for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
          return false;
        }
      }
      return true;
    }
    return false;
  }

  function add(pokemon){
    if(typeof pokemon === "object" && isEqual(Object.keys(pokemon), Object.keys(pokemonList[0]))){
    pokemonList.push(pokemon);
  } else{
    alert("Please enter a valid pokemon.");
  }
  }

  function getAll(){
    return pokemonList;
  }

  function search(name){
    return pokemonList.filter((pokemon) => {name === pokemon.name});
  }

  function addListItem(pokemon){
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  return {
    add: add,
    getAll: getAll,
    search: search,
    addListItem: addListItem
  };
})();

let pokemonPrint = pokemonRepository.getAll();

pokemonPrint.forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});

pokemonRepository.add({name: "Diglet", height: 1.2, types: ["fighter", "dark"]});

console.log(pokemonRepository.getAll());

console.log(pokemonRepository.search("Bulbasaur"));
