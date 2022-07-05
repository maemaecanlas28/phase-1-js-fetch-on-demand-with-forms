const init = () => {
    const inputForm = document.querySelector('form'); // selecting the elements form
    inputForm.addEventListener('submit', (event) => { // "submit" is the associated events method for the element form
    event.preventDefault(); // 
    const input = document.querySelector('input#searchByID');

    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
  
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
    });
}

document.addEventListener('DOMContentLoaded', init);