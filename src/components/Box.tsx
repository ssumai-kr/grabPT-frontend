interface BoxProps {
  children: React.ReactNode;
}

function Box({ children }: BoxProps) {
  return (
    <div className="h-[180px] w-[800px] rounded-[10px] shadow-[4px_4px_10px_0_rgba(0,0,0,0.2)]">
      {children}
    </div>
  );
}

export default Box;
