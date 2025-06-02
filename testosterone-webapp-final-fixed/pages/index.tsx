
import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!email || !name) {
      alert('이름과 이메일을 모두 입력해주세요.');
      return;
    }
    const calculated = 350 + Math.random() * 200;
    setResult(calculated);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>테스토스테론 추정 시스템</h1>
      <input type="text" placeholder="이름 입력" value={name} onChange={e => setName(e.target.value)} style={{ display: 'block', marginBottom: 10, padding: 10 }} />
      <input type="email" placeholder="이메일 입력" value={email} onChange={e => setEmail(e.target.value)} style={{ display: 'block', marginBottom: 10, padding: 10 }} />
      <button onClick={handleSubmit} style={{ padding: 10, marginBottom: 20 }}>결과 보기</button>
      {result && (
        <div>
          <p><strong>{name}</strong>님의 예상 테스토스테론 수치는 <strong>{result.toFixed(2)} ng/dL</strong> 입니다.</p>
          <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({ name, email, result }))}`} download="testosterone-result.json">
            결과 다운로드
          </a>
        </div>
      )}
    </div>
  );
}
