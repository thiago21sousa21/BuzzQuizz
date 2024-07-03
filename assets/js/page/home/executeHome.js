import { buildHome } from "./index.js";

export function executeHome(){

    buildHome.createHome();
    buildHome.createThereIsNoQuiz();
    buildHome.createContainerQuiz("Seus quizes","yourQuizes");
    buildHome.createContainerQuiz("Todos os quizes", "allQuizes");
    buildHome.createQuiz(".yourQuizes");
    buildHome.createQuiz(".allQuizes");

}