import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string; // 접근성 레이블
}

// 텍스트는 children으로 추가
// 추가 요소 사용 시 rest문법 사용
function Button({ label, children, ...rest }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      aria-label={label}
      className="flex h-[42px] w-[98px] items-center justify-center rounded-[10px] bg-[#003EFB] text-[15px] font-semibold text-white"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
