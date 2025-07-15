import { memo, useMemo } from 'react';

import { Link } from 'react-router-dom';

import Box from '@/components/Box';
import { useUserRoleStore } from '@/store/useUserRoleStore';

function ProfileDropdown() {
  const { isExpert } = useUserRoleStore();

  //   isExpert 변경시에만
  const dropdownItems = useMemo(
    () => (isExpert ? ['내정보', '정산 관리', '로그아웃'] : ['내정보', '로그아웃']),
    [isExpert],
  );

  const DropdownItem = ({ label }: { label: string }) => (
    <div className="flex h-[53px] w-[124px] items-center pl-[30px]">
      <Link className="text-[#374151]" to="/">
        {label}
      </Link>
    </div>
  );

  return (
    <Box width="" height="" className="rounded-xl bg-white">
      <div className="text-lg leading-[normal] font-semibold">
        {dropdownItems.map((item) => (
          <DropdownItem key={item} label={item} />
        ))}
      </div>
    </Box>
  );
}

export default memo(ProfileDropdown);
