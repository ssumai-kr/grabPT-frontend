import Profile from '@/assets/images/HeaderProfile.png';

function UserDashboard() {
  return (
    <div className="mt-[80px] flex justify-center">
      <div className="flex w-[812px]">
        <div className="ml-[16px] flex flex-col items-center gap-[30px]">
          <img src={Profile} alt="프로필" className="w-[180px]" />
          <button className="flex h-[42px] w-[176px] items-center justify-center rounded-[10px] bg-[color:var(--color-button)] text-[15px] font-semibold text-white hover:bg-[color:var(--color-button-hover)] active:bg-[color:var(--color-button-pressed)]">
            이미지 등록
          </button>
        </div>

        <div className="mt-[19px] ml-[45px]">
          <ul className="flex flex-col gap-[20px]">
            <li className="flex items-center justify-between gap-[40px]">
              <span className="w-10 text-right text-[15px] font-semibold">이름</span>
              <input
                type="text"
                aria-label="이름"
                className="h-[34px] w-[493px] rounded-[10px] border border-[#BABABA]"
              />
            </li>
            <li className="flex items-center justify-between gap-[40px]">
              <span className="w-10 text-right text-[15px] font-semibold">닉네임</span>
              <input
                type="text"
                aria-label="닉네임"
                className="h-[34px] w-[493px] rounded-[10px] border border-[#BABABA]"
              />
            </li>
            <li className="flex items-center justify-between gap-[40px]">
              <span className="w-10 text-right text-[15px] font-semibold">이메일</span>
              <input
                type="text"
                aria-label="이메일"
                className="h-[34px] w-[493px] rounded-[10px] border border-[#BABABA]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
