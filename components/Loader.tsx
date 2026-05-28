'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('loaderDone')) {
      setDone(true);
      setSkip(true);
      return;
    }
    const timer = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem('loaderDone', 'true');
    }, 900);
    const fallback = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem('loaderDone', 'true');
    }, 3000);
    return () => { clearTimeout(timer); clearTimeout(fallback); };
  }, []);

  return (
    <div className={`loader${done ? ' done' : ''}`} style={{ display: skip ? 'none' : 'flex' }} aria-hidden="true">
      <div className="loader-brand">
        平敷屋門 勇也
        <small>Heshikiyajou Yuya</small>
      </div>
      <div className="loader-line"></div>
    </div>
  );
}
