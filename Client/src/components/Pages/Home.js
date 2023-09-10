  //import '..Components/Boardstyle.css'
  import Board from '../Board';
  import  '../App.css'
  import '../Components/Buttonstyle.css';
  function clickMe(){
    alert ('you clicked me');
  }
  export default function Home() {
    return (
      <div className="container">
        <div className="board-container">
          <Board />
        </div>
        <div className='button'>
          <div className='right'>
          <h1 className='Q'>Would you like to make an appointment?</h1>
          <button onClick={clickMe}>
            Make an appointment
          </button>
          </div>
        </div>
      </div>
      )
  }