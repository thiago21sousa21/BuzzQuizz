

const createThereIsNoQuiz = ()=>{
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

const createQuiz = (dad)=>{
    const container = document.querySelector(dad);

    if (!container) {
        console.error("Container element not found!");
        return;
    }

    for (let index = 0; index < 1; index++) {
        const newQuiz = document.createElement("div");
        newQuiz.classList.add("quiz");

        const color = `#${index}${index}${index}000`;
           
        if (typeof newQuiz.style.backgroundColor === 'string') {
            newQuiz.style.backgroundColor = color;
        } else {
            console.error("backgroundColor is not a string property");
        }
        container.appendChild(newQuiz);
    }
}

const createContainerQuiz = (title, className)=>{
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

createThereIsNoQuiz();

createContainerQuiz("Seus quizes","yourQuizes");
createContainerQuiz("Todos os quizes", "allQuizes");

createQuiz(".yourQuizes");
createQuiz(".allQuizes");