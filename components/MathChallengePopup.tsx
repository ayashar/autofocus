import { useState, useEffect } from 'react';

interface MathChallengePopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}

function generateMathQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2} = ?`,
    answer: num1 + num2,
  };
}

export default function MathChallengePopup({ onCancel, onConfirm }: MathChallengePopupProps) {
  const [math, setMath] = useState(generateMathQuestion);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setMath(generateMathQuestion());
    setUserAnswer('');
    setIsCorrect(false);
  }, []);

  const handleAnswerChange = (value: string) => {
    setUserAnswer(value);
    if (parseInt(value) === math.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleConfirm = () => {
    if (isCorrect) {
      onConfirm();
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="w-[300px] bg-[#0077B6] rounded-[20px] p-6">
        <h2 className="text-[18px] font-bold text-[#F8FAFC] text-center mb-2">
          Give Up?
        </h2>
        <p className="text-[14px] text-[#F8FAFC]/80 text-center mb-4">
          Solve this to confirm:
        </p>

        <div className="  p-4 mb-4">
          <p className="text-[24px] font-bold text-[#F8FAFC] text-center">
            {math.question}
          </p>
        </div>

        <div className="mb-6">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Answer"
            className="w-full h-[48px] bg-white/20  text-[18px] font-bold text-[#F8FAFC] text-center outline-none placeholder:text-[#F8FAFC]/50"
          />
        </div>

        <div className="h-4" />

        <div className="flex gap-4 pb-2">
          <button
            onClick={onCancel}
            className="flex-1 h-[45px] bg-white/20 rounded-full text-[14px] font-bold text-[#F8FAFC] active:scale-[0.97] active:shadow-inner transition-all duration-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!isCorrect}
            className={`flex-1 h-[45px] rounded-full text-[14px] font-bold transition-all duration-100 active:scale-[0.97] active:shadow-inner ${
              isCorrect
                ? 'bg-[#EF4444] text-white'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            Give Up
          </button>
        </div>
      </div>
    </div>
  );
}