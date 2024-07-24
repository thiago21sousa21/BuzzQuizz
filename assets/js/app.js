import {global} from "./global/index.js"
import {page} from "./page/index.js"

(()=>{
    global.execute.executeGlobal();
    page.openedQuiz.execute.executeOpenQuizPage();
})();