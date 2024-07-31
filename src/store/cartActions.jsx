
export const addToCArt = (data)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload: data,
    };
};