// src/apis/patchMyPage.ts
import { publicInstance } from '@/libs/axios';

export interface MypageAddressPayload {
  city: string;
  district: string;
  street: string;
  zipcode: string;
  streetCode?: string;   // UI용
  specAddress?: string;  // UI용
}

export interface MyPagePatchPayload {
  nickname?: string;
  address?: MypageAddressPayload;
  profileImageFile?: File;
}

export const patchMyPage = async (payload: MyPagePatchPayload) => {
  // 서버 스펙: request는 query, image는 multipart body
  const requestObj = {
    nickname: payload.nickname ?? '',
    address: payload.address
      ? {
          city: payload.address.city,
          district: payload.address.district,
          street: payload.address.street,
          zipcode: payload.address.zipcode,
        }
      : undefined,
  };

  const requestQuery = encodeURIComponent(JSON.stringify(requestObj));

  const formData = new FormData();
  // 이미지 없을 때도 파트 존재 기대하는 서버 대비
  formData.append(
    'image',
    payload.profileImageFile ?? new Blob([], { type: 'application/octet-stream' }),
    payload.profileImageFile ? payload.profileImageFile.name : ''
  );

  const { data } = await publicInstance.patch(
    `/mypage?request=${requestQuery}`,
    formData,
    {
      // ⛔ 인스턴스 기본 JSON 헤더를 무력화
      transformRequest: [
        (data, headers) => {
          // axios 머지된 기본 헤더에서 Content-Type 제거 -> 브라우저가 boundary 포함해 자동 설정
          delete (headers as any)['Content-Type'];
          delete (headers as any)['content-type'];
          // 필요하면 Accept만 유지
          headers['Accept'] = 'application/json';
          return data;
        },
      ],
      // 여기서 Content-Type 직접 지정하지 마세요!
      // headers: { 'Content-Type': 'multipart/form-data' },
    }
  );

  return data;
};
