let pokemonRepository = (function(){
  let pokemonList =[];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showLoadingMessage(){
    let error = document.querySelector("h2");
    error.classList.remove("hidden");
    console.log(error);
  }

  function hideLoadingMessage(){
    let error = document.querySelector("h2");
    error.classList.add("hidden");
    console.log(error);
  }


  function loadList(){
    showLoadingMessage();
    return fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(pokemonList){
      hideLoadingMessage();
      pokemonList.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      })
    }).catch(function (e){
      hideLoadingMessage();
      console.log(e);
    });
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      hideLoadingMessage();
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      hideLoadingMessage();
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

  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
    });
  }

  function addListItem(pokemon){
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    /*button.addEventListener('click', function(pokemon){
      console.log(button.innerText);
    })*/
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
    listItem.appendChild(button);
    list.appendChild(listItem);

  }

  return {
    add: add,
    getAll: getAll,
    search: search,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showLoadingMessage: showLoadingMessage,
    hideLoadingMessage: hideLoadingMessage
  };
})();

function showModal(title, text) {
  let modalContainer = document.querySelector('#modal-container');

  //clear existing text
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  //new content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});

pokemonRepository.loadList();

let pokemonPrint = pokemonRepository.getAll();

pokemonRepository.loadList().then(function () {
  pokemonPrint.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
