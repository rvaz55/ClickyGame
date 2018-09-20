//This export statement is exporting the entire './Wrapper' folder
//Inside the folder is the 'Wrapper.JS' which is linked to the 'Wrapper.css'
//By exporting the entire folder, we can import the 'Wrapper.js' and 
//the 'Wrapper.css' files  with a single 
//The import would take place in the 'App.js' file and would 
//look like: 'import Wrapper from "./components/Wrapper";'
//This particular style of 'importing' comes from ES6 and is automatically
//programmed to 'look' for an 'index.js' file
export {default} from "./Wrapper";