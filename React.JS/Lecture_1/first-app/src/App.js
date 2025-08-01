import React from 'react';
import Person from './components/Person';
import Sam from './components/Sam';

const App = () => {
  return (
    <div>
      <Person name="Neelmani" age={20} favColor="Grey" />
      <Person name="saurab" age={24} favColor="pink" />
      <Person name="manket" age={24} favColor="blue" />
      <Person name="abhinab" age={25} favColor="green" />
    </div>
  );
}

export default App;