import { ADD_ARTICLE } from '../constants/action-types'
import { foundBadWord } from '../actions/index'

const forbiddenWords = ["spam", "money"];
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
            return dispatch(foundBadWord({msg:'bad word found'}));
        }else if( foundWord.length === 0) {
            dispatch(foundBadWord({}));
        }
      }
      return next(action);
    };
  };
}
