// src/pages/UserMainPage.tsx
import React, { useRef } from 'react';
import RequestCardScroll from '@/features/home/components/RequestCardScroll';
import mockRequests from '@/features/home/data/dummy';
import UserSearchSection from '@/features/home/components/UserSearchSection';

const UserMainPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="p-10 flex flex-col gap-10">
      {/* 유저 검색창 */}
    <UserSearchSection />

      {/* 요청서 섹션 */}
      <section ref={sectionRef}>
        <h2 className="text-xl font-bold mb-4">나의 요청서</h2>
        <RequestCardScroll requests={mockRequests} />
      </section>
    </div>
  );
};

export default UserMainPage;
