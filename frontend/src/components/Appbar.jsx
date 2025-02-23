import React from 'react'
import Search from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { cartQuantity} from '../recoil/cartRecoil';
import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { currentUserState, isFetchingState, errorState } from '../recoil/userRecoil';
const Appbar = () => {
  const resetCurrentUser = useResetRecoilState(currentUserState);
  const resetIsFetching = useResetRecoilState(isFetchingState);
  const resetError = useResetRecoilState(errorState);
  const quantity = useRecoilValue(cartQuantity);
  const user = useRecoilValue(currentUserState);
  const handleLogout = () => {
    // Clear all relevant states
    resetCurrentUser(); // Resets currentUserState atom
    resetIsFetching();  // Resets isFetchingState atom
    resetError();       // Resets errorState atom

    // Optionally clear other relevant data, like cookies or session storage
    localStorage.removeItem('token'); // Example: clear authentication token
    sessionStorage.clear(); // Clear any other session data if needed
    navigate('/login')
  };
  return (
    <div className='flex justify-between px-7 py-4 shadow-lg '>
        <div className='flex space-x-4'>
            <div>LNG</div>
            <div className='border border-slate-300 mb-2'>
                <input type='text' placeholder='Search'></input>
                <Search style={{color:"gray", fontSize:20}}></Search>
            </div> 
            
        </div>    
        <div className='flex text-2xl font-extrabold'>
          <Link to="/">
              <div className='text-center'> Seller</div>
          </Link>    
              {/* <div> <LibraryBooksIcon/></div> */}
        </div>
        <div className='flex space-x-4'>
        {user?(<>
          <span className="text-white font-medium">{user.username}</span> 
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-1.5 text-center"
          >
            Logout
          </button>
          </>
          ):(
          <>
          <Link to='register'>
              <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center ">Register</button></div>
              </Link>
              <Link to='login'>
              <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center ">Signin</button></div>
              </Link>
              <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <div><ShoppingCartOutlinedIcon/></div>
              </Badge>
              </Link>
         </>
        )}
        </div>
    </div>
  )
}

export default Appbar;