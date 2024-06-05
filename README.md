# Custom React Hooks - A Tutorial

## Watch the Demo

Here is a link to a recording of the Code the Dream Skill-IT workshop where I presented on React Custom Hooks: https://www.youtube.com/watch?v=p0eDU8yIenA

## Running this Code

- Download this repository to your computer
- In your terminal, navigate to the directory where you are keeping this code and run `npm install`
- After that has finished, run `npm run dev` and view the website at the link provided in your terminal

## Practice

(in no particular order)

- Modify the custom hook useFetch so that it also returns a variable (boolean) which indicates whether or not the data is loading and a variable (string) that stores the error message if it exists.
- Use this hook in the remaining useEffect block

## Additional Practice

- Add a loading indicator and error message for the description that displays when the "More Info" button is clicked.
- Add a text input so that the user can choose what term to search for

## Resources

- This PowerPoint provides some background info on React Custom Hooks: https://docs.google.com/presentation/d/1yzpMtyPlY_YyvnSVjbYfNVs_6eEm5TD1RZIofRxrmvI/edit?usp=sharing
- This code uses the React `create-vite` template: https://github.com/vitejs/vite/tree/main/packages/create-vite
- The API used in this demo is from the Art Institute of Chicago: https://api.artic.edu/docs/#quick-start
