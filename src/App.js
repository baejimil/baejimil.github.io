import {useState} from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock : {
    name : "Rock",
    img : "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
  },
  scissors : {
    name : "Scissors",
    img : "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT7zluUaMxNynokVgHhNnZ8kkfOXP60e5ZBiB9XtY8Nm18Cjs9_ZsLJd-ATis74Tjll23LEb9WVopmeXgTeveM"
  },
  paper : {
    name : "Paper",
    img : "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {

  const [userSelect, setUserSelect] = useState(null)

  const play=(userChoice)=> {
    setUserSelect(choice[userChoice])
  };

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        {/* <Box title='Computer' /> */}
      </div>

      <div className='main'>
        <button onClick={ () => play("scissors")}>가위</button>
        <button onClick={ () => play("rock")}>바위</button>
        <button onClick={ () => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
