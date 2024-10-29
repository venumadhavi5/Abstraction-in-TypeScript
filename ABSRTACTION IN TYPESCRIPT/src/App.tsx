
import './App.css';
import AbstractionTS from './components/AbstractionTS';

import Lion from './classes/Lion';
import Tiger from './classes/Tiger';

function App() {
  let lion1 = new Lion();
  lion1.runningSpeed();
  let tiger1 = new Tiger();
 
 

  
  
  
  return (
    <div className="App">
      <AbstractionTS/>
    </div>
  );
}

export default App;
