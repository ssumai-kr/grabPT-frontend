import EditIcon from '@/assets/images/pencil.svg';
import CancelIcon from '@/assets/images/cancelIcon.svg';
import SaveIcon from '@/assets/images/save.svg';

interface MyProfileEditButtonProps {
  onClick?: () => void;
}

//수정 버튼 컴포넌트
export const MyProfileEditButton = ({ onClick }: MyProfileEditButtonProps) => {
  return (
    <div className='w-[60px] h-[30px] flex items-center justify-center gap-1 cursor-pointer' onClick={onClick}>
      <span>수정</span>
      <img src={EditIcon} alt="Edit Icon"></img>
    </div>
  );
};

//변경 취소 컴포넌트
export const MyProfileEditCancelButton = ({ onClick }: MyProfileEditButtonProps) => {
  return (
    <div className='w-[60px] h-[30px] flex items-center justify-center gap-1 cursor-pointer' onClick={onClick}>
      <span>취소</span>
      <img src={CancelIcon} alt="Cancel Icon"></img>
    </div>
  );
};

export const MyProfileEditSaveButton = ({ onClick }: MyProfileEditButtonProps) => {
  return (
    <div className='w-[60px] h-[30px] flex items-center justify-center gap-1 cursor-pointer' onClick={onClick}>
      <span>저장</span>
      <img src={SaveIcon} alt="Save Icon"></img>
    </div>
  );
}