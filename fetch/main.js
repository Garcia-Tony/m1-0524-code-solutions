"use strict";
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = (await response.json());
        console.log(users);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
fetchUser();
async function fetchPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const poke = (await response.json());
        console.log(poke);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
fetchPokemon();
