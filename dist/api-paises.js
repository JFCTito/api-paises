"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const listaPaises = (document.getElementById("listaPaises"));
const buscarPaises = () => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield fetch("https://restcountries.com/v3.1/all");
    console.log(respuesta);
    const datos = yield respuesta.json();
    console.log(datos);
    let lista = "";
    datos.forEach((pais) => {
        lista =
            lista +
                `
        <div class='pais'>
            <img class="bandera" src="${pais.flags.png}" alt="${pais.flags.alt}">
            <div>
            <h2 class="titulo">${pais.name.common}</h2>
            <p>Capital: ${pais.capital}</p>
            </div>
        </div>
        `;
    });
    listaPaises.innerHTML = lista;
});
buscarPaises();
