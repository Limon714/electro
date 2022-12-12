import {PRODUCT_LIST} from "./Constant"

export const cartData = (data = [], action) => {
   switch(action.type){
    case  PRODUCT_LIST:
        console.warn("Product List is calling", action);
        return [action.data];

        default:
            return [];
   }
}