import { type RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import ROUTES from '@/constants/routes';
import Layout from '@/layout/Layout';

// 라우터
const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <>없는페이지입니다</>,
    children: [{ index: true, element: <>HomePage</> }],
  },
];

// 프로텍트 라우팅
// const protectedRoutes = createBrowserRouter([
//   {
//     path: ROUTES.HOME,
//     element: (
//       <ProtectedLayout>
//         <Layout />
//       </ProtectedLayout>
//     ),
//     children: [
//       { path: ROUTES.MYPAGE, element: <Mypage /> },
//     ],
//   },
// ]);

// protectedRoutes 사용 시 ...protectedRoutes 추가
const router = createBrowserRouter([...routes]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
