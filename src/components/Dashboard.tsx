import { useState } from 'react';

import { useForm } from 'react-hook-form';

import type { UserInfo } from '@/apis/getUserInfo';
import Profile from '@/assets/images/HeaderProfile.png';
import Button from '@/components/Button';

interface DashboardProps {
  userInfo?: UserInfo;
}

type FormValues = {
  nickname: string;
};

const Dashboard = ({ userInfo }: DashboardProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [addressDirty, setAddressDirty] = useState(false); // 주소 변경 감지용 (수정모드 div는 그대로 유지)

  const adress = `${userInfo?.address.city} ${userInfo?.address.district} ${userInfo?.address.street} ${userInfo?.address.specAddress}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: { nickname: userInfo?.nickname ?? '' },
  });

  const onSubmit = async (values: FormValues) => {
    // TODO: 닉네임 및 주소 저장 API 호출
    // await updateUser({...})
    // 저장 성공 시 상태 초기화
    reset(values);
    setAddressDirty(false);
    setIsEdit(false);
  };

  const handleEnterEdit = () => {
    setIsEdit(true);
    reset({ nickname: userInfo?.nickname ?? '' });
    setAddressDirty(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
    reset({ nickname: userInfo?.nickname ?? '' });
    setAddressDirty(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex w-[812px]">
          <div className="ml-[16px] flex flex-col items-center gap-[30px]">
            <img src={Profile} alt="프로필" className="w-[180px]" />
            {isEdit && (
              <Button
                type="button" // ← 이거 추가!
                width="w-[176px]"
                height="h-[42px]"
                text="text-[15px] font-semibold text-white"
                onClick={()=>{console.log("test");}} // 예: 이미지 업로드 핸들러
              >
                이미지 등록
              </Button>
            )}
          </div>

          <div className="mt-[19px] ml-[45px]">
            <ul className="flex flex-col gap-[20px]">
              <li className="flex items-center justify-between gap-[40px]">
                <span className="w-10 text-right text-[15px] font-semibold">이름</span>
                <div className="h-[24px] w-[493px] rounded-[10px]">{userInfo?.username}</div>
              </li>

              <li className="flex items-center justify-between gap-[40px]">
                <span className="w-10 text-right text-[15px] font-semibold">이메일</span>
                <div className="h-[24px] w-[493px] rounded-[10px]">{userInfo?.email}</div>
              </li>

              <li className="flex items-center justify-between gap-[40px]">
                <span className="w-10 text-right text-[15px] font-semibold">닉네임</span>
                {isEdit ? (
                  <div className="relative">
                    <input
                      {...register('nickname')}
                      aria-label="닉네임"
                      type="text"
                      className="h-[44px] w-[493px] rounded-[10px] border border-[#BABABA] p-2"
                      placeholder="닉네임을 입력하세요"
                    />
                    <button
                      type="button"
                      onClick={() => setAddressDirty(true)} // 주소검색으로 값 세팅되면 변경 감지
                      className="absolute top-1/2 right-4 flex h-7 w-[4.375rem] -translate-y-1/2 items-center justify-center rounded-[3.125rem] bg-[color:var(--color-button)] text-[0.625rem] font-semibold text-white hover:bg-[color:var(--color-button-hover)] active:bg-[color:var(--color-button-pressed)]"
                    >
                      중복 확인
                    </button>
                  </div>
                ) : (
                  <div className="h-[24px] w-[493px] rounded-[10px]">{userInfo?.nickname}</div>
                )}
              </li>

              {/* 보기 모드 주소 */}
              {!isEdit && (
                <li className="flex items-center justify-between gap-[40px]">
                  <span className="w-10 text-right text-[15px] font-semibold">주소</span>
                  <input
                    aria-label="주소"
                    type="text"
                    className="h-[34px] w-[493px] rounded-[10px] border border-[#BABABA] p-2"
                    placeholder={adress}
                    readOnly
                  />
                </li>
              )}
              {isEdit && (
                <li className="flex items-center justify-between gap-[40px]">
                  <span className="w-10 text-right text-[15px] font-semibold">주소</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-2.5">
                      <div className="relative flex h-[3.125rem] w-[493px] items-center justify-between rounded-[0.625rem] border border-[#BDBDBD]">
                        <input
                          type="text"
                          readOnly
                          placeholder="주소"
                          value={``} // 유지
                          className="w-[493px] py-[0.8rem] pl-4 text-[#616161]"
                        />
                        <button
                          type="button"
                          onClick={() => setAddressDirty(true)} // 주소검색으로 값 세팅되면 변경 감지
                          className="absolute top-1/2 right-4 flex h-7 w-[4.375rem] -translate-y-1/2 items-center justify-center rounded-[3.125rem] bg-[color:var(--color-button)] text-[0.625rem] font-semibold text-white hover:bg-[color:var(--color-button-hover)] active:bg-[color:var(--color-button-pressed)]"
                        >
                          주소 검색
                        </button>
                      </div>

                      <div className="flex h-[3.125rem] w-[25.625rem] items-center justify-between">
                        <input
                          type="text"
                          placeholder="상세 주소"
                          onChange={() => setAddressDirty(true)} // 상세주소 입력 시 변경 감지
                          className="w-[17rem] rounded-[0.625rem] border border-[#BDBDBD] py-[0.8rem] pl-4 text-[#616161]"
                        />
                        <input
                          aria-label="동"
                          className="flex h-full w-32 items-center justify-center rounded-[0.625rem] border border-[#BDBDBD] pl-4 text-[15px] text-[#616161]"
                          value={'동'}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="mt-[100px] flex w-full items-center justify-center gap-4">
          {!isEdit ? (
            <Button
              label="수정하기"
              width="w-[180px]"
              height="h-[42px]"
              text="text-[15px] font-semibold text-white"
              className="cursor-pointer"
              type="button"
              onClick={handleEnterEdit}
            >
              수정하기
            </Button>
          ) : (
            <>
              <Button
                label="수정하기"
                width="w-[140px]"
                height="h-[42px]"
                text="text-[15px] font-semibold text-white"
                className="cursor-pointer"
                type="button"
                onClick={handleCancel}
              >
                취소
              </Button>
              <Button
                label="저장하기"
                width="w-[180px]"
                height="h-[42px]"
                text="text-[15px] font-semibold text-white"
                className="cursor-pointer"
                type="submit"
                disabled={!(isDirty || addressDirty) || isSubmitting}
              >
                저장하기
              </Button>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default Dashboard;
