/*
전문가(트레이너) 가 조회 가능한
'요청 현황'페이지 입니다,
*/
import Button from '@/components/Button';
import { mockRequestsDetail } from '@/data/requests';
import RequestsStatusCard from '@/features/Requests/RequestsStatusCard';
import { useState } from 'react';

const RequestsForTrainer = () => {
  const [_ismodalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='w-[700px] h-auto mx-auto flex flex-col gap-[30px] mt-20'>
      <div className='flex flex-row justify-start gap-4 mb-4'>
        <Button className="text-white">최신순</Button>
        <Button className="text-white">가격 높은순</Button>
      </div>
      <div className='flex flex-col gap-[30px]'>
        {/* 요청 현황 카드 컴포넌트 */}
        {mockRequestsDetail.map((request) => (
          <RequestsStatusCard key={request.id} {...request} handleModalClose={handleModalClose} handleModalOpen={handleModalOpen}/>
        ))}
    </div>
    </div>
  );
};

export default RequestsForTrainer;
