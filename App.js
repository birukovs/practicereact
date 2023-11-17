import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')
  
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
