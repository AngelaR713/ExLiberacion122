import { createRoot } from 'react-dom/client'
import "./index.css"
import useRouter from './browseRouter.jsx'
import {RouterProvider}from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


const App = () => {
  const { router } = useRouter();
  // rest api: http://www.omdbapi.com/?s=superman&apikey=1f68c77e
  //
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
