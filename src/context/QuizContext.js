import { createContext } from 'react';

const QuizContext = createContext();

// Initial

// Reducer

function QuizProvider({ children }) {
  // State

  // Effect

  // Functions

  return (
    <QuizContext.Provider
      value={
        {
          // Props
          // Functions
        }
      }
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = createContext(QuizContext);
  if (context === undefined)
    throw new Error('QuizContext was used outside of the QuizProvider!');
  return context;
}

export { QuizProvider, useQuiz };
