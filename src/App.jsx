import logo from './logo.svg';
import './App.css';
import React from 'react';

let data=[
  {
    title:"Money Heist" ,
    imgURL:"https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326",
    description:"Lorem ipsum dolor s cupiditate. Porro sequi dolor ducimus rue eos velit, nemo, ut officia similique dolorum est nostrum non aliquam sequi eligendi reprehenderit, modi dolorum iusto saepe omnis excepturi consectetur, harum veniam quam labore vel tempora sed minima eveniet deleniti!"
  },
{
  title:"The Sea Beast",
  imgURL:"https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcvhHKwcZTj573-O4F1dVUoBqMzeZeipRFjdj1-Zaq4XHXRjUt5sRRR2N2I8MCU1QKuH0zO9gpOQKZm6OHfXBPR3jcHo5Qq3o84LWiBvo_ShROhwnt3bU03WTH5fdgAKDBCT.jpg?r=2c4",
  description:"Lorem ipsum dolor s cupiditate. Porro sequi dolor ducimus reiciendis abo consequuntur. Asperiores voluptatibus itaque nam eum impedit qui voluptates, modi dolorum iusto saepe omnis excepturi consectetur, incidunt sequi et! Sit harum veniam quam labore vel tempora sed minima eveniet deleniti"
},{
  title:"Wish Dragon",
  imgURL:"https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABevcCxnF415ASm6tsQDgqPIzvyFOiqGRtCzMNCr8kP7l9MbBlktMqNYxFLGuunhrB4wy383CgM7-V71_kBF_5JgEToHstJMnNx3zCWf7JAjN_VQ_fZyeyYRcYpZbNYo429d5.jpg?r=d98",
  description:"Lorem ipsum dolor s cupiditate. Porro sequi dolor ducimus reiciendis abo consequuntur. Asperiores voluptatibus itaque nam eum impedit qui voluptates, modi dolorum iusto saepe omnis excepturi consectetur, incidunt sequi et! Sit harum veniam quam labore vel tempora sed minima eveniet"
},
]

const App=()=> {
    /*let temparray=[<h1>mango</h1>,<h1>orange</h1>]
    let newtempArray=data.map((a)=>{
      return <>
                <h1>{a.title}</h1>
                <img src={a.imgURL} alt={a.title}/>
                <p>{a.description}</p>
            </>
    })
    console.log(newtempArray);*/
    return <section className="movie-content"> 
          {data.map((a)=>{
            return <movie />;
          })}
       
         </section>
};

const Movie=(props)=>{
  console.log(props);
  return (<>
           <img src={props.imgURL} alt="netflix image"></img>
           <h1>{props.title}</h1>
           <p>{props.description}</p>
         </>
  )
}





export default App;