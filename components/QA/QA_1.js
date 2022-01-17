const QA = ({ question, answer }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#555555] leading-8">{question}</h1>
      <p className="text-[#777777] text-base leading-7">{answer}</p>
    </div>
  );
};

export default QA;
