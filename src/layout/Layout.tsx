import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@/layout/components/Footer';
import Header from '@/layout/components/Header';

function Layout() {
  const location = useLocation();

  // 전체화면으로 보여야 할 경로 리스트 (필요시 여러 경로 추가 가능)
  const fullWidthRoutes = ['/user'];

  const isFullWidthPage = fullWidthRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className={`flex-1 ${isFullWidthPage ? 'px-0' : 'px-[180px]'}`}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;

