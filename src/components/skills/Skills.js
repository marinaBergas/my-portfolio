import React from "react";
import "./Skills.scss";
const Skills = () => {
  return (
    <section className="skills__wrapper" id="Skills">
      <h2 className="skills-header">Frontend Skills</h2>
      <div className="skills-item__wrapper">
        <div className="skills-item">
          <ul>
            <li>Html5</li>
            <li>css3</li>
            <li>scss</li>
            <li>
              <a href="https://www.coursera.org/account/accomplishments/verify/H8WYVYHFHZMV?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse&fbclid=IwAR0LyIx4o3WESrvnnSvGwmlpAOeTGx2Qn08gKrFxpz4u9aENgHQZr7SjVNc">
                Bootstrap
              </a>
            </li>
            <li>jquery</li>
            <li>React</li>
            <li>
              <a href="https://www.coursera.org/account/accomplishments/verify/FWQAVG4GGL8C?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse&fbclid=IwAR3T99YfkXkq2y_DONlCS_ES-vJAwaD7yzc6z3tjecEjg--yr1ey3iHOKLI">
                Angular
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/certification/fcc29114551-3024-4512-a0e8-7a0965473fe0/javascript-algorithms-and-data-structures?fbclid=IwAR2gmbSEld-tTFFIwyfitVJPCaLlQVrIWUc0puC_8r7uWpo5UiWzJ66AzLo">
                Javascript
              </a>
            </li>
            <li>Es6</li>
            <li>TypeScript</li>
            <li>
              <a href="https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1">
                Database
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
