interface Paises {
  flags: Flags;
  name: Name;
  capital: string;
}

interface Flags {
  alt: string;
  png: string;
}

interface Name {
  common: string;
}

const listaPaises: HTMLElement = <HTMLElement>(
  document.getElementById("listaPaises")
);

const buscarPaises = async (): Promise<any> => {
  const respuesta = await fetch("https://restcountries.com/v3.1/all");
  console.log(respuesta);
  const datos = await respuesta.json();
  console.log(datos);

  let lista = "";
  datos.forEach((pais: Paises) => {
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
};

buscarPaises();
