import FooterIcons from '@/assets/images/Footer-Icons.png';
import LogoIcon from '@/assets/images/LogoIcon.png';

function Footer() {
  return (
    //
    <footer>
      <div className="flex h-[37px] items-center justify-between bg-[#5D6483] px-[40px]">
        <div className="flex items-center gap-5">
          <img src={LogoIcon} alt="푸터로고" className="h-[22px] w-[17px]" />
          <p className="h-[17px] text-[12px] leading-[1.4] font-normal text-white">
            grabPT @ 2025. All rights reserved.
          </p>
        </div>

        {/* 추후 변경. 이미지로 넣어버림 */}
        <div>
          <img src={FooterIcons} alt="푸터아이콘" className="h-[15px] w-auto" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
