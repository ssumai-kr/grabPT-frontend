import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Test from '@/components/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
