# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS is a javascript library that utilizes the react DOM, which has it's own state that is analyzed before rendering on the browser DOM, thereby ensuring faster rendering of code by not re-rendering components that have no change in state.  It facilitates the use of components, making code more semantic and ensuring the debugging process can be followed through a parent/child component chain.
1. Describe component state.
    component state is a built in object that will re-render a component when a property value implemented with useState() changes.
1. Describe props.
    Props, short for "properties", represents the passing of data from parent to child components in react.  For example, when one passes a value from a parent component that was implemented with the useState hook, along with its setter function, it can be rendered within the child component dynamically. This is done by utilizing props + the key name representing the state value passed into the component from the parent.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    side effects are application state changes that occur outside of the initial painting of the DOM.  Examples are the useEffect hook in react, the setTimeout() function, and making any kind of api call.  in order to sync effects to certain state or props one must use the setter function of a state declared variable within the side effect.  For example if the code includes a state variable like `const [colors, setColor] = useState([])` and the developer wishes to change the colors variable via an axios call, it would look like 
    `useEffect(() => {
        axios.get({url here})
        .then(response => setColor(response.data.colors))
        .catch(error => console.log('error', error))
    })`
    The useEffect here triggers a change in state by changing the colors variable's value within it.  This will cause any component rendering state that utilizes the colors value to rerender.  