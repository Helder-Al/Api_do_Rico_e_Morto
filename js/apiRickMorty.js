// Função para fazer a requisição dos personagens da API com base em um nome de busca, status de vida e espécie
function fetchpersonagem(name, status, species) {
  let endpointURL = 'https://rickandmortyapi.com/api/character/?';

  if (name) {
    endpointURL += `name=${name}&`;
  }

  if (status) {
    endpointURL += `status=${status}&`;
  }

  if (species) {
    endpointURL += `species=${species}&`;
  }

  return fetch(endpointURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
       
      }
      return response.json(); // Converte a resposta para JSON
    });
}

// Função para renderizar os personagens na página
function renderpersonagem(personagem) {
  const personagemListElement = document.getElementById('personagem');

  personagem.results.forEach(personagem => {
    const personagemElement = document.createElement('div');
    personagemElement.className = 'personagem';

   
    personagemElement.dataset.id = personagem.id;
    personagemElement.dataset.name = personagem.name;
    personagemElement.dataset.status = personagem.status;
    personagemElement.dataset.species = personagem.species;
    personagemElement.dataset.gender = personagem.gender;
    personagemElement.dataset.episode = personagem.episode[0]; 

    personagemElement.innerHTML = `
      <h2>${personagem.name}</h2>
      <img src="${personagem.image}" alt="${personagem.name}" width="350px" height="350px"/>
      <h1>${personagem.status}</h1>
    `;

    personagemListElement.appendChild(personagemElement);
  });
}




// Função para buscar personagens com base nos filtros
  function searchCharacters() {
    const searchInput = document.getElementById('search-input').value.trim();
    const statusInput = document.getElementById('status-input').value;
    const speciesInput = document.getElementById('species-input').value;

    // Limpa a lista de personagens
    const personagemListElement = document.getElementById('personagem');
    personagemListElement.innerHTML = '';

    fetchpersonagem(searchInput, statusInput, speciesInput)
      .then(data => {
        renderpersonagem(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const statusInput = document.getElementById('status-input');
  const speciesInput = document.getElementById('species-input');

  searchInput.addEventListener('change', searchCharacters);
  statusInput.addEventListener('change', searchCharacters);
  speciesInput.addEventListener('change', searchCharacters);

  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', event => {
    event.preventDefault(); // Evita o envio padrão do formulário
    searchCharacters(); // Realiza a busca
  });

  searchCharacters();
});



const button = document.getElementById('animated-button');

button.addEventListener('mouseenter', () => {
  button.style.animationPlayState = 'running'; // Inicie a animação quando o mouse entrar
});

button.addEventListener('mouseleave', () => {
  button.style.animationPlayState = 'paused'; // Pausar a animação quando o mouse sair
});



