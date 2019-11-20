import {createStore} from 'redux';
const initialTableArray = { tableArray:[], };

const reducer = (state = initialTableArray.tableArray, action) => {
    var stateCopy = Object.assign({},state);
    switch(action.type){
        case 'Add':
            let newTableArray = action.tableArray;
            return newTableArray;
        default: 
            return state;              
    }
};

export  const  store = createStore(reducer);
    