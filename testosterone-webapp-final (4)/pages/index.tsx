import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!name || !email) {
      alert('이름과 이메일을 입력해주세요.');
      return;
    }
    const hrv = 52;
    const testosterone = hrv * 1.35 + 180 + Math.random() * 50;
    setResult(testosterone);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>테스토스테론 측정기</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', marginBottom: 10, padding: 10 }}
      />
      <input
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: 10, padding: 10 }}
      />
      <button onClick={handleSubmit} style={{ padding: 10 }}>
        측정하기
      </button>
      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <p>{name}님의 예상 테스토스테론 수치:</p>
          <h2>{result.toFixed(2)} ng/dL</h2>
        </div>
      )}
    </div>
  );
}
