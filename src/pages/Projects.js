import { Link } from 'react-router-dom';

export default function Projects() {

  return (
    <div className="text-center">
     <h1>Project Page</h1>
     <br></br>
      <h2>Auto Grocery Sorter</h2>
      <h3>Full Stack App using MERN</h3>
      <br></br>
    
  
      <p>Home Page of App</p>   
      <img className = "project"src = "https://github.com/MERNMONGO/Store/raw/main/Landing.png "></img>
      <p>Example of Grocery Sorter</p>
      <img className = "project"src = "https://github.com/MERNMONGO/Store/blob/main/DisplayExample.png"></img>
      <Link to = "https://grocer-frontend.onrender.com/"> <p>Try it here!</p></Link>
      
      <Link to = "https://github.com/MERNMONGO/Store"> <p>Contribute towards code</p></Link>
   
      <br></br>

      <h2>API projects </h2>
      <p>This project utilized API</p>
      
    </div>
  );
}
