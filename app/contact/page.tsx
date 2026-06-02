'use client';

import { useEffect, useState, FormEvent, useRef } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const thanksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      if (thanksRef.current) {
        window.scrollTo({
          top: thanksRef.current.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  return (
    <>
      <header className="subhero" id="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/女踊り_平敷屋門勇也写真_260519_21.webp')" }}></div>
        <div className="inner">
          <div className="crumb reveal">Contact ・ お問合せ</div>
          <h1 className="reveal stagger-1">舞台のご依頼、<br/>承ります<small>Inquiry & Booking</small></h1>
        </div>
      </header>

      <section id="form">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>01</b></div>
          <div className="sec-title">お問合せフォーム<small>— Inquiry Form —</small></div>
        </div>

        <div className={styles.contactWrap}>
          {/* LEFT: intro & info */}
          <div className={`reveal-left ${styles.ctIntro}`}>
            <h2>
              ご相談、お待ち<br/>しております
              <small>For any stage & inquiry</small>
            </h2>
            <p>
              舞台の出演依頼、創作公演のご相談、取材・メディア出演、稽古場の見学・体験など、まずはお気軽にお声がけください。内容を拝見し、担当よりご返信させていただきます。
            </p>
            <p style={{ color: 'var(--sub)', fontSize: '13px', lineHeight: 1.9 }}>
              ※ ご返信までに数日いただく場合がございます。お急ぎの方は、SNSのダイレクトメッセージもご活用ください。
            </p>

            <dl className={styles.ctInfo}>
              <div><dt>稽古場 / Studio</dt><dd>沖縄県沖縄市泡瀬</dd></div>
              <div><dt>所属流派 / School</dt><dd>玉城流光乃会 平敷屋門勇也琉舞道場</dd></div>
              <div><dt>SNS / Instagram</dt>
                <dd>
                  <a href="https://www.instagram.com/heshikiyajouyuuya/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>@heshikiyajouyuuya ・ 平敷屋門 勇也</a>
                  <a href="https://www.instagram.com/champuryu_geinoudan/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '6px' }}>@champuryu_geinoudan ・ チャンプ流ぅ芸能団</a>
                  <a href="https://www.instagram.com/yuibana.2011/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '6px' }}>@yuibana.2011 ・ 結華</a>
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT: form */}
          <div className="reveal-right">
            {!isSubmitted ? (
              <form className={styles.form} id="contactForm" onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">お名前 <span className={styles.req}>REQUIRED</span></label>
                  <input type="text" id="name" name="name" placeholder="山田 太郎" required />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-email">ご連絡先 <span className={styles.req}>REQUIRED</span></label>
                  <div className={styles.row}>
                    <input type="email" id="contact-email" name="email" placeholder="メールアドレス" required />
                    <input type="tel" id="tel" name="tel" placeholder="電話番号（任意）" />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>お問合せの種類</label>
                  <div className={styles.checks}>
                    <label className={styles.check}>
                      <input type="checkbox" name="topic" value="dojo" />
                      <span className={styles.ja}>琉舞道場について</span>
                      <span className={styles.en}>About the Dojo</span>
                    </label>
                    <label className={styles.check}>
                      <input type="checkbox" name="topic" value="booking" />
                      <span className={styles.ja}>各種出演依頼</span>
                      <span className={styles.en}>Stage & Performance Booking</span>
                    </label>
                    <label className={styles.check}>
                      <input type="checkbox" name="topic" value="media" />
                      <span className={styles.ja}>取材依頼</span>
                      <span className={styles.en}>Media & Interview</span>
                    </label>
                    <label className={styles.check}>
                      <input type="checkbox" name="topic" value="other" />
                      <span className={styles.ja}>その他</span>
                      <span className={styles.en}>Others</span>
                    </label>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">お問合せ内容 <span className={styles.req}>REQUIRED</span></label>
                  <textarea id="message" name="message" placeholder="ご相談内容、ご希望の日時や場所など、ご自由にお書きください。" required></textarea>
                </div>

                <button type="submit" className={styles.submit}>送信する ・ SUBMIT</button>
                <p className={styles.note}>
                  ※ 送信ボタンを押すと、ご記入いただいた内容をもとに担当者へお知らせが届きます。
                </p>
              </form>
            ) : null}

            {/* Thanks state */}
            <div
              className={`${styles.thanks} ${isSubmitted ? styles.show : ''}`}
              id="thanks"
              ref={thanksRef}
            >
              <div className={styles.mark}>✦</div>
              <h3>お問合せありがとうございました。</h3>
              <p>
                内容を確認のうえ、改めてご連絡させていただきます。<br/>
                いただきましたご縁に、心より感謝申し上げます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
