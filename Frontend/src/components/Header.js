import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector((state) => state.user)
const {tasksList,error} = useSelector((state) => state.tasks)


  return (
    <div className='bg-sky-700 text-white' >
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
             <h1 className='font-bold'>I CARE</h1>
             </Link>
             <ul className='flex gap-4'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/'>
                <li>About</li>
                </Link>
                <Link to='/'>
                  {currentUser ? (
                    <img src = {currentUser.profilePicture} 
                    alt='profile' className='h-7 w-7 rounded-full
                    object-cover'/>
                  ):( 
                    <li>Sign In</li>
                  )}
                </Link>
             </ul>
        </div>
    </div>
  )
}