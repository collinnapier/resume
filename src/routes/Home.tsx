import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className='padding-block-900 splash'>
        <div className='container'>
          <div className='even-columns'>
            <div className='flow'>
              <h1 className='fs-primary-heading fw-bold text-neutral-100'>
                {/* I'm Collin Napier */}
                Hello,
              </h1>
              <p className='text-neutral-100'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, sequi aut sint reiciendis quia nisi?
              </p>
              <button className='button' onClick={() => navigate("/projects")}>
                See Work
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className='bg-accent-400 text-neutral-100 padding-block-700'>
        <div className='container'>
          <div className='even-columns'>
            <div className='flow flow-spacer-sm'>
              <h3 className='fs-500 fw-bold'>What I've Done.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, cupiditate eius, natus omnis placeat nemo commodi
                illum suscipit aliquam esse doloribus ratione. Ad commodi
                tempore quibusdam tenetur veniam ab nostrum.
              </p>
              <button
                className='button'
                data-type='inverted'
                onClick={() => navigate("/projects")}
              >
                Projects
              </button>
            </div>
            <div className='flow flow-spacer-sm'>
              <h3 className='fs-500 fw-bold'>Where I've Worked.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti ab, porro velit in praesentium eligendi corporis optio
                eveniet at? Dicta corrupti dolore, sit quo sunt magnam atque
                nobis molestiae rerum?
              </p>
              <button className='button' data-type='inverted'>
                Employment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
