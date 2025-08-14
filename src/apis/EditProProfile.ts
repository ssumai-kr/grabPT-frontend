import { multipartInstance, privateInstance } from '@/libs/axios';

export interface ProDescriptionPayload {
  description: string;
}

export interface ProPhotosPayload {
  photos: string[];
}

// 프로 설명 description Edit (토큰 자동 주입)
export const editProDescription = async (payload: ProDescriptionPayload) => {
  const { data } = await privateInstance.patch('/mypage/pro/description', payload);
  return data;
};

export const editProPhotos = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('photos', file); // 키 이름은 photos (curl 예시와 동일)
  });

  const { data } = await multipartInstance.patch('/mypage/pro/photos', formData);
  return data;
};