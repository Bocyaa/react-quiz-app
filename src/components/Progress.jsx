// { index, numQuestions, points, maxPossiblePoints, answer }

import { useQuiz } from '../context/QuizContext';

function Progress() {
  const { questions, points, answer, index } = useQuiz();

  const numQuestions = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
