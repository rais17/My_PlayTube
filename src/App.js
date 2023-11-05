import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Watch from './Components/Watch';
import SearchPage from './Components/SearchPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebarAtMobile } from "./Utils/Slices/toggleSlice";

function App() {

  const dispatch = useDispatch();

  const handleResize = () => {
    console.log("Innerwidth", window.innerWidth);
    if (window.innerWidth < 640)
      dispatch(closeSidebarAtMobile());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch/:id",
          element: <Watch />,
        },
        {
          path: "/searchpage",
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return (
    <div className="relative min-h-screen overflow-x-hidden dark:bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
