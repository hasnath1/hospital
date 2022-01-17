import { useState, useEffect } from "react";

const QA = ({ unique_id, question, answer }) => {
  if (!unique_id) throw new Error("An 'unique_id' must be provided.");
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    const ctn = document.getElementById(`accordion-ctn-${unique_id}`);
    const question = document.getElementById(`accordion-question-${unique_id}`);
    const arrow = document.getElementById(`accordion-arrow-${unique_id}`);

    const questionHandler = () => {
      if (isClosed) {
        arrow.style.transform = "rotate(-180deg)";
        ctn.style.height = `${ctn.scrollHeight}px`;
      } else {
        arrow.style.transform = "rotate(0deg)";
        ctn.style.height = `${question.clientHeight}px`;
      }

      setIsClosed(prev => !prev);
    };

    question.addEventListener("click", questionHandler);

    return () => {
      question.removeEventListener("click", questionHandler);
    };
  });

  return (
    <div
      className={`max-w-2xl rounded-md border h-[60px] border-gray-300 overflow-hidden transition-all flex flex-col`}
      id={`accordion-ctn-${unique_id}`}
    >
      <div className={"p-4"} id={`accordion-question-${unique_id}`}>
        <button className="border-none outline-none bg-white flex justify-between items-center w-full">
          <h1 className="text-left w-[95%]">{question} </h1>
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id={`accordion-arrow-${unique_id}`}
            className={"transition-all"}
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={"p-4"}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default QA;
