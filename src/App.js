import { useEffect, useState } from 'react';
import './App.css';
// import Persons from './components/Persons';
// import Button from './components/Button';
// import Counter from './components/Counter';
// import ResetButton from './components/ResetButton';
// import Person from './components/Person';
// import Login from './components/Login';
// import Wrapper from './components/Wrapper';

// const texts = ["btn1", "btn2", "btn3", "btn4"];

function App() {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then(response => response.json())
      .then(json => setTodo(json))
  }, []);

  console.log('App render');
  console.log(todo);


  // const [count, setCount] = useState(0);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // }

  // const resetCount = () => {
  //   setCount(0);
  // }

  return (
    <div className="App">
      {todo && <h1>{todo.title}</h1>}


      {/* <Wrapper color="lightblue">
        <h2>Text inside from the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>

      <Wrapper color="red">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value"/>
      </Wrapper> */}

      {/* <Login /> */}

      {/* <Persons /> */}

      {/* {persons.map((person) => {
        return <Person key={person.id} {...person}/>
      })} */}

      {/* <Counter count={count} />
      {texts.map((text, i) => {
        return <Button onClick={incrementCount} text={text} key={i} />
      })}

      {count > 0 && (
        <ResetButton onClick={resetCount} />
      )} */}

    </div>
  );
}

export default App;
