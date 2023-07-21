import React, { useContext } from "react";
import LineIcon from "react-lineicons";
import { menuContext } from "..";

const Contact = () => {
  const { setMenuToggle } = useContext(menuContext);

  const closeModal = () => {
    setMenuToggle((prevToggle) => !prevToggle);
  };
  return (
    <div className="modal">
      <div className="modal--header">
        <h1>Contact</h1>

        <button onClick={closeModal} aria-label="close modal button">
          <LineIcon name="close" />
        </button>
      </div>
      <div className="modal--desc container">
        <div>
          <h1>Developer</h1>
          <div className="sub-informer">
            <a
              href="https://discordapp.com/users/1130854260716884048/"
              target="_blank"
              rel="noreferrer"
            >
              <code>Justin Chu</code>
            </a>
          </div>

          <h1>GitHub</h1>
          <div className="sub-informer">
            <a
              href="https://github.com/jchu91638/domatio-react"
              target="_blank"
              rel="noreferrer"
            >
              <code>Domatio React</code>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
