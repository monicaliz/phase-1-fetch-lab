// LAB INSTRUCTIONS
// 1. a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/books)
// 2. The returned response should be converted to JSON
// 3. it should call the second function, renderBooks(), passing in the JSON-ified data as the argument.
// note: To check if you have done this correctly, open up the index.html page of this lab; you should see a list of Game Of Thrones titles on your webpage.


 function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // async -- add .then() -- #1
  return fetch('https://anapioficeandfire.com/api/books') 
    .then( (resp) => resp.json() ) //asyn -- chain .then() -- #2
    .then( (data) => { 
      renderBooks(data) 
    }) // #3 call renderBooks()
    

  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
