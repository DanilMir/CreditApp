import React, {useState} from 'react';

export const Counter = () => {
  // static displayName = Counter.name;
    const [currentCount, incrementCounter] = useState(0);
  
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>

        <button className="btn btn-primary" onClick={() => {
            incrementCounter(currentCount + 1)
        }}>Increment</button>
      </div>
    );
}
