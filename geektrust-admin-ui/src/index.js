import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM library
import './index.css'; // Import CSS styles
import App from './App'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element for rendering
root.render(
  <React.StrictMode>
    <App /> {/* Render the main App component inside a StrictMode for development warnings */}
  </React.StrictMode>
);