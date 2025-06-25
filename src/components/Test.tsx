import { useBearStore } from '@/store/useStore';

function Test() {
  const { bears, increase } = useBearStore();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <p className="text-lg text-black">곰의 수: {bears}</p>

      <button
        onClick={() => increase(1)}
        className="rounded bg-pink-300 px-4 py-2 text-black transition-colors duration-200 hover:bg-pink-500"
      >
        곰 +1
      </button>
    </div>
  );
}

export default Test;
