import Day1 from "./Days1/Day1";
import ErrorPage from "../404/ErrorPage";


export const getComponent=(key)=>{
    switch (key){
        case "day1":
            return Day1;
        default:
            return ErrorPage;
    }
}