const initialState = {
    isLoading: false
}
const loaderState = (state = initialState ,action) => {
    switch(action.type){
        case "SHOW_LOADER":
            return {
             ...state, isLoading: true
            }
        case "HIDE_LOADER":
            return {
             ...state, isLoading: false
            }
            default:
                 return state;
    }

}
export default loaderState;

const cartdata = JSON.parse(localStorage.getItem("values")) || [];

const initialData = {
    cart: cartdata
}

const cartState = (state = initialData ,action) => {
    switch(action.type){
        case "CART_DATA":
            return {
             ...state, cart: cartdata
            }
            default:
                 return state;
    }

}
export {cartState};