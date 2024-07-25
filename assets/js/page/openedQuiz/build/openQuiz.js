


export const CreateImgOpenQuizImage = (url) =>{
   const OpenedQuizPage = document.querySelector(".OpenedQuizPage");
   const img = document.createElement("img");
   img.classList.add("mainImageQuiz");
   img.src = url;
   OpenedQuizPage.appendChild(img);

}

export const createOpenQuizPage = ()=>{
    //futuramente criar uma função que crie o molde da página, recebendo o nome do pai e das classes a serem inseridas
    const app = document.querySelector('.app');

    const OpenedQuiz = document.createElement('div');
    OpenedQuiz.classList.add('OpenedQuizPage');
    OpenedQuiz.classList.add('page');
    OpenedQuiz.classList.add('flex-column-c');

    app.appendChild(OpenedQuiz);

    CreateImgOpenQuizImage("https://http2.mlstatic.com/D_NQ_NP_631697-MLU70103683159_062023-O.webp");
}

