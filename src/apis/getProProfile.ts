import { publicInstance } from '@/libs/axios';
import type { getProPrifleResponseDto } from '@/types/ProPrifleType';

export const getProProfile = async (userId: number) => {
  try {
    const response = await publicInstance.get<getProPrifleResponseDto>('/mypage/pro', {
      params: { userId },
    });
    //console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error('axios 에러');
  }
};
