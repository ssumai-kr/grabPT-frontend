import { useEffect, useState } from 'react';
import Button from './Button';
import type { PtPrice } from '@/types/ProPrifleType';

interface PriceItemProps {
  pricePerOne?: number | null;   // 1회 가격 (고정행)
  ptPrices?: PtPrice[];          // [{ sessionCount, price }]
  onChange?: (items: PtPrice[]) => void; // (선택) 부모에 변경 알림
}

type UiRow = { count: string; price: string };

const ProfilePriceInput = ({ pricePerOne, ptPrices, onChange }: PriceItemProps) => {
  // ptPrices로 초기값 세팅 (없으면 빈 1행)
  const [prices, setPrices] = useState<UiRow[]>(
    () =>
      ptPrices?.map(p => ({ count: String(p.sessionCount), price: String(p.price) })) ??
      [{ count: '', price: '' }]
  );

  // 외부 ptPrices 변경 시 동기화
  useEffect(() => {
    setPrices(
      ptPrices?.map(p => ({ count: String(p.sessionCount), price: String(p.price) })) ??
      [{ count: '', price: '' }]
    );
  }, [ptPrices]);

  // (선택) 부모에 변경사항 전달
  useEffect(() => {
    if (!onChange) return;
    const cleaned: PtPrice[] = prices
      .map(r => ({
        sessionCount: Number(r.count),
        price: Number(r.price),
      }))
      .filter(p => Number.isFinite(p.sessionCount) && p.sessionCount > 0 && Number.isFinite(p.price) && p.price >= 0);
    onChange(cleaned);
  }, [prices, onChange]);

  const handleAddPrice = () => {
    setPrices(prev => [...prev, { count: '', price: '' }]);
  };

  const handleChange = (index: number, field: 'count' | 'price', value: string) => {
    setPrices(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleRemovePrice = (index: number) => {
    setPrices(prev => {
      const next = prev.filter((_, i) => i !== index);
      // 모두 삭제되면 최소 1행은 남겨서 UI가 빈 상태에서 입력 가능
      return next.length ? next : [{ count: '', price: '' }];
    });
  };

  return (
    <div className="flex flex-col gap-[20px]">
      {/* 1회 입력 (고정) */}
      <div className="flex h-[50px] w-[520px] items-center gap-[10px]">
        <div className="flex h-[50px] w-[85px] items-center justify-center rounded-[10px] border border-[#BABABA] px-2">
          1
        </div>
        <span className='text-[18px] font-semibold'>회</span>
        <input
          type="number"
          inputMode="numeric"
          className="h-[50px] w-[260px] rounded-[10px] border border-[#BABABA] px-2 text-center"
          placeholder={pricePerOne != null ? String(pricePerOne) : ''}
          // 고정행이면 값 편집/저장 로직이 따로 있으면 연결하세요
          // value / onChange를 붙이면 컨트롤드로도 전환 가능
        />
        <span className='text-[18px] font-semibold'>원</span>
      </div>

      {/* 가변적으로 추가/삭제되는 행 */}
      {prices.map((item, idx) => (
        <div key={idx} className="flex h-[50px] w-[520px] items-center gap-[10px]">
          <input
            type="number"
            inputMode="numeric"
            value={item.count}
            onChange={(e) => handleChange(idx, 'count', e.target.value)}
            className="h-[50px] w-[85px] rounded-[10px] border border-[#BABABA] px-2 text-center"
            placeholder="횟수"
          />
          <span className='text-[18px] font-semibold'>회</span>
          <input
            type="number"
            inputMode="numeric"
            value={item.price}
            onChange={(e) => handleChange(idx, 'price', e.target.value)}
            className="h-[50px] w-[260px] rounded-[10px] border border-[#BABABA] px-2 text-center"
            placeholder="가격"
          />
          <span className='text-[18px] font-semibold'>원</span>
          <Button onClick={() => handleRemovePrice(idx)}>삭제</Button>
        </div>
      ))}

      <Button
        onClick={handleAddPrice}
        className="mt-[20px] h-[50px] w-[400px] rounded-[10px] bg-[#FFB800] text-white"
      >
        가격 추가
      </Button>
    </div>
  );
};

export default ProfilePriceInput;
