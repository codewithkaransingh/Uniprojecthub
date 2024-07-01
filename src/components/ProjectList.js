import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments, FaShare, FaUser } from "react-icons/fa";
import './ProjectList.css';
//const [color,setColor]=useState();
import { AiFillLike } from "react-icons/ai";


const ProjectList = () => {
  const[githubId,setGithubId] = useState(null);
  const [like,setLike]=useState(false)
  const [names,setNames] = useState([
    { id: 1, name: 'Karan',like:false, image: 'https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Akshat', image: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Priyansh', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D' },
    { id: 4, name: 'Harsh ', image: 'https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D' },
    { id: 5, name: 'Abhijeet', image: 'https://images.unsplash.com/photo-1597092430872-09a3f4338c60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 6, name: 'Yashi', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 7, name: 'Lakashya', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 8, name: 'Akashita', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 9, name: 'Chetna', image: 'https://plus.unsplash.com/premium_photo-1681487857509-abb58345e594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk3fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 10, name: 'Abhijeet', image: 'https://images.unsplash.com/photo-1524657049226-51f8180e28b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 11, name: 'Deepak', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
    { id: 12, name: 'Karan', image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww' },
  ])
  
  const fetchGithubId = async()=>{
    const res = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await res.json();
    console.log(json);
    setGithubId(json)
  }
  useEffect(()=>{
   fetchGithubId()
  })

  return (
  <div className='main'>
    <div className={ProjectList.scroll}>
      {names.map((name) => (
        
        <div key={name.id} className={ProjectList.name}>
          <div className='dp'>
          <FaUser/> 
          </div>
          <a href="#">
            <h3>{name.name}</h3>
          </a>
          <img src={name.image} alt="" />
          <div className='icons'>

            {like?<AiFillLike  onClick={()=>setLike(!like)}/>:<AiOutlineLike onClick={()=>setLike(!like)}/>}
         
          <FaRegComments />

          <FaShare />
          </div>
          

          
        </div>
      ))}

    </div>
    <div className='m-20px'>
      <div id='box2'>
      <h2>Recomendation</h2>
      <div className='list'>
        <ul>
       <li> <h2>Blockchain</h2>
       </li>
        <p className='desc'>The Sustainable Urban Farming . </p>
        <a href='https://www.github.com'>read more...</a>
        </ul>
      </div>
      <div className='list'>
        <ul>
       <li> <h2>AI & Ml</h2>
       </li>
        <p className='desc'>The Sustainable Urban Farming Initiative aims to address food. </p>
        <a href='https://www.github.com'>read more...</a>
        
        </ul>
      </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectList;