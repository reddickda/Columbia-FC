import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import App from './App.tsx'
import './index.css'
import { About } from './About.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
