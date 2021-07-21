import styl from "../components/css/abouttrack.module.css";
import React from "react";

const SkillsEarn = (props) => {

  return (
    <div>
      <div className={styl.skillBox}>
        <h6>Skills</h6>
        {
          props.skill.map(
            (elem,index)=>{
                const {skill} =elem;
                return (
                    <button key={index}>{skill}</button>
                )
            }
          )
      }
      </div>
    </div>
  );
};

export default SkillsEarn;
