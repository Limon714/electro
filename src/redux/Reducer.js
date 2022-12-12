import { ADD_TO_CART, Remove_From_CART, Empty_CART } from "./Constant"

export const cartData = (data = [], action) => {
   switch(action.type){
    case  ADD_TO_CART:
        console.warn("Reducer is calling", action);
        return [action.data, ...data];
    case  Remove_From_CART:
        console.warn("Remove is working", action);
        data.length = data.length ? data.length - 1 : [];
        return [...data];
    case  Empty_CART:
        console.warn("Empty is working", action);
        data = [];
        return [...data];

        default:
            return data;
   }
}