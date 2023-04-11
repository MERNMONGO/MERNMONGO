import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className ="text-center"> 
      <h1>Welcome to 's Portfolio</h1>
      <p>
         is a software developer specializing in Web Development.
      </p>
      <br></br>
      <p>
        JavaScript and React expert.
      </p>
    
      <br />
      <br />
     
        <Link to="https://www.linkedin.com/" >
         
            <img
              src={
                'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681009128/Portfolio/icons8-linkedin-48_b6becc.png'
              }
              alt="Loading Linkedin"
            ></img>
            LinkedIn
          
        </Link>
        <Link to="https://github.com/" >
          
            <img
              src={
                'https://res.cloudinary.com/ddl0mgnds/image/upload/v1681008367/Portfolio/icons8-github-48_mh4i7k.png'
              }
              alt="Loading Git"
            ></img>
            GitHub
          
        </Link>
    
       
        Resume
      
    </div>
  );
}
