import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Banner from '@/components/Banner';
import { NextArrow, PrevArrow } from '@/features/home/components/CustomArrow';
import RequestCardInMain from '@/features/home/components/RequestCard';
import UserSearchSection from '@/features/home/components/UserSearchSection';
import mockRequests from '@/features/home/data/dummy';

const UserMainPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 4, // ✅ 한 슬라이드당 4개로 맞춤
    swipeToSlide: true,
    arrows: true,
    dots: true,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (index: number) => {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    nextArrow: <NextArrow />,
    prevArrow: currentSlide === 0 ? <></> : <PrevArrow />,
  };

  return (
    <div className="flex flex-col items-center">
      <UserSearchSection />

      <section className="mx-[100px] mt-[109px] mb-20 flex flex-col gap-9" ref={sectionRef}>
        <h2 className="font-pretendard mx-auto w-[1480px] text-[30px] leading-[100%] font-extrabold tracking-[0%]">
          나의 요청서
        </h2>

        <div className="w-[1480px] mb-[180px]">
          <Slider {...settings}>
            {mockRequests.map((item, idx) => (
              <div key={idx} className='px-[24px] h-[230px]'>
                <RequestCardInMain
                  name={item.nickname}
                  location={item.region}
                  tags={item.tags}
                  text={item.memo}
                />
              </div>
            ))}
          </Slider>
        </div>

        <Banner />
      </section>
    </div>
  );
};

export default UserMainPage;
