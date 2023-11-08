import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal2 = () => {
  const [code, setCode] = useState([...new Array(6).fill("")]);
  const refs = new Array(6).fill().map(() => React.createRef());

  const changeRef = (idx, isLeft) => {
    if (isLeft && idx > 0) {
      refs[idx - 1].current.focus();
    } else if (!isLeft && idx < 5) {
      refs[idx + 1].current.focus();
    }
  };

  const handleOnChange = (e, idx) => {
    const value = e.target.value;
    console.log("change");

    if (/^[0-9]$/.test(value)) {
      setCode((prev) => {
        const newCode = [...prev];
        newCode[idx] = value;
        return newCode;
      });

      changeRef(idx, false);
    }
  };

  const handleKeyDown = (e, idx) => {
    const { key } = e;

    if (key === "Backspace") {
      e.preventDefault();
      const value = e.target.value;

      if (value) {
        setCode((prev) => {
          const newCode = [...prev];
          newCode[idx] = "";
          return newCode;
        });
        return;
      }

      changeRef(idx, true);
    }
  };

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <div>
        <h2>인증번호 입력</h2>
        <p>아래 이메일로 6자리 숫자가 발송되었습니다 !</p>
        <p>인증 코드를 입력하세요.</p>

        <div>
          {code.map((value, idx) => (
            <input
              key={`input_${idx}`}
              value={value}
              ref={refs[idx]}
              onChange={(e) => handleOnChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              maxLength={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal2;
