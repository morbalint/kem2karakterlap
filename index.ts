import {Karlap} from "./karlap";

Karlap().then(() => {
    console.log("Done")
}).catch(reason => {
    console.error(reason)
})
