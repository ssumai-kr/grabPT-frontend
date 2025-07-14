import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

import ROUTES from '@/constants/routes';
import { useUserRoleStore } from '@/store/useUserRoleStore';

const Navbar = () => {
  const { isExpert } = useUserRoleStore();
  const location = useLocation();

  // 페이지 생성 시 path 수정
  const menuList = [
    { label: isExpert ? '요청 현황' : '요청서 작성', path: '/' },
    { label: '트레이너 찾기', path: '/' },
    { label: '내지역 센터', path: '/' },
    { label: '카테고리', path: ROUTES.CATEGORY.ROOT },
  ];
  /* 현재 주소가 메뉴 중 하나와 일치하는지 */
  const hasActive = menuList.some(({ path }) => path === location.pathname);

  return (
    <nav className="absolute top-0 left-1/2 z-50 flex -translate-x-1/2 items-center gap-[68px] max-[1440px]:gap-[20px]">
      {menuList.map(({ label, path }) => (
        <div key={label} className="flex h-[70px] w-[126px] items-center justify-center">
          <NavLink
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              clsx(
                /* 텍스트 */
                'relative flex items-center justify-center text-[18px] font-extrabold transition-colors',

                /* 밑줄(after) */
                'after:absolute after:top-full after:left-1/2 after:mt-1 after:-translate-x-1/2',
                'after:h-0.5 after:w-0 after:bg-current after:transition-[width] after:duration-300 after:content-[""]',
                'hover:after:w-[120%]',

                /* 상태별 색상 */
                isActive ? 'text-black' : hasActive && 'text-[#A7A7A7] hover:text-black',
              )
            }
          >
            {label}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
