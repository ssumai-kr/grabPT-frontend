import { privateInstance } from '@/libs/axios';

export interface ProDescriptionPayload {
  description: string;
}

// 프로 설명 description Edit (토큰 자동 주입)
export const editProDescription = async (payload: ProDescriptionPayload) => {
  const { data } = await privateInstance.patch('/mypage/pro/description', payload);
  return data;
};
