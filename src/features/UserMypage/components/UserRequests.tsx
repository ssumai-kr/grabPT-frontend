import RequestCard from '@/features/UserMypage/components/RequestCard';

function UserRequests() {
  const request = {
    name: '날다람주날닮았쥐',
    location: '서울시 강서구 화곡동',
    center: '용암동헬스장 브라이언박 트레이닝 센터',
    category: ['복싱', '아침, 점심, 저녁', '주 2회'],
    content:
      '너무너무 친절하시고, 운동하면서 부족한 부분을 너무 잘 지적해주셨습니다!! 저는 20회 추가 PT 신청했습니다!!~~~~~~~~~~~~~~~~~~~~~~~~~',
  };

  const requests = Array.from({ length: 5 }, () => request);

  return (
    <div className="flex justify-center">
      <div className="mt-[50px] flex w-[800px] flex-col gap-[30px]">
        {requests.map((rq) => (
          <RequestCard
            name={rq.name}
            location={rq.location}
            center={rq.center}
            category={rq.category}
            content={rq.content}
          />
        ))}
      </div>
    </div>
  );
}

export default UserRequests;
