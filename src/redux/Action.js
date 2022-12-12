//  What is Action ?
    // plain JavaScript Functions
    // Get Data from React JS
    // Send Data to Reducer after Process 
    // Must have type key in Return statement 
    // Much Sync type with Reducer
    import { ADD_TO_CART, Remove_From_CART, Empty_CART } from "./Constant";
    export const AddtoCart = (data) =>{
        console.warn("Action is calling", data);
        return {
            type : ADD_TO_CART,
            data 
        }
    }

  
    export const RemoveFrom_CART = (data) =>{
        console.warn("Action is calling Remove_From_CART", data);
        return {
            type : Remove_From_CART,
            data 
        }
    }

    export const EmptyCART = () =>{
        console.warn("Action is calling Empty_From_CART");
        return {
            type : Empty_CART,
        }
    }

