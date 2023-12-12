import { useRef, useState } from 'react';
import './App.css'
import logo from "./assests/logo.png";
import axios from 'axios';
import Bento from './Bento';

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try{
      if(username === ""){
        throw new Error("Username cannot be empty");
      }
      const readLeetCode = await axios.post('http://localhost:3000',{
        username: username
      });
      const response = readLeetCode.data;
      if(readLeetCode.status === 200){
        setState(!state);
        setData(response);
      }
      console.log(response);

    }
    catch(err){
      setUsername("Enter a valid username");
    }
  }

  return (
  <div>
   <div className='bg-primary min-h-screen'>
      <nav className='py-2 relative'>
        <div className='w-full h-10 p-10'>
        <img src={logo} alt="logo" width={50} height={50} />
        </div>
      </nav>
      <div className="flex flex-row p-10 mt-10 flex-1 justify-between gap-3 max-lg:flex-col ">
        <div className='flex flex-col mt-10 gap-2'>
            <h2 className="font-oswald text-5xl text-secondary">Lets wrap your leetcode</h2>
            <p className='text-2xl font-sans text-teal-50'>2023<span className='text-sm ml-1'>edition</span></p>
            <form className='flex gap-2' onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full px-4 bg-tertiary border border-gray-600   focus:outline-none rounded-lg focus:bg-black focus:text-tertiary "
              placeholder="Enter your leetcode username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
           <button className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-lg"></span>
            <span className="relative text-black group-hover:text-white ">Let's Go</span>
            </button>
            </form>
        </div>
        {state && state === true? <div className='flex flex-col mt-10 gap-2'>
          <Bento dataSol={data}/>
        </div> : <div>  
        </div>}  
      </div>
      <div className="bg-blue-500 text-white p-4 mx-10 rounded-md flex-wrap flex max-md:relative max-md:bottom-2">
        <div className='flex justify-center gap-2'>
          <span className="text-xl">Thank you for visiting! ❤️</span> 
            <span className=''>If you want to check out the code, it's on <a href="" className="underline">GitHub</a></span>
            <span className=''>Connect with me on <a href="https://www.linkedin.com/in/shashmit-kumar-23b75620a/" className="underline">LinkedIn</a></span>
            </div>
        </div>

    </div>
  </div> 
  )
}

export default App
