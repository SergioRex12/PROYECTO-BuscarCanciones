import { buscarApi } from "./api.js";

const artistaLabel = document.querySelector('#artista');
const cancionLabel = document.querySelector('#cancion');



export function verificarForm(e) {
    e.preventDefault();

    if (artistaLabel.value === "" || cancionLabel.value === "") return console.log("Escribe algo...");  

    buscarApi(artistaLabel.value,cancionLabel.value);
}