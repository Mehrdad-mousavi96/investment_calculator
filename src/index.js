  
  // 1. Import the React and ReactDom libraries
  import React from "react";
  import ReactDom from 'react-dom/client'
  import App from './App';
import { CustomProvider } from "./stephen/booking/context/books";
  
  // 2. Get a reference to the div with ID root
  const el = document.getElementById('root')
  
  // 3. Tell React to take control of that element
  const root = ReactDom.createRoot(el)
  
  //  4. Create a component
// 5. Show the component on the screen
root.render(
<CustomProvider>
  <App />
</CustomProvider>
)
