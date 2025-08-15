import { useParams } from 'react-router-dom';

import Button from '@/components/Button';
import { useGetProposalDetail } from '@/features/ProposalDetail/hooks/useGetProposalDetail';
import { onErrorImage } from '@/utils/onErrorImage';

// 제안서 상세페이지입니다

const ProposalDetailPage = () => {
  const { id } = useParams();
  const suggestionId = Number(id);
  const { data } = useGetProposalDetail(suggestionId);
  console.log(data);
  return (
    <section className="my-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <img
          src={data?.profileImageUrl}
          onError={onErrorImage}
          alt="트레이너 프로필"
          className="h-45 rounded-full object-cover"
        />
        <span className="mt-5 text-4xl font-bold text-[#21272A]">{data?.nickname}</span>
        <span className="text-button text-sm font-semibold">{data?.center} </span>
      </div>

      <div className="mt-12 flex w-full justify-end gap-4">
        <Button width="w-[155px]">프로필 방문</Button>
        <Button width="w-[274px]">채팅 상담</Button>
      </div>

      <div className="mt-12 flex w-full flex-col gap-12 text-2xl font-extrabold">
        <div>
          <span className="text-button">제안 가격</span>

          {/* 요청서상세페이지에서 가져옴. 컴포넌트로 뺄 수 있음. 근데 -50000 가격차이를 absolute로 처리해서 애매한데 바꿀 수 있음 */}
          <div className="relative mt-5 flex w-fit items-center">
            <input
              type="number"
              value={10}
              aria-label="제안 PT 횟수"
              readOnly
              className="mr-1.5 h-12 w-[85px] rounded-xl border-2 border-[#BABABA] pl-3.5 text-center text-2xl text-[#9F9F9F]"
            />
            <span className="mr-5">회</span>
            <input
              type="number"
              value={data?.suggestedPrice}
              aria-label="제안 PT 가격"
              readOnly
              className="mr-1.5 h-12 w-[260px] rounded-xl border-2 border-[#BABABA] px-8 text-end text-2xl text-[#9F9F9F]"
            />
            <span className="mr-5">원</span>

            {data?.isDiscounted && (
              <p className="absolute top-full right-0 mt-1 mr-5 text-sm font-extrabold text-[#FF0000]">
                - {data.discountAmount}원
              </p>
            )}
          </div>
        </div>

        <div>
          <span>
            제안 <span className="text-button">상세 설명</span>
          </span>
          <p className="mt-2 text-xl font-medium">{data?.message}</p>
        </div>

        <div>
          <span>
            상세 <span className="text-button">위치</span>
          </span>
          <p className="mt-2 text-xl font-medium">{data?.location}</p>
        </div>

        <div className="w-full">
          <span className="text-button">사진</span>
          <div className="mt-5 grid w-full grid-cols-5 gap-5">
            {data?.photoUrls.map((imageUrl, idx) => (
              <img
                key={idx}
                src={imageUrl}
                onError={onErrorImage}
                // src={Image}
                alt="사진"
                className="aspect-square h-full w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <Button width="w-96" className="mt-18">
        매칭 수락
      </Button>
    </section>
  );
};

export default ProposalDetailPage;
