import { PRODUCT_LIST } from "./Constant";
export const AddtoCart = () =>{
    let data = "Hello";
    console.warn("Action is calling", data);
    return {
        type : PRODUCT_LIST,
        data 
    }
}