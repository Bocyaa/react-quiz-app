import { useQuiz } from '../context/QuizContext';

function StartScreen() {
  const { questions, dispatch } = useQuiz();
  const numQuestions = questions.length;

  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
