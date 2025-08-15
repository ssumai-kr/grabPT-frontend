import type { CommonResponseDto } from '@/types/commonResponseDto';

export type proposalDetailType = {
  nickname: string;
  center: string;
  profileImageUrl: string;
  suggestedPrice: number;
  originalPrice: number;
  discountAmount: number;
  isDiscounted: true;
  message: string;
  location: string;
  photoUrls: string[];
};

export type getProposalDetailResponseDto = CommonResponseDto<proposalDetailType>;
