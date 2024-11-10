const cartReducers = (state = [],action) => {
    if(action.type==='ADD'){
        return [...state,action.payload];
    }else if(action.type==='REMOVE'){
        return state.filter((item)=>item.id !== action.payload.id);
    }else{
        return state
    }
}

export default cartReducers;