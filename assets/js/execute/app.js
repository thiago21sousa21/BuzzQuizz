import { executeHome } from "../page/home/index.js";
import { executeGlobal } from "../global/index.js";

(()=>{
    executeGlobal.executeGlobal();
    executeHome.executeHome();
})();