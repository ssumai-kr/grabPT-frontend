import { useRef } from 'react';

import SignatureCanvas from 'react-signature-canvas';
import type ReactSignatureCanvas from 'react-signature-canvas';

interface SignatrueBoxProps {
  title: string;
}

const SignatureBox = ({ title }: SignatrueBoxProps) => {
  const sigCanvas = useRef<ReactSignatureCanvas | null>(null);

  return (
    <div className="flex flex-col items-center gap-8 bg-white px-9 py-5">
      <h1 className="text-sm font-semibold">{title}</h1>
      <div className="relative flex">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          throttle={0}
          canvasProps={{ className: 'bg-[#EFEFEF] w-full h-full' }}
        />
        <button
          type="button"
          onClick={() => sigCanvas.current?.clear()}
          className="absolute top-2 right-2 rounded bg-gray-200 px-2"
        >
          지우기
        </button>
      </div>
    </div>
  );
};

export default SignatureBox;
