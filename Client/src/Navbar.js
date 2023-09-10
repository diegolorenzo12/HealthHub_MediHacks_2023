import './navbarstyles.css'
import { Link , useLocation } from 'react-router-dom';

export default function Navbar(){
    const location = useLocation();
    return(
        <nav>
            <h1 id="h1">HealthHub</h1>
            <div>
                <ul id="navbar">
                    {
                        (()=>{
                            if(location.pathname === "/"){
                                return (<li><Link className="active"to="/">Home</Link></li>);
                            }
                            return (<li><Link to="/">Home</Link></li>);    
                        })()
                        
                    }
                     {
                        (()=>{
                            if(location.pathname === "/calendar"){
                                return (<li><Link className="active"to="/calendar">Calendar</Link></li>);
                            }
                            return (<li><Link to="/calendar">Calendar</Link></li>);    
                        })()
                        
                    }
                    
                </ul>
            </div>
            <Link id="foto"to="/Account">
            <svg xmlns="http://www.w3.org/2000/svg"
             width="48" 
             height="48"
              id="account">
                <path d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"></path>
                <path fill="none" d="M0 0h48v48H0z">
                    </path>
                    </svg>
                </Link>
        </nav>
    );
}
