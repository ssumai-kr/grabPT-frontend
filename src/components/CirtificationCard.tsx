import { useEffect, useRef, useState } from 'react';
import Button from './Button';

interface CirtificationCardProps {
  CirtificationCode?: number;
  CirtificationDescription?: string;
}
/*
0:학력
1:자격증
2:경력인증
3:수상기록
*/

export const CirtificationCard = ({
  CirtificationCode,
  CirtificationDescription,
}: CirtificationCardProps) => {
  return (
    <div className="flex h-[50px] w-[600px] items-center justify-between rounded-[10px] bg-[#EFEFEF]">
      <div className="w-[140px] text-center">{CirtificationCode ?? '수상'}</div>
      <div className="h-[30px] w-[1px] border border-[#ACACAC]"></div>
      <div className="w-[460px] text-center">{CirtificationDescription ?? '내용'}</div>
    </div>
  );
};

export const CirtificationEditCard = () => {
  const options = ["학력", "자격증", "경력인증", "수상기록"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const [fileName, setFileName] = useState<string>(""); // 파일명 상태
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null); // 숨겨진 파일 input 참조

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 파일 선택 시 파일명 저장
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="mt-[40px] flex h-[220px] w-[600px] flex-col items-center gap-[10px] bg-gray-100 pt-4">
      <div className="flex gap-[10px]">
        {/* 유형 드롭다운 */}
        <label className="flex flex-col">
          유형
          <div ref={dropdownRef} className="relative w-[120px]">
            <div
              className="h-[50px] w-full cursor-pointer rounded-[10px] border border-gray-300 bg-white px-3 flex items-center justify-between"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="text-center w-full">{selected}</span>
              <span className="text-gray-500 text-sm">▼</span>
            </div>
            {isOpen && (
              <ul className="absolute top-full left-0 mt-1 w-full rounded-[10px] border border-gray-300 bg-white shadow-lg z-10">
                {options.map((option) => (
                  <li
                    key={option}
                    className={`cursor-pointer px-3 py-2 rounded-[10px] hover:bg-gray-100 text-center ${
                      selected === option ? "bg-gray-100 font-semibold" : ""
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </label>

        {/* 내용 입력 */}
        <label className="flex flex-col">
          내용
          <input
            className="h-[50px] w-[400px] rounded-[10px] border border-gray-300 bg-white text-center"
          />
        </label>
      </div>

      {/* 사진 첨부 */}
      <div
        className="flex h-[50px] w-[530px] cursor-pointer items-center justify-center rounded-[10px] border border-gray-300 bg-[#B7C3FB] text-center text-[#003EFB]"
        onClick={() => fileInputRef.current?.click()}
      >
        {fileName || "사진 첨부(필수)"}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* 버튼 */}
      <div className="flex gap-2">
        <Button className="cursor-pointer">취소</Button>
        <Button width="w-[200px]" className="cursor-pointer">
          추가
        </Button>
      </div>
    </div>
  );
};
