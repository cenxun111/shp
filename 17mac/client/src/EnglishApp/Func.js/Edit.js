import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams } from "react-router-dom"
import { deleteW, userWord } from "../../redux-toolkit/wordAction";
import { useLocation } from "react-router";




const Edit = () => {
    const { words } = useSelector((state) => state);
    const dispatch = useDispatch();
    const {id} = useParams()
    const [word,setWord] = useState([])

    useEffect(()=>{
        setWord(words.userWord)
    })
    console.log({id})
    useEffect(()=>{
        dispatch(userWord({id}))
    },[]);
    const handleDelete = () =>{
       
    dispatch(deleteW({id}))
    }

    return (

        <div className="col-span-3  sm:col-span-2 md:col-span-3">
      
          <div className="flex-col p-4   text-center bg-gray-200 rounded-3xl mt-20">
            {/* <div key={word._id}> */}
              <div className="flex justify-center">
                <h1 className="pr-28 text-purple-700 text-4xl">{word.english}</h1>
                <h1 className="text-green-500 pr-20 text-4xl">{word.chinese}</h1>
                <button className="text-blue-500 text-2xl pr-6" onClick={handleDelete}>delete</button>
                <h1 className="text-blue-500 text-2xl pr-6">update</h1>
                <h1 className="text-blue-500 text-xl mt-4">{word.createdAt}</h1>
                

                {/* <button className="pr-4" >
                 <Link to ={`/user_words/${word._id}`}>delete</Link>
                </button> */}
              </div>
      </div>
      </div>
    )
}

export default Edit
