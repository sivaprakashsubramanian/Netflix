import React, { useEffect } from 'react'
import { logo } from '../Assets/images/images'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/slice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const selector=useSelector((store)=>store.user.users);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(selector[0]?.email.charAt(0),'slice');
  const handleSignOut=()=>{
    const auth1 = auth;
signOut(auth1).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  // navigate("/");

}).catch((error) => {
  // An error happened.
});

  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,accessToken} = user;
        // console.log(user.email,"ji")
        dispatch(addUser({uid:uid,email:email,accessToken:accessToken}));
        navigate("/browser");
        
        // ...
      } else {
        // User is signed out
        // ...
        console.log("ioi");
        navigate("/");
        dispatch(removeUser())
        
      }
    });
    return ()=>unsubscribe();
  },[])
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between ">
      <img  className="w-44" src={logo} alt='logo'/>
      {selector.length>0 && <div className='flex items-center p-6 gap-2 '>
      <div className='w-10 h-10 bg-violet-500 rounded-3xl flex justify-center items-center'>
        <p className='font-semibold text-white text-xl'>{selector[0]?.email.charAt(0).toUpperCase()}</p>
        
      </div>
      <button onClick={handleSignOut } className='text-white' >Log out</button>
      
      </div> }
    </div>
  )
}

export default Header