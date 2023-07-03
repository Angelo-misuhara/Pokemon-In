// api logiccharacteristic
const list = document.querySelector('#list');
const imgSearched = document.querySelector('.img-search');
const pokemonNameSearch = document.querySelector('.Pokemon-name');
const nameSearch = document.querySelector('.form-control');
const Abilitiesh3 = document.querySelector('.Abilitiesh3');
const Characteristic = document.querySelector('#Characteristic');
const typelist = document.querySelector('#type')
const searchBtn = document.querySelector('#button-addon2');

const searchResult = document.querySelector('#container-search-resut');
non
const noPOKE = document.querySelector('#non');



pokeApi = async () => {
  try {
    let searchName = nameSearch.value.toLowerCase();

    //fetching api
    const urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`);
    console.log(urlFetch.status)
    
    if (urlFetch.status == 200) {
      //convert the api to json
    const data = await urlFetch.json();

    //getting the name
    let namePokemon = searchName;
    //getting the image of the pokemon searched
      noPOKE.style.display='none'
    let pokemonImage = data.sprites.front_default;
    imgSearched.src = pokemonImage;
    pokemonNameSearch.innerText = data.name;
    Abilitiesh3.innerHTML = 'Abilities:';
    Characteristic.innerText = 'Type:';

    console.log(data)
    data.types.map((type) => {
      const li = document.createElement('li');
      li.classList.add('list-item');
      li.textContent = type.type.name + ' ✔';
      typelist.appendChild(li);
    }),
    //mapping abilities
    data.abilities.map((ability) => {
      const li = document.createElement('li');
      li.classList.add('list-item');
      li.textContent = ability.ability.name + ' ✔';
      list.appendChild(li);
    })
      searchResult.style.display = 'block'
      
    } if (urlFetch.status == 404 ) {
      noPOKE.style.display='block'
      searchResult.style.display='none'
    }

    // console.log(data)
  } catch (err) {
    console.log(err)
    console.log('hi')
  };
}

searchBtn.addEventListener('click', () => {
  pokeApi();
})


//fire type
const listgroup =document.querySelector('#rowro')
firetype = async () => {
  try {
    const url = await fetch(`https://pokeapi.co/api/v2/type/fire`);

    const data = await url.json()

    data.pokemon.slice(0,60).forEach((result) => {
      
      const div = document.createElement('div')
      div.classList.add('col','p-1','fireDiv');
      div.textContent = result.pokemon.name;
      listgroup.appendChild(div)
      
    })
    
  } catch (error) {
    console.log('Error:', error);
  }
}

//water tpe
const WaterRow = document.querySelector('#WaterRow');
waterType = async () => {
  try {
    const url = await fetch(`https://pokeapi.co/api/v2/type/water`);

    const data = await url.json()

    data.pokemon.slice(0,60).forEach((result) => {
      
      const div = document.createElement('div')
      div.classList.add('col','p-1','fireDiv');
      div.textContent = result.pokemon.name;
      WaterRow.appendChild(div)
      
    })
    
  } catch (error) {
    console.log('Error:', error);
  }
}

const elecrOW = document.querySelector('#elecrOW');
electricType = async () => {
  try {
    const url = await fetch(`https://pokeapi.co/api/v2/type/electric`);

    const data = await url.json()

    data.pokemon.slice(0,60).forEach((result) => {
      
      const div = document.createElement('div')
      div.classList.add('col','p-1','fireDiv');
      div.textContent = result.pokemon.name;
      elecrOW.appendChild(div)
    })
    
  } catch (error) {
    console.log('Error:', error);
  }
}

const rockrow = document.querySelector('#rockrow');
rockType = async () => {
  try {
    const url = await fetch(`https://pokeapi.co/api/v2/type/rock`);

    const data = await url.json()

    data.pokemon.slice(0,60).forEach((result) => {
      
      const div = document.createElement('div')
      div.classList.add('col','p-1','fireDiv');
      div.textContent = result.pokemon.name;
      rockrow.appendChild(div);
    })
    
  } catch (error) {
    console.log('Error:', error);
  }
}

electricType()
waterType()
firetype()
rockType()
