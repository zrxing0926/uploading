import { createStore } from "redux"

let reducer = (state, action) => {
    if (action.type === 'SHOPLIST') {
        state.shoplist = action.shoplist
    }
    if(action.type === 'ADDITEM'){
        // console.log('action.addItem',action.addItem)
        action.addItem.num = 1;
        action.addItem.checked = true;

        state.addItem.push(action.addItem)




        // let index = state.addItem.findIndex(item => item.id == action.shoplist.id)
        // if(index == -1){
        //     // action.shoplist.num = 1;
        //     // action.shoplist.checked = true;
        //     state.addItem.push(action.shoplist)
        // }else{
        //     state.addItem[index].num++
        // }
    }
    return { ...state } 
}

let initState = {
    shoplist: [],
    addItem:[]
}


let store = createStore(reducer, initState)

export default store