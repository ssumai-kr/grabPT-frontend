import { privateInstance } from '@/libs/axios';
import type { CommonResponseDto } from '@/types/commonResponseDto';

interface certificationResponse {
  certificationType: string;
  description: string;
  imageUrl?: string;
}

interface ProCertificationResponse {
  certifications: certificationResponse[];
}

export type getProCertificationResponseDto = CommonResponseDto<ProCertificationResponse>;

export const getProCertifications = async (): Promise<getProCertificationResponseDto> => {
  try {
    const response = await privateInstance.get<getProCertificationResponseDto>(
      '/mypage/pro/certification',
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw Error('axios 에러');
  }
};
