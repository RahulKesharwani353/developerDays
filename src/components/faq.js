import React from 'react';
import './css/faq.css'
  
import {useState, useEffect, useRef} from 'react'

const FAQ = () => {
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef()

  useEffect(() => {
      console.log(refHeight);
      setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
      setToggle(!toggle)
  }

  console.log(toggle);
  return (
    <>
          {/* <div className="accordion">

<button 
onClick={toggleState}
className="accordion-visible">
    <span>Lorem ipsum dolor sit amet.</span>
    <img 
    className={toggle && "active"}
    src={Chevron} />
</button>

<div 
className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
style={{height: toggle ? `${heightEl}` : "0px"}}
ref={refHeight}
>
    <p aria-hidden={toggle ? "true" : "false"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
    </p>
</div>

</div> */}


<div className="accordion">
        <div className="accordion-item  wow animate__animated animate__fadeInUp">
          <div className="accordion-item-header" onClick={toggleState}>
            Who can join Developer Student Community?
          </div>
          <div className="accordion-item-body " style={{height: toggle ? `${heightEl}` : "0px"}}
ref={refHeight}>
            <div className="accordion-item-body-content">
              We are an open community of developers, anybody with a similar domain and interest can join us.
            </div>
          </div>
        </div>
        </div>
    </>
  )
};

export default FAQ;