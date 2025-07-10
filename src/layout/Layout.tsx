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
      {/* Header 높이 변경되는 버그 있음 => h를 min-h로 변경해서 수정*/}
      <Header />

      {/* 220px / 1440px: 180px */}
      <main className="flex flex-1 flex-col justify-between overflow-y-scroll px-[220px] max-[1440px]:px-[180px]">
        <Outlet />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default Layout;

