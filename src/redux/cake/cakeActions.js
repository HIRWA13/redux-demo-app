import { BUY_CAKE } from "./cakeTypes"
// what is an action?
// an action is an object with a type property

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}