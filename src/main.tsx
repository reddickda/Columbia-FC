import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import App from './App.tsx'
import './index.css'
import { About } from './About.tsx';
import { MeetTheTeam } from './Components/MeetTheTeam.tsx';
import theteam from './data/theteam.json'
import { OurSupporters } from './Components/OurSupporters.tsx';

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
  {
    path: "/roster",
    element: <MeetTheTeam data={theteam} />
  },
  {
    path: "/supporters",
    element: <OurSupporters />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
