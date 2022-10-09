import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Main from './layout/Main';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {path: '/', 
    element: <Main></Main>, 
    children: [

      {path: '/home', element: <Home></Home>},

      {path: '/friends', 
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },

      element: <Friends></Friends>},
      {path: '/friend/:friendId', 
        loader: async ({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>},

      {path: '/posts', 
      loader: async () =>{
        return fetch ('https://jsonplaceholder.typicode.com/posts')
      },
      element: <Posts></Posts>},

      { path: '/post/:postId',
        loader: async ({params}) =>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
       element: <PostDetails></PostDetails>
      },

      {path: '/about', element: <About></About>},

      {path: '/products', element: <Products></Products>}

    ]
  }, 
 
  {path: '*', element: <div>This Route is not found!! </div>}
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
