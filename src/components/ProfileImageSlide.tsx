import React, { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';

import DeleteIcon from '@/assets/images/x.png';
import { NextArrow, PrevArrow } from '@/features/home/components/CustomArrow';

export interface SlideImage {
  imageUrl: string;
  description?: string;
  file?: File;
}

interface ProfileImageSlideProps {
  title?: string;
  images: SlideImage[];
  isEditable?: boolean;
  onChange?: (next: SlideImage[]) => void; // 선택: 부모에 변경 알림
}

interface ProfileImageSlideCardProps {
  imgUrl: string;
  height: number; // 보여줄 고정 높이(px)
  isEditable?: boolean; // 이미지 편집 가능 여부
  onDelete?: () => void;
}

const ProfileImageSlideCard = ({
  imgUrl,
  height,
  isEditable,
  onDelete,
}: ProfileImageSlideCardProps) => {
  const [width, setWidth] = useState<number | null>(null);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const ratio = img.naturalWidth / img.naturalHeight;
    setWidth(height * ratio);
  };

  return (
    <div style={{ width: width ?? 'auto' }} className="relative mr-[10px]">
      {isEditable && (
        <button
          type="button"
          onClick={onDelete}
          className="absolute top-2 right-2 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white shadow"
          aria-label="delete"
        >
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

const ProfileImageSlide = ({ title, images, isEditable, onChange }: ProfileImageSlideProps) => {
  // 편집용 로컬 상태로 복사 (prop 변경 시 동기화)
  const [list, setList] = useState<SlideImage[]>(images ?? []);
  useEffect(() => setList(images ?? []), [images]);

  // 파일 업로더
  const fileInputRef = useRef<HTMLInputElement>(null);
  const createdUrlsRef = useRef<string[]>([]); // createObjectURL 추적용

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
    nextArrow: list.length === 0 || currentSlide >= list.length - 1 ? undefined : <NextArrow />,
    prevArrow: currentSlide === 0 ? undefined : <PrevArrow />,
  };

  const handleDelete = (idx: number) => {
    const removed = list[idx];
    const next = list.filter((_, i) => i !== idx);
    setList(next);
    onChange?.(next);

    // 로컬 미리보기 URL이면 revoke
    if (removed && createdUrlsRef.current.includes(removed.imageUrl)) {
      URL.revokeObjectURL(removed.imageUrl);
      createdUrlsRef.current = createdUrlsRef.current.filter((u) => u !== removed.imageUrl);
    }
  };

  const handleClickAdd = () => fileInputRef.current?.click();

  // 파일 선택 시 file도 같이 저장
  const handleFilesSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    const appended: SlideImage[] = files.map((file) => {
      const url = URL.createObjectURL(file);
      createdUrlsRef.current.push(url);
      return { imageUrl: url, description: '', file }; // ✅ file 추가
    });

    const next = [...list, ...appended];
    setList(next);
    onChange?.(next);

    e.target.value = '';
  };

  // 언마운트 시 생성 URL 정리
  useEffect(() => {
    return () => {
      createdUrlsRef.current.forEach((u) => URL.revokeObjectURL(u));
      createdUrlsRef.current = [];
    };
  }, []);

  return (
    <div className="flex h-[300px] w-full flex-col">
      {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}

      <Slider key={list.length} {...settings}>
        {list
          .filter((it) => !!it?.imageUrl)
          .map(({ imageUrl }, idx) => (
            <ProfileImageSlideCard
              key={`${imageUrl}-${idx}`}
              imgUrl={imageUrl}
              height={200}
              isEditable={!!isEditable}
              onDelete={() => handleDelete(idx)}
            />
          ))}
      </Slider>
      {isEditable && (
        <div className="mt-[20px] mb-3 flex w-full items-center justify-center gap-2">
          <button
            type="button"
            onClick={handleClickAdd}
            className="cursor-pointer rounded-[10px] bg-[#003EFB] px-4 py-2 text-white"
          >
            이미지 추가
          </button>
          {/* 숨겨진 파일 입력 */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFilesSelected}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImageSlide;
