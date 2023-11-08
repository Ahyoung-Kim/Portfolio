import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal2 from "./Modal2";

const Modal = ({}) => {
  const [code, setCode] = useState([...new Array(6).fill("")]);
  const initialRefs = Array(6)
    .fill()
    .map(() => React.createRef());
  const [refs, setRefs] = useState(initialRefs);

  useEffect(() => {
    setRefs(initialRefs);
  }, []);

  const handleInputChange = (index, e) => {
    const value = e.target.value;

    console.log(index, value);

    if (value === "" || /^[0-9]$/.test(value)) {
      setCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;

        return newCode;
      });

      setTimeout(() => {
        if (value && index < 5) {
          refs[index + 1].current.focus();
        } else if (!value && index > 0) {
          refs[index - 1].current.focus();
        }
      });
    }
  };

  const handleFocus = (e) => {
    // 빈 입력란이 첫 번째 위치를 찾습니다.
    const firstEmptyIndex = code.findIndex((c) => !c);

    // 첫 번째 빈 입력란이 있으면 해당 위치로 포커스 이동, 아니면 마지막 입력란으로 포커스
    if (firstEmptyIndex !== -1) {
      refs[firstEmptyIndex].current.focus();
    } else {
      refs[5].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      console.log("backspace", index);
      const newCode = [...code];

      // 현재 입력란에 값이 있다면 그 값을 지웁니다.
      if (code[index]) {
        newCode[index] = "";
        setCode(newCode);
        return;
      }

      if (index > 0) {
        newCode[index - 1] = "";
        refs[index - 1].current.focus();
      }

      setCode(newCode);
    }
  };

  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <div>
          <h2>인증번호 입력</h2>
          <p>아래 이메일로 6자리 숫자가 발송되었습니다 !</p>
          <p>인증 코드를 입력하세요.</p>

          <div>
            {code.map((_, index) => (
              <input
                key={index}
                value={code[index]}
                onChange={(e) => handleInputChange(index, e)}
                onFocus={handleFocus}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={refs[index]}
                maxLength="1"
              />
            ))}
          </div>

          <div>확인</div>
        </div>
      </div>

      <Modal2 />
    </div>
  );
};

export default Modal;
