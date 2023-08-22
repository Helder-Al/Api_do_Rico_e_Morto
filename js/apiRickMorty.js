// Função para fazer a requisição dos personagens da API
function fetchpersonagem() {
  const endpointURL = 'https://rickandmortyapi.com/api/character';

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

    personagemElement.innerHTML = `
    <h2>${personagem.name}</h2>
    <img src="${personagem.image}" alt="${personagem.name}" width="350px" height="350px"/>
    `;

    personagemListElement.appendChild(personagemElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchpersonagem()
    .then(data => {
      renderpersonagem(data);
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
});

