//지역 타입(나중에 추가 예정)
export type Province =
  | '서울'
  | '경기'
  | '인천'
  | '강원'
  | '대전'
  | '세종'
  | '충북'
  | '충남'
  | '경남'
  | '경북'
  | '대구'
  | '광주'
  | '전남'
  | '전북'
  | '제주';

export type CityMap = Record<Province, string[]>;

export const regions: CityMap = {
  서울: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  경기: ['성남시', '수원시', '용인시'],
  인천: ['연수구', '남동구'],
  강원: [],
  대전: [],
  세종: [],
  충북: [],
  충남: [],
  경남: [],
  경북: [],
  대구: [],
  광주: [],
  전남: [],
  전북: [],
  제주: [],
};

export type Location = {
  province: Province;
  city: string;
};
