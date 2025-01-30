const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-button");
const fetch_data_character = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const name_character = document.getElementById("pokemon-name");
const id_character = document.getElementById("pokemon-id");
const weight_character = document.getElementById("weight");
const height_character = document.getElementById("height");
const types_character = document.getElementById("types");
const hp_character = document.getElementById("hp");
const attack_character = document.getElementById("attack");
const defense_character = document.getElementById("defense");
const special_attack_character = document.getElementById("special-attack");
const special_defense_character = document.getElementById("special-defense");
const speed_character = document.getElementById("speed");
const fetchData  = async (searchValue) => {
    try{
        const response = await fetch(`${fetch_data_character}/${searchValue.toLowerCase()}`);
        const data_character = await response.json();
        displayCharacter(data_character)
    }catch(err){
        console.log(err);
    }
}
const displayCharacter =  async  (data_character) => {
    name_character.textContent = data_character.name.toUpperCase();
    id_character.textContent = `#${data_character.id}`;
    weight_character.textContent = `${data_character.weight}`;
    height_character.textContent = `${data_character.height}`;
    hp_character.textContent = data_character.stats.find(stat => stat.stat.name === 'hp').base_stat;
    attack_character.textContent = data_character.stats.find(stat => stat.stat.name === 'attack').base_stat;
    defense_character.textContent = data_character.stats.find(stat => stat.stat.name === 'defense').base_stat;
    special_attack_character.textContent = data_character.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
    special_defense_character.textContent = data_character.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
    speed_character.textContent = data_character.stats.find(stat => stat.stat.name === 'speed').base_stat;
    types_character.textContent = data_character.types.map(type => type.type.name).join(', ');
}


search_button.addEventListener("click", () => {
    const searchValue = search_input.value.trim();
    if (searchValue) {
        fetchData(searchValue);
    } else {
        alert("Please enter a Pokémon name or ID");
    }
});