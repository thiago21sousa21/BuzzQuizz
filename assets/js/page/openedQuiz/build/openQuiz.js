
export const CreateImgOpenQuizImage = () =>{
    const app = document.querySelector('.app');
    const image = document.createElement('img');
    app.appendChild(image)
}

export const createOpenQuizPage = ()=>{
    //futuramente criar uma função que crie o molde da página, recebendo o nome do pai e das classes a serem inseridas
    const app = document.querySelector('.app');

    const OpenedQuiz = document.createElement('div');
    OpenedQuiz.classList.add('OpenedQuizPage');
    OpenedQuiz.classList.add('page');
    OpenedQuiz.classList.add('flex-column-c');

    app.appendChild(OpenedQuiz);

    CreateImgOpenQuizImage();
}

