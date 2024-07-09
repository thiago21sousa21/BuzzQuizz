import { buildHome } from "./index.js";

export const  getQuizzes  = ()=>{
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v7/buzzquizz/quizzes")
    .then((e)=>{
        const data = e.data;
        console.log(data);
        buildHome.createQuiz('.allQuizes', data)
        return e.data;
    }).catch((e)=>{
        console.log(e)
    })
}