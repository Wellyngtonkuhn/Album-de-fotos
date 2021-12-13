# Album de fotos
 
 Projeto desenvolvido com React juntamente com a API do Pexels. https://www.pexels.com/pt-br/

* O componente Home contém todas as requisições para a API.
    Para este modelo fiz apenas uma requisição com a palavra chave “wedding”. Através desta requisição recebi 30 itens que estão listados de forma responsiva.

* Para o componente Destaque foi gerado um item aleatório a partir da requisição anterior. Por meio dele temos como destaque uma foto, o nome do fotógrafo e um botão com um link que redireciona para o perfil do mesmo no Pexels.

* Para fazer a paginação utilizei dois ícones de flechas e através deles uma função para acrescentar mais um número e outra função para diminuir um número e o mesmo nunca será menor que um. Esses dados estão armazenados em um useState e o useEffetc fica de olho nele para saber quando deve atualizar a requisição para a página solicitada.


