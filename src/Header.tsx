import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isToggled, toggle] = useState(false);

  return (
    <header className='primary-header' data-overlay={isToggled}>
      <div className='container'>
        <div className='nav-wrapper'>
          <Link to='' className='logo'>
            Collin Napier
          </Link>
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
                <Link
                  to={"aboutme"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to={"projects"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={"employment"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  Employment
                </Link>
              </li>
              <li>
                <Link
                  to={"contact"}
                  onClick={() => {
                    toggle(!isToggled);
                  }}
                >
                  Contact
                </Link>
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
