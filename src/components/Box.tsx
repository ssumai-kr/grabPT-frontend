interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return (
    // 일단 고정크기 설정. 추후 반응형 도입
    <div className="h-[214px] w-[800px] rounded-[10px] shadow-[4px_4px_10px_0_rgba(0,0,0,0.2)]">
      {children}
    </div>
  );
};

export default Box;
