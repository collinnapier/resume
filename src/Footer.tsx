export default function Footer() {
  return (
    <footer className='padding-block-700 bg-neutral-900 text-neutral-100'>
      <div className='container'>
        <div className='even-columns'>
          <div className='center'>
            <ul role={"list"} aria-label={"social links"} className='flex'>
              <li>
                <a
                  aria-label={"email"}
                  href='mailto:collin.napier818@gmail.com'
                >
                  <img src='img/envelope-regular.svg' alt='' />
                </a>
              </li>
              <li>
                <a aria-label={"LinkedIn"} href='#'>
                  <img src='img/linkedin-in.svg' alt='' />
                </a>
              </li>
              <li>
                <a aria-label={"GitHub"} href='https://github.com/collinnapier'>
                  <img src='img/github-mark-white.svg' alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
