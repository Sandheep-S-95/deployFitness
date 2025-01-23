import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { TasksContextProvider } from './context/TaskContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </BrowserRouter>
  </StrictMode>
);
