import {useState} from "react";

export const Header = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return(
      <div className="header">
        <div className="header-title-container">
          <h1 data-testid="h1-title">
            NVA
          </h1>
          <p>
            NASJONALT VITENARKIV
          </p>
        </div>
        <div className="header-button-container">
          <button data-testid="header-button" disabled={isDisabled} onClick={() => (setIsDisabled(!isDisabled))}>
            Logg inn
          </button>
        </div>
      </div>
  )
}