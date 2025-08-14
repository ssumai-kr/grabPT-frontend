import React, { useState } from 'react';

import Slider from 'react-slick';

import DeleteIcon from '@/assets/images/x.png';
import { NextArrow, PrevArrow } from '@/features/home/components/CustomArrow';

export interface SlideImage {
  imageUrl: string;
  description?: string;
}
interface ProfileImageSlideProps {
  title?: string;
  images: SlideImage[];
  isEditable?: boolean;
}

interface ProfileImageSlideCardProps {
  imgUrl: string;
  height: number; // 보여줄 고정 높이(px)
  isEditable?: boolean; // 이미지 편집 가능 여부
}

const ProfileImageSlideCard = ({ imgUrl, height, isEditable }: ProfileImageSlideCardProps) => {
  const [width, setWidth] = useState<number | null>(null);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const ratio = img.naturalWidth / img.naturalHeight;
    setWidth(height * ratio);
  };

  return (
    <div style={{ width: width ?? 'auto' }} className="relative mr-[10px]">
      {isEditable && (
        <button className="absolute top-2 right-2 cursor-pointer rounded-full bg-white">
          <img src={DeleteIcon} alt="Delete" />
        </button>
      )}
      <img
        src={imgUrl}
        alt="Profile"
        height={height}
        onLoad={handleImageLoad}
        style={{
          height,
          width: width ?? 'auto',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

const ProfileImageSlide = ({ title, images, isEditable }: ProfileImageSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
    swipeToSlide: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    nextArrow: currentSlide >= images.length - 1 ? undefined : <NextArrow />,
    prevArrow: currentSlide === 0 ? undefined : <PrevArrow />,
  };

  return (
    <div className="h-[200px] w-full">
      {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
      <Slider {...settings}>
        {images
          .filter((it) => !!it?.imageUrl) // 안전필터(선택)
          .map(({ imageUrl }, idx) => (
            <ProfileImageSlideCard
              key={imageUrl ?? idx}
              imgUrl={imageUrl}
              height={200}
              isEditable={isEditable}
              // 만약 Card가 alt를 받는다면:
              // alt={description || `image-${idx + 1}`}
            />
          ))}
      </Slider>
    </div>
  );
};

export default ProfileImageSlide;
