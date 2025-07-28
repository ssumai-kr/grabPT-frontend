// SlickArrows.tsx
import ArrowRight from '@/features/home/assets/icons/ArrowRight';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 m-0 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-300 bg-white p-0 shadow transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <ArrowRight className="aspect-square h-[60px] w-[60px] rotate-180" />
  </button>
);

export const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-300 bg-white p-0 shadow transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <ArrowRight className="aspect-square h-[60px] w-[60px]" />
  </button>
);

