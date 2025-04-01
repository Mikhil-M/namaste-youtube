import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        }
      ]
    }
  ]);

  return (
    <Provider store={store}>    
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
        {/**
         * 
         * Head
         * Body
         *   Sidebar
         *     MenuItems
         *   MainContainer
         *     ButtonsList
         *     VideoContainer
         *       VideoCard
         * 
        */}

      </div>
    </Provider>
  );
}

export default App;
