import { useEffect, useState } from 'react';

import MockImage from '@/assets/images/동영상 등 대체 도형.png';
import Button from '@/components/Button';
import CommentBox from '@/components/CommentBox';
//import ImageSlide from '@/components/ImageSlide';
import ProfileCard from '@/components/ProfileCard';
import ProfileImageSlide, { type SlideImage } from '@/components/ProfileImageSlide';
import ProfilePrice from '@/components/ProfilePrice';
import ProfilePriceInput from '@/components/ProfilePriceInput';
import { TitleLine } from '@/components/TitleLine';
import {
  MyProfileEditButton,
  MyProfileEditCancelButton,
  MyProfileEditSaveButton,
} from '@/components/myProfileEditButton';
//import MypageSection from '@/features/Mypage/components/MypageSection';
import { useProProfileQuery } from '@/hooks/useGetProProfile';
import type { PtPrice } from '@/types/ProPrifleType';

//스타일 통일 될 경우 TileLine 컴포넌트로 통일

const ExpertProfile = () => {
  const [isCommentEdit, setIsCommentedit] = useState(false);
  const [isPhotosEdit, setIsPhotosEdit] = useState(false);
  const [isPriceEdit, setIsPriceEdit] = useState(false);
  const [isLocationEdit, setIsLocationEdit] = useState(false);
  const [comment, setComment] = useState('');
  const [photos, setPhotos] = useState<SlideImage[]>([]);
  const [prices, setPrices] = useState<PtPrice[]>([]);
  const [pricePerOne, setPricePerOne] = useState<number | null>(null);
  const [centerName, setCenterName] = useState<string>('');
  const [centerDescription, setCenterDescription] = useState<string>("");

  const handleCommentEdit = () => {
    setIsCommentedit((prev) => !prev);
  };
  const handlePhotosEdit = () => {
    setIsPhotosEdit((prev) => !prev);
  };
  const handlePriceEdit = () => {
    setIsPriceEdit((prev) => !prev);
  };
  const handleLocationEdit = () => {
    setIsLocationEdit((prev) => !prev);
  };

  const { data, isLoading, isError } = useProProfileQuery();
  const profileData = data?.result;

useEffect(() => {
  setComment(profileData?.description || '');
  setPhotos(profileData?.photos || []);
  setPrices(profileData?.ptPrices || []);
  setPricePerOne(profileData?.pricePerSession || null);
  setCenterName(profileData?.center || '');
  setCenterDescription(profileData?.centerDescription || "");
  console.log(photos);
} ,[profileData]);

  const images = Array.from({ length: 7 }, () => MockImage);
  // const MockImg = [
  //   'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
  //   'https://item.kakaocdn.net/do/0e4b127426b0440a5f3f136031e28414616b58f7bf017e58d417ccb3283deeb3',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-wcn3jgsEQGfFav2MyV1leQieIT0MycSNw&s',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEcgHBn_dzSkT5-KLGcBZeMRE0V4pPbd29A&s',
  //   'https://i.pinimg.com/736x/1f/3d/0d/1f3d0dee275374b9f6f9270fa23089b6.jpg',
  //   'https://i.pinimg.com/236x/99/63/e9/9963e930b60acbe6bb92528a151114a5.jpg',
  //   'https://previews.123rf.com/images/sevendeman/sevendeman2205/sevendeman220500049/187437940-happy-face-asian-man-expressing-of-no-problem-and-no-worries.jpg',
  // ];

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !profileData) return <div>에러 발생</div>;
  return (
    <div className="mx-auto mt-16 flex max-w-[926px] flex-col items-center gap-12">
      {/* 프로필 컴포넌트 */}
      <div className="flex justify-center px-[77px]">
        <ProfileCard profileData={profileData} />
      </div>
      {/* 전문가소개 */}
      <div className="w-full">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <header className="text-center text-2xl font-semibold">전문가 소개</header>
          {!isCommentEdit ? (
            <MyProfileEditButton onClick={handleCommentEdit} />
          ) : (
            <div className="flex items-center gap-2">
              <MyProfileEditCancelButton onClick={handleCommentEdit} />
              <MyProfileEditSaveButton />
            </div>
          )}
        </div>
        <hr className="mt-[10px] border-t-2 border-[#B8B8B8]" />
        {/* 보기 모드 */}
        {!isCommentEdit && (
          <p className="mt-[45px] h-[400px] w-full">{profileData?.description}</p>
        )}

        {/* 수정 모드 */}
        {isCommentEdit && (
          <div className="mt-[45px] flex h-[400px] flex-col gap-3">
            {/* 안내 */}
            <div className="h-[50px] w-full resize-none rounded-lg border border-[#CCCCCC] bg-[#F5F5F5] p-4 text-sm leading-relaxed text-gray-400 placeholder:text-gray-400">
              * 전문가로서의 목표, 수업 방향성, 신념, 가치관 등 전문가님을 소개하고 표현할 수 있는
              이야기를 적어주세요!
            </div>
            {/* 상세 소개 입력 */}
            <CommentBox
              placeholder="• 내용을 입력해주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* 소개 사진 슬라이드 */}
      <div className="w-full">
        <div className="flex w-full justify-between">
          <TitleLine title="소개 사진" />
          {!isPhotosEdit ? (
            <MyProfileEditButton onClick={handlePhotosEdit} />
          ) : (
            <div className="flex items-center gap-2">
              <MyProfileEditCancelButton onClick={handlePhotosEdit} />
              <MyProfileEditSaveButton />
            </div>
          )}
        </div>
        <hr className="mt-[10px] border-t-2 border-[#B8B8B8]" />
      </div>
      {/* <ImageSlide title="소개 사진" images={images} /> */}
      {images ? (
        <ProfileImageSlide images={photos} isEditable={isPhotosEdit} />
      ) : (
        <div>이미지가 없습니다.</div>
      )}
      {isPhotosEdit && <Button>사진추가</Button>}

      {/* 프로그램 가격 표 */}
      <div className="w-full">
        <div className="flex w-full justify-between">
          <TitleLine title="프로그램 가격" />
          {!isPriceEdit ? (
            <MyProfileEditButton onClick={handlePriceEdit} />
          ) : (
            <div className="flex items-center gap-2">
              <MyProfileEditCancelButton onClick={handlePriceEdit} />
              <MyProfileEditSaveButton />
            </div>
          )}
        </div>

        <hr className="mt-[10px] mb-[45px] border-t-2 border-[#B8B8B8]" />

        {/* 보기 모드 */}
        {!isPriceEdit && (
          <div className="flex flex-col gap-3">
            {/* 서버 값으로 map 하세요. 예시는 더미 */}
            <ProfilePrice count={1} price={pricePerOne} />
            {prices.map((price, idx) => (
              <ProfilePrice key={idx} count={price.sessionCount} price={price.price} />
            ))}
          </div>
        )}

        {/* 수정 모드 */}
        {isPriceEdit && (
          <div className="flex flex-col gap-3">
            <ProfilePriceInput pricePerOne={pricePerOne} ptPrices={prices} />
          </div>
        )}
      </div>

      {/* <MypageSection title="프로그램 가격" /> */}

      {/* 위치 등록 */}
      <div className="w-full">
        <div className="flex w-full justify-between">
          <TitleLine title="센터" />
          {!isLocationEdit ? (
            <MyProfileEditButton onClick={handleLocationEdit} />
          ) : (
            <div className="flex items-center gap-2">
              <MyProfileEditCancelButton onClick={handleLocationEdit} />
              <MyProfileEditSaveButton />
            </div>
          )}
        </div>
        <hr className="mt-[10px] mb-[45px] border-t-2 border-[#B8B8B8]" />
        {!isLocationEdit ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 h-[40px]">
              <div className="text-[20px] font-semibold">센터명</div>
              <div className="text-[#013EFB]">{profileData?.center}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[20px] font-semibold">위치 설명</div>
              <div className="h-[300px]">
                {centerDescription}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label className="text-[20px] font-semibold">{profileData?.center}</label>
              <input
                type="text"
                className="h-[40px] w-[260px] rounded-[10px] border border-[#BABABA] px-2"
                placeholder={centerName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[20px] font-semibold">위치 설명</div>
              <CommentBox
                placeholder="• 위치 설명을 입력해주세요."
                value={centerDescription}
                onChange={(e) => setCenterDescription(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      {/* <MypageSection title="위치 등록" /> */}
    </div>
  );
};

export default ExpertProfile;
