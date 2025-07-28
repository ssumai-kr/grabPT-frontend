import Profile from '@/assets/images/HeaderProfile.png';
import Button from '@/components/Button';

// 제안서 상세페이지입니다

const ProposalDetailPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-2">
        <img src={Profile} alt="트레이너 프로필" className="h-20 w-20 rounded-full object-cover" />
        <span className="text-2xl font-bold">박수민</span>
        <span className="text-lg text-gray-500">용암동헬스장 브라이언박 트레이닝 센터</span>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <Button width="w-[155px]">프로필 방문</Button>
        <Button width="w-[274px]">채팅 상담</Button>
      </div>

      <div className="mt-12 flex flex-col gap-12">
        <div>
          <span className="text-xl font-semibold">제안 가격</span>
          {/* 가격 정보 삽입 */}
        </div>

        <div>
          <span className="text-xl font-semibold">제안 상세 설명</span>
          <p className="mt-2 text-base">제안 상세 설명~</p>
        </div>

        <div>
          <span className="text-xl font-semibold">상세 위치</span>
          <p className="mt-2 text-base">위치는 여깁니다!</p>
        </div>

        <div>
          <span className="text-xl font-semibold">사진</span>
          <div className="mt-4 grid w-full grid-cols-5 gap-2">
            {[...Array(6)].map((_, idx) => (
              <img
                key={idx}
                src={Profile}
                alt="사진"
                className="aspect-square w-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalDetailPage;
