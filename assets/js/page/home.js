export function generateQuiz() {
    const container = document.querySelector(".yourQuizes");

    if (!container) {
        console.error("Container element not found!");
        return;
    }

    for (let index = 0; index < 5; index++) {
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


