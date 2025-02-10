import { useQuiz } from '../context/QuizContext';
import Options from './Options';

export default function Question() {
  const { question, dispatch, answer, index } = useQuiz();

  return (
    <div>
      <h4>{question[index].question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
