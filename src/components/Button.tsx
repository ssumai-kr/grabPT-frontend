import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  width?: string; // Tailwind 폭 클래스
  height?: string; // Tailwind 높이 클래스
  text?: string; // Tailwind 텍스트·폰트 클래스
}

function Button({
  label = '버튼',
  width = 'w-[98px]',
  height = 'h-[42px]',
  text = 'text-[15px] font-semibold',
  className = '',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  // 각 문자열 뒤에 공백 추가
  const base =
    'flex items-center justify-center rounded-[10px] ' +
    'bg-[color:var(--color-button)] hover:bg-[color:var(--color-button-hover)] ' +
    'active:bg-[color:var(--color-button-pressed)]';

  const merged = [base, width, height, text, className].filter(Boolean).join(' ');

  return (
    <button aria-label={label} className={merged} {...rest}>
      {children}
    </button>
  );
}

export default Button;
