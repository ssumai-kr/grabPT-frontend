import { useState } from 'react';

import SportsTypeSelector from '@/components/SportsTypeSelector';
import Badminton from '@/features/Signup/assets/Badminton.png';
import Boxing from '@/features/Signup/assets/Boxing.png';
import Cycle from '@/features/Signup/assets/Cycle.png';
import Golf from '@/features/Signup/assets/Golf.png';
import Pilates from '@/features/Signup/assets/Pliates.png';
import Running from '@/features/Signup/assets/Running.png';
import Swimming from '@/features/Signup/assets/Swimming.png';
import Tabletennis from '@/features/Signup/assets/Tabletennis.png';
import Tennis from '@/features/Signup/assets/Tennis.png';
import Weight from '@/features/Signup/assets/Weight.png';
import { SportsType } from '@/types/SportsType';

const SelectSportStep = () => {
  const options: ReadonlyArray<{ type: SportsType; img: string }> = [
    { type: SportsType.WEIGHT, img: Weight },
    { type: SportsType.PILATES, img: Pilates },
    { type: SportsType.GOLF, img: Golf },
    { type: SportsType.TENNIS, img: Tennis },
    { type: SportsType.SWIMMING, img: Swimming },
    { type: SportsType.BOXING, img: Boxing },
    { type: SportsType.BADMINTON, img: Badminton },
    { type: SportsType.RUNNING, img: Running },
    { type: SportsType.CYCLE, img: Cycle },
    { type: SportsType.TABLETENNIS, img: Tabletennis },
  ];
  const [selected, setSelected] = useState<SportsType | null>(null);
  return (
    <div>
      <header>원하는 운동 종목을 선택해주세요</header>
      <SportsTypeSelector options={options} value={selected} onChange={setSelected} />
    </div>
  );
};

export default SelectSportStep;
