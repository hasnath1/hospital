import React from "react";

const QA = ({ answer, question }) => {
  return (
    <div className="border-[1.5px] border-[#AAAAAA] text-[#777777] rounded-md py-5 px-6">
      {/* Question */}
      <div className="flex justify-start items-baseline">
        <p className="w-40 flex-shrink-0 text-base">Question</p>
        <p className="text-lg font-medium text-black leading-7">{question}</p>
      </div>

      {/* Answer */}
      <div className="flex justify-start items-baseline mt-4">
        <p className="w-40 flex-shrink-0 text-base">Answer</p>
        <p className="text-[17px] leading-7">{answer}</p>
      </div>
    </div>
  );
};

export default QA;
