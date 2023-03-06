import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='primary-header'>
        <div className='container'>
          <a href='#'>Collin Napier</a>
          <nav className='primary-navigation'>
            <ul role={"list"} className='nav-list'>
              <li>
                <a href='#'>About Me</a>
              </li>
              <li>
                <a href='#'>Projects</a>
              </li>
              <li>
                <a href='#'>Employment</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </nav>
          <button className='button'>Resume</button>
        </div>
      </header>
      <main>
        <section>
          <div className='container'>
            <div className='even-columns'>
              <div>
                <h1 className='fs-primary-heading fw-bold'>
                  I'm Collin Napier
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, sequi aut sint reiciendis quia nisi?
                </p>
                <button className='button'>See Work</button>
              </div>
              <div>
                <img src='computer.svg' alt='' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='even-columns'>
              <div>
                <h2 className='fs-secondary-heading fw-bold'>Hi There.</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-neutral-900 text-neutral-100'>
        <div className='container'>
          <div className='even-columns'>
            <div>
              <ul role={"list"} aria-label={"social links"}>
                <li>
                  <a aria-label={"email"} href='#'></a>
                </li>
                <li>
                  <a aria-label={"LinkedIn"} href='#'></a>
                </li>
                <li>
                  <a aria-label={"GitHub"} href='#'></a>
                </li>
              </ul>
            </div>
            <div>
              <ul role={"list"} aria-label={"Footer"}>
                <li>
                  <a href='#'>About Me</a>
                </li>
                <li>
                  <a href='#'>Projects</a>
                </li>
                <li>
                  <a href='#'>Employment</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <button className='button'>Resume</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
