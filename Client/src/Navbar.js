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
                     {
                        (()=>{
                            if(location.pathname === "/Login"){
                                return (<li><Link className="active"to="/Login">Log in</Link></li>);
                            }
                            return (<li><Link to="/Login">Log in</Link></li>);    
                        })()
                        
                    }
                    
                </ul>
            </div>
            
        </nav>
    );
}
