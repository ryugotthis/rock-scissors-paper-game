import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 박스 2개(타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 됨
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀜(이기면 초록, 지면 빨강, 비기면 검정)
const imgs = {
  rock: {
    name: 'Rock',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQEoSHiwcSxQhzvqX36FAiD-b_HqscJ3y0A&s',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://cdn-icons-png.flaticon.com/512/10363/10363577.png',
  },
  paper: {
    name: 'Paper',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8HR42zodSUjyYP42C9SnXPa_gdOHq6HsDw&s',
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, resultMaker] = useState('');
  const play = (userChoice) => {
    setUserSelect(imgs[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(imgs[computerChoice]);
    resultMaker(judgeResult(imgs[userChoice], imgs[computerChoice]));
  };
  const judgeResult = (user, computer) => {
    console.log('user', user);
    console.log('computer', computer);
    user = user.name;
    computer = computer.name;
    if (user === computer) {
      return 'Tie';
    } else {
      if (user === 'Scissors') return computer === 'Paper' ? 'Win' : 'Lose';
      else if (user === 'Rock') return computer === 'Scissors' ? 'Win' : 'Lose';
      else return computer === 'Rock' ? 'Win' : 'Lose';
    }
  };
  const randomChoice = () => {
    let imagesArray = Object.keys(imgs);
    console.log('imagesArray', imagesArray);
    let randomItem = Math.floor(Math.random() * imagesArray.length);
    console.log('randomItem', randomItem);
    console.log('randomItem name', imagesArray[randomItem]);
    let final = imagesArray[randomItem];
    return final;
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="btns">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
