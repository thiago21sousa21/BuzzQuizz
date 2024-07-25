import {global} from "./global/index.js"
import {page} from "./page/index.js"

(()=>{
    global.execute.executeGlobal();
    //page.home.execute.executeHome();
    page.openedQuiz.execute.executeOpenQuizPage();
})();