'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 900);
    const fallback = setTimeout(() => setDone(true), 3000);
    return () => { clearTimeout(timer); clearTimeout(fallback); };
  }, []);

  return (
    <div className={`loader${done ? ' done' : ''}`} aria-hidden="true">
      <div className="loader-brand">
        平敷屋門 勇也
        <small>Heshikiya-jou Yuya ・ Ryukyu Dancer</small>
      </div>
      <div className="loader-line"></div>
    </div>
  );
}
