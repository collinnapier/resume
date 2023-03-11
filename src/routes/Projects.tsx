import "./projects.scss";

export default function Projects() {
  return (
    <main>
      <section className='padding-block-900 splash'>
        <div className='container'>
          <div className='even-columns'>
            <div className='flow'>
              <h1 className='fs-primary-heading fw-bold text-neutral-100'>
                {/* I'm Collin Napier */}
                Projects
              </h1>
              <p className='text-neutral-100'>
                These are projects I have worked on in my free time.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className='container padding-block-900'>
        <div className='card'>
          <div>
            <img src='computer.svg' alt='' />
          </div>
          <div className='card-info'>
            <h2 className='fs-secondary-heading fw-bold'>This Website!</h2>
            <p>
              This site was created with HTML5, CSS3, and TypeScript in the
              React Framework. You can visit my GitHub profile at the bottom of
              the page and click the resume project to view the source code to
              this project!
            </p>
            <div className='card-tools'>
              <img src='img/angular.svg' alt='' />
              <img src='img/js.svg' alt='' />
              <img src='img/html5.svg' alt='' />
              <img src='img/css3.svg' alt='' />
              <img src='img/github-mark.svg' alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className='container padding-block-900'>
        <div className='card'>
          <div>
            <img src='img/logo-billr.svg' alt='' />
          </div>
          <div className='card-info'>
            <h2 className='fs-secondary-heading fw-bold'>Billr</h2>
            <p>
              Billr is a web app I created for my grandmother to increase her
              productivity. It takes Excel timesheets and generates invoices
              using the pricing provided by her company for employee hours and
              materials used. Due to the human nature of the timesheets string
              comparision is used to determine which items the employees mean on
              their timesheets. Over the last year this has saved her hundreds
              of hours compared to the old way of doing it by hand. The web app
              was created with HTML5, CSS3, and TypeScript in the Angular
              Framework. User authentication and database storage is done with
              Firebase Authentication and Firestore. unfortunately, I cannot
              show the source of this project as it contains confidential
              company information.
            </p>
            <div className='card-tools'>
              <img src='img/react.svg' alt='' />
              <img src='img/js.svg' alt='' />
              <img src='img/html5.svg' alt='' />
              <img src='img/css3.svg' alt='' />
              <img src='img/github-mark.svg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
