import logo from './logo.svg';
import './App.css';
import React, { useState, Suspense } from 'react';
import LoaderComponent from './LoaderComponent';
const TodoComponent = React.lazy(() => import('./Todo'));
const LComponent = LoaderComponent(() => import('./DefaultComponent'));

function App() {
  console.log('inside app');
  const [content, setContent] = useState();
  const onLoad = async () => {
    setContent((await import('./name')).default);
  };


  return (
    <div className="App">
      <button onClick={onLoad}>Load</button>
      {JSON.stringify(content)}
      <Suspense fallback={<div>Sorry</div>} >
        <TodoComponent/>
      </Suspense>
     {content && <LComponent value="1"/>}
    </div>
  );
}

export default App;
