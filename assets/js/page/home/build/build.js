import { page } from "../../index.js";


export const createHome = ()=>{
    //futuramente criar uma função que crie qualquer um molde para qualquer página
    const app = document.querySelector('.app');

    const home = document.createElement('div');
    home.classList.add('home');
    home.classList.add('page');
    home.classList.add('flex-column-c');

    app.appendChild(home);
}

export const createThereIsNoQuiz = ()=>{
    const home = document.querySelector(".home");

    if (!home) {
        console.error("Container element not found!");
        return;
    }

    home.innerHTML=`
            <div id="thereIsNoQuiz" class="flex-column-c containerInPage">
                <p>Você não criou nenhum <br> quizz ainda :(</p>
                <div id="createQuizBottom" class="flex-column-cc">Criar Quizz</div>
            </div>
        `;

}

export const createQuiz = (dad, data) =>{
    const container = document.querySelector(dad);
    for (let i = 0; i < data.length ; i++) {
        const newQuiz = document.createElement("div");
        newQuiz.classList.add("quiz");
        newQuiz.style.backgroundImage = `url(${data[i].image})`;

        const titleQuiz = document.createElement('h3');
        titleQuiz.innerText = `${data[i].title}`;
        newQuiz.appendChild(titleQuiz)

        newQuiz.id = data[i].id;

        container.appendChild(newQuiz);
        
        newQuiz.addEventListener("click", ()=>{
           const getHome = document.querySelector('.home');
           getHome.classList.add('displayNone');
           page.openedQuiz.execute.executeOpenQuizPage();           
        })
    }
}

export const insertTitleQuiz = ()=>{

}

export const createQuizLoop = (dad, data)=>{
    createQuiz(dad, data);
}

export const createContainerQuiz = (title, className)=>{
    const home = document.querySelector(".home");

    if (!home) {
        console.error("Container element not found!");
        return;
    }

    const containerInPage = document.createElement("div");
    containerInPage.classList.add("containerInPage");
    containerInPage.classList.add(className);

    const h3 = document.createElement('h3')
    h3.textContent = title;

    containerInPage.appendChild(h3);       
    
    home.appendChild(containerInPage);
}

