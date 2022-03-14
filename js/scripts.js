let pokemonRepository = (function(){
  let pokemonList =[];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList(){
    fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(pokemonList){
      pokemonList.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      })
    }).catch(function (e){
      console.log(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

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
    if(typeof pokemon === "object" && "name" in pokemon && "detailsUrl" in pokemon){
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
    button.addEventListener('click', function(pokemon){
      console.log(button.innerText);
    })
    listItem.appendChild(button);
    list.appendChild(listItem);

  }

  return {
    add: add,
    getAll: getAll,
    search: search,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList();

let pokemonPrint = pokemonRepository.getAll();

console.log("1", pokemonPrint);

pokemonPrint.forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});


console.log(pokemonPrint);
