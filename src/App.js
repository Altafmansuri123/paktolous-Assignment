import { useState } from 'react';
import Content from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

function App() {
  const [result, setResult] = useState([]);
  return (
    <div className='App'>
      <Header result={result} setResult={setResult} />
      <Content result={result} />
      <Footer />
    </div>
  );
}

export default App;
