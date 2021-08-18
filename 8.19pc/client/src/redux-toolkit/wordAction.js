
import { createWord,getUserWords,wordError,updateStart,deleteWord,updateSuccess,getSingleWord,deleteSuccess} from './wordSlice'

import { postDataAPI,getDataAPI,deleteDataAPI} from "./fetchData"

export const createNewWord = async (word,dispatch) => {
    dispatch(updateStart())
    try{
        const res = await postDataAPI("createNewWord",word);
        dispatch(createWord({
            word:res.data
        })),
        dispatch(updateSuccess())
    //  dispatch(updateStart())
    } catch (error) {
        dispatch(wordError(error.message))
    }
};

export const userWords =({username}) => async (dispatch) => {
    try{
        const res = await getDataAPI(`user_words/${username}`)
        console.log(username)
        console.log(res)
        dispatch(getUserWords({
            data:res.data
        }));
    } catch (error) {
        dispatch(wordError(error.message))
    }
};

export const userWord = ({id}) =>async(dispatch) =>{
    try{
        const res = await getDataAPI(`words/${id}`)
        console.log(id)
        dispatch(getSingleWord({
            data:res.data
            
        }));
    }catch (error) {
        dispatch(wordError(error.message))
    }
};

export const deleteW = ({id}) =>async(dispatch) =>
{
    try{
        const res = await deleteDataAPI(`user_words/${id}`)
        console.log(id)
        console.log(res)
        dispatch(deleteWord({
            data:res.data
        }));
        dispatch(deleteSuccess())
    }catch (error) {
        dispatch(wordError(error.message))
    }
}