// src/TestESLint.jsx
import { useEffect, useState } from 'react';
import reactLogo from '@/assets/react.svg';

export default function TestESLint() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <img src="image.jpg" />
    </div>
  );
}
