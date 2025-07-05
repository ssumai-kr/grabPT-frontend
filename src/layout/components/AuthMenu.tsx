import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Alert from '@/assets/images/Alert.png';
import Chat from '@/assets/images/Chat.png';
import HeaderProfile from '@/assets/images/HeaderProfile.png';
import Settings from '@/assets/images/Settings.png';
import Button from '@/components/Button';
import ROUTES from '@/constants/routes';

function AuthMenu() {
  const navigate = useNavigate();

  // 추후 전역상태 변경
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  // Todo: 라우팅 완료 시 img 경로변경
  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <div className="flex h-full items-center gap-5">
          <div className="flex h-[21px] gap-[21px]">
            <img
              src={Chat}
              alt="채팅"
              onClick={() => navigate(ROUTES.HOME)}
              className="cursor-pointer"
            />
            <img
              src={Alert}
              alt="알림"
              onClick={() => navigate(ROUTES.HOME)}
              className="cursor-pointer"
            />
            <img
              src={Settings}
              alt="설정"
              onClick={() => navigate(ROUTES.HOME)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <img
              src={HeaderProfile}
              alt="프로필"
              className="x-[45px] h-[45px] cursor-pointer"
              onClick={() => navigate(ROUTES.HOME)}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-full w-[96px] items-center justify-center">
            <Link to={'/'} className="font-extrabold text-black">
              로그인
            </Link>
          </div>
          <Button>
            <Link to={'/'}>회원가입</Link>
          </Button>
        </>
      )}
    </div>
  );
}

export default AuthMenu;
