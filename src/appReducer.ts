import ACTIONS from './Constants/actions';


let initialState : any = {

    sampleData: []

}

function appReducer(state = initialState, action:any) {
    switch (action.type) {
        case ACTIONS.ADD_DATA:
            return {...state, sampleData: [...action.payload] }

        default:
            return state;
    }
}

export default appReducer;