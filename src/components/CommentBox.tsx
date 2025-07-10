interface CommentBoxprops {
  placeholder?: string;
}

function CommentBox({ placeholder = '• 내용을 입력해주세요.' }: CommentBoxprops) {
  return (
    <div className="relative w-full">
      {/* 글자 수 카운터 */}
      <div className="text-right text-[14px]">0/700</div>

      {/* 입력 영역 */}
      <textarea
        className="h-[433px] w-full resize-none rounded-lg border border-[#CCCCCC] bg-[#F5F5F5] p-4 text-sm leading-relaxed placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default CommentBox;
