import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Watch from './Components/Watch';
import SearchPage from './Components/SearchPage';

function App() {

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
