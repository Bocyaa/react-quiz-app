You have been tasked by your project manager to
refactor this app using the Context API.

YOUR TASKS:

- Duplicate 'src' folder to 'src-no-context'
- Review data flow and passed props
- Identify prop drilling problem
- Create a new context 'QuizContext' with the reducer we created earlier

- Use the Context API to fix the (very small) prop drilling problem:

- Create a custom provider component 'QuizProvider' and provide all the state to the app
- Create a custom hook to consume state all over the application
- Delete all unnecessary props
- IMPORTANT: Note how you actually need state right in App component. This means you need to wrap the whole App into the context (HINT: try in index.js)
