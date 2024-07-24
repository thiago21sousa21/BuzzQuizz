

export const createHeader = ()=>{

    const app = document.querySelector('.app');

    const header = document.createElement('header');
    header.classList.add('header');
    
    const h1 = document.createElement('h1');
    h1.innerText = `BuzzQuizz`;

    header.appendChild(h1);

    app.appendChild(header);
}

