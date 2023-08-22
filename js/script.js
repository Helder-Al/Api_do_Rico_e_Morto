//
//function fetchprodutos() {
//    return fetch('json/produtos.json')
//      .then(response => {
//        if (!response.ok) {
//          throw new Error(`Erro na requisição: ${response.status}`);
//        }
//        return response.json();
//      });
//  }
//
//  function renderprodutos(produtos) {
//    const produtoListElement = document.getElementById('produtos');
//  
//    produtos.forEach(produto => {
//
//      const produtoElement = document.createElement('div');
//      produtoElement.className = 'produto';
//
//      produtoElement.innerHTML = `
//      <h2>${produto.nome}</h2>
//      <img src="${produto.url_imagem}" alt="${produto.name}" width="350px" height="350px"/>
//        
//      
//        
//        <p>${produto.descricao}</p>
//        <span>Preço: $${produto.preco}</span>
//        <p>${produto.fornecedor}</p>
//      `;
//
//      produtoListElement.appendChild(produtoElement);
//    });
//  }
//  
//  document.addEventListener('DOMContentLoaded', () => {
//    fetchprodutos()
//      .then(produtos => {
//        renderprodutos(produtos);
//      })
//      .catch(error => {
//        console.error('Ocorreu um erro:', error);
//      });
//  });
//

  