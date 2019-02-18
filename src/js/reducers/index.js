import { ADD_ARTICLE } from '../constants/action-types'


const initialState = {
    articles:[],
    error:{},
    remoteArticles: []
}

const rootReducer = (state = initialState, action) => {
    if(action.type === ADD_ARTICLE){
       return Object.assign({}, state, {
           articles:state.articles.concat(action.payload)
       })
    }
    if(action.type === "FOUND_BAD_WORD"){
        return Object.assign({}, state, {
            error:action.payload
    })
    }
    if(action.type === "DATA_LOADED"){
        return Object.assign({}, state, {
            remoteArticles:state.remoteArticles.concat(action.payload)
        })
    }
    return state
}

export default rootReducer