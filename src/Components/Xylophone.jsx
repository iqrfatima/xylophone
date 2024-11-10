import React, { useState } from 'react'
import music1 from '../assets/music1.mp3'
import music2 from '../assets/music2.mp3'
import music3 from '../assets/music3.mp3'
import music4 from '../assets/music4.mp3'
import music5 from '../assets/music5.mp3'
import music6 from '../assets/music6.mp3'
import music7 from '../assets/music7.mp3'
import music8 from '../assets/music8.mp3'



const musics = [
    music1,
    music2,
    music3,
    music4,
    music5,
    music6,
    music7,
    music8,
    
];
const Xylophone = () => {
    // const [color,setColor] = useState();
    
    const Bars =[{
      id:1,
      music:musics[0],
      color:"#dc2626"
    },
    {
      id:2,
     music:musics[1],
     color:"#ea580c"

   },
    {
      id:3,
     music:musics[2],
     color:'#fbbf24'

   },
   {
    id:4,
    music:musics[3],
    color:"#84cc16"

   },
   {
    id:5,
    music:musics[4],
    color:"#22d3ee"

   },
   {
    id:6,
   music:musics[5],
   color:"#0ea5e9"

   },
   {
    id:7,
    music:musics[6],
    color:"#1e3a8a"
    
   },
   {
    id:8,
    music:musics[7],
    color:"#9333ea"
    
   }
  ];

  const playSound = (musics) => {
    const audio = new Audio(musics);
    audio.play();
  };
  return (
        <div className='flex items-center justify-center'>
           <div className='flex items-center gap-6 bg-slate-200 shadow-2xl p-40 m-20'>
                {Bars.map((menu) => (
                  <button key={menu.id}
                          onClick={() => playSound(menu.music)}
                          style={{backgroundColor:menu.color }}
                           className="w-12 h-48 rounded-lg shadow-md hover:opacity-80 drop-shadow-2xl"
                         >
                    
                  </button>
                )
              )}
          </div>
        <button></button>
        
    </div>
  )
}
export default Xylophone