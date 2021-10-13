import './App.css';
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Item from '../item/Item'
const body = document.querySelector('body');

function App() {
  const [show, setShow] = useState(false);
  const [trigger, setTrigger] = useState(true);
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setShow(false)
      }
    })
    body.addEventListener('click', (e) => {
      if (document.querySelector('#inp-two') !== e.target && document.querySelector('#inp-one') !== e.target && e.target !== document.querySelector('.modal') && e.target !== document.querySelector('.btn')) {
        setShow(false)
      }
    })
  }, [])

  let className = show ? "wrapper" : null;
  show ? body.style.overflow = 'hidden' : body.style.overflow = 'scroll';

  return (
    <>
      <div id="wrapper" className={className}>
        {
          trigger ? <button className="btn" onClick={() => setShow(true)}>Launch demo modal</button> : null
        }
        <div>
          <div className="text"><h2>Text</h2> <p>When the in prop is set to true, the child component will first receive the class example-enter, then the example-enter-active will be added in the next tick. CSSTransition forces a reflow between before adding the example-enter-active. This is an important trick because it allows us to transition between example-enter and example-enter-active even though they were added immediately one after another. Most notably, this is what makes it possible for us to animate appearance.</p></div>
          <img className="img" src="https://yobte.ru/uploads/posts/2019-11/devushki-v-sportivnyh-shtanah-63-foto-51.jpg" alt='img'></img>
          <Item />
        </div>
      </div>
      <ModalComponent show={show} setShow={setShow} setTrigger={setTrigger} />
    </>
  );
}

const ModalComponent = ({ show, setShow, setTrigger }) => {
  const duration = 500;
  return (
    <CSSTransition
      in={show}
      timeout={duration}
      classNames="my-node"
    // mountOnEnter
    // unmountOnExit
    // onEnter={() => setTrigger(false)}
    // onExited={() => setTrigger(true)}
    >
      <div className="modal">
        <input id="inp-one" type="text" />
        <input id="inp-two" type="text" />
        <button onClick={() => setShow(false)}>
          Save Changes
        </button>
        <button className="x">X</button>
      </div>
    </CSSTransition>
  )
}
export default App;
