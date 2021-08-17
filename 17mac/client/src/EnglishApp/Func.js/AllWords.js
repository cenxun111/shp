import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteW, userWords } from "../../redux-toolkit/wordAction";
import { Link } from "react-router-dom"
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const AllWords = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const username = user.username;
  const { words } = useSelector((state) => state);
  // const id = word._id;
  useEffect(() => {
    setUser(login.userInfo);
  });
  useEffect(() => {
    //   userWords({username},dispatch)
    dispatch(userWords({ username }));
  }, [username]);
  
  // words.userWords.map((w)=>(
  //    id = w._id
  //   ))
  
  // console.log(words.userWords._id);
  // const handleDelete = () => {
  //   dispatch(deleteW({ words }));
  // };

  return (
    <div className="col-span-3  sm:col-span-2 md:col-span-3">
      {words.userWords.map((word) => (
        <div className="flex-col p-4 mt-4 text-4xl text-center bg-gray-200 rounded-3xl">
          <div key={word._id}>
            <div className="flex justify-center">
              <h1 className="pr-10 text-purple-700">{word.english}</h1>
              <h1 className="text-green-500">{word.chinese}</h1>
              <div className="pl-10 pb-2 text-blue-500 ">
                {word.mark ? <StarIcon fontSize="large"/>:<StarBorderIcon fontSize="large"/>}
              </div>
              <button className="pl-16 text-blue-500 text-2xl" >
               <Link to ={`/user_words/${word._id}`}>EDIT</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWords;
