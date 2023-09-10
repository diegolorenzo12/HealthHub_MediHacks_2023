  
  import  '../../App.css'
  import '../../components/Boardstyle.css';
  function clickMe(){
    alert ('you clicked me');
  }
  export default function Home() {
    return (
      <>
      <div class="hero-image">
         <div class="hero-text">
       <h1 className='welcome'>Welcome to HealthHub</h1>
        <h3>The platform were you will be able to make all the doctors appoinments you'll need.</h3>
        <a href='/signUp'><button id='button'><h1 id='bt'>Sign Up!</h1></button></a>
        </div>
        </div>
        <div id='home-text'>
          <div id='text'>
            <h1 id='bullets'>APPOINMENT SCHEDULING</h1>
            <h3 id='info'>Easily book medical apointments</h3>
          </div>
          <div id='text'>
            <h1 id='bullets'>APPOINTMENT REMINDER</h1>
            <h3 id='info'>Recieve helpful appoinments notifications </h3>
          </div>
          <div id='text'>
            <h1 id='bullets'>CARE COORDINATION</h1>
            <h3 id='info'>Coordinate your appointments wih multiple doctors</h3>
          </div>
        </div>
        
        
    </>
       
      )
  }