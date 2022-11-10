import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
