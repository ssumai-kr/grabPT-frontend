import { useState } from 'react';

import AppLogo from '@/assets/images/AppLogo.png';
import {
  Header,
  개인정보처리방침,
  환불및취소규정,
  회원의권리및의무,
} from '@/features/Contract/assets/ContractText';

const ContractFormPage = () => {
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleAgree = () => {
    setIsAgree((prev) => !prev);
  };

  return (
    <section className="flex flex-col items-center whitespace-pre-line">
      <div>
        <img src={AppLogo} alt="로고" />
        <h1>PT(퍼스널 트레이닝) 계약서</h1>
      </div>

      <hr />

      <article>
        <p>{Header}</p>

        <div>
          <div></div>
          <div></div>
        </div>

        <p>환불 및 취소 규정</p>
        <p>{환불및취소규정}</p>
        <p>회원의 권리 및 의무</p>
        <p>{회원의권리및의무}</p>
        <p>개인정보 처리 방침</p>
        <p>{개인정보처리방침}</p>
      </article>

      <div className="flex gap-3">
        <input
          type="checkbox"
          className="accent-button"
          checked={isAgree}
          onChange={handleAgree}
          aria-label="고객 요청 수락"
        />
        <p>(필수) 개인정보 수집,이용에 동의합니다</p>
      </div>

      <hr />

      <p>상기 계약 내용을 충분히 이해하고 상호 합의하여 계약을 체결합니다.</p>

      {/* 서명박스 */}
      <div className="flex"></div>
    </section>
  );
};

export default ContractFormPage;
