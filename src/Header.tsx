import { useState } from "react";

export default function Header() {
  const [isToggled, toggle] = useState(false);

  return (
    <header className='primary-header' data-overlay={isToggled}>
      <div className='container'>
        <div className='nav-wrapper'>
          <a href='#' className='logo'>
            Collin Napier
          </a>
          <button
            className='mobile-nav-toggle'
            aria-controls='primary-navigation'
            aria-expanded={isToggled}
            onClick={() => {
              toggle(!isToggled);
            }}
          >
            <img
              className='icon-hamburger'
              src='img/icon-hamburger.svg'
              alt=''
            ></img>
            <img
              className='icon-close'
              src='img/icon-close.svg'
              alt=''
              aria-hidden='true'
            ></img>
            <span className='visually-hidden'>Menu</span>
          </button>
          <nav
            className={`primary-navigation `}
            id='primary-navigation'
            data-visible={isToggled}
          >
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
          <button className='button | display-sm-none display-md-inline-flex'>
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}
