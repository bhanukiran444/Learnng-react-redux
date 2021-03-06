import { ADD_ARTICLE } from '../constants/action-types'

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

export const foundBadWord = (payload) => {
    return {
        type:'FOUND_BAD_WORD',
        payload
    }
}

export function getData() {
    return ({
        type:'DATA_REQUESTED'
    })
}
