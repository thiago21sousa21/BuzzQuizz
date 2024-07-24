import {home} from "../index.js";

export function executeHome(){

    home.build.createHome();
    home.build.createThereIsNoQuiz();
   
    //buildHome.createContainerQuiz("Seus quizes","yourQuizes");
    home.build.createContainerQuiz("Todos os quizes", "allQuizes");
    //buildHome.createQuiz(".yourQuizes");
    //buildHome.createQuiz(".allQuizes");
    home.api.getQuizzes();

}