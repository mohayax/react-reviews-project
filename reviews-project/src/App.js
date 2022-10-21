import React , { useState} from 'react';
import './index.css';

function App() {
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0);
const [neutral, setNeutral] = useState(0);

const goodHandler = (val) => {
  setGood(val);
}
const badHandler = (val) => {
  setBad(val);
}
const neutralHandler = (val) => {
  setNeutral(val);
}

  return (


    <>
    <section className="container">
        <h1>Reviews</h1>
        <article>

          <div>
            <h2>{good}</h2>
            <button onClick={() => goodHandler(good + 1)}>Good</button>
          </div>
          <div>
            <h2>{bad}</h2>
            <button onClick={() => badHandler(bad + 1)}>Bad</button>
          </div>
          <div>
            <h2>{neutral}</h2>
            <button onClick={() => neutralHandler(neutral + 1)}>Neutral</button>
          </div>


        </article>
        

    </section>
    </>
  );
}

export default App;
