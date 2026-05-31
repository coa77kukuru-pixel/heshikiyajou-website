'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function YuibanaPage() {
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

  return (
    <>
      {/* HERO */}
      <header className={styles['page-hero']} id="hero">
        <div className={styles.left}>
          <div className={`${styles.eyebrow} reveal`}>琉球舞踊道場</div>
          <h1 className="reveal stagger-1" style={{ fontSize: 'clamp(28px, 3.8vw, 54px)' }}>
            玉城流乃会<br />平敷屋門勇也琉舞道場<small>Ryukyu Dance Dojo</small>
          </h1>
          <p className={`${styles.lede} reveal stagger-2`}>
            ２歳から大人の方まで幅広くお稽古をしています。<br /><br />
            芸を深めたい方から、健康のために足腰を鍛えいつまでも元気な心とカラダでいることを目的に通われる方もいらっしゃいます。<br /><br />
            ご希望に合わせたお稽古内容を一度、ご相談下さい。
          </p>
          <Link className="ig-pill reveal stagger-3" href="/contact">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span className="handle">お問合せ</span>
          </Link>
        </div>
        <div className={`${styles.right} hero-bg`} style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E7%B5%90%E8%8F%AF%E3%82%AD%E3%83%83%E3%82%BA-%E6%B2%96%E7%B8%84%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A-%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-1.webp')" }}></div>
      </header>

      {/* LOCATIONS */}
      <section className={`${styles.locations} sec-dark`} id="locations">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>01</b></div>
          <div className="sec-title">稽古場のご案内<small>— Dojo Locations —</small></div>
        </div>
        <div className={styles.locGrid}>
          <div className={`${styles.locCard} reveal`}>
            <div className={styles.locBadge}>本部</div>
            <h3>沖縄市泡瀬</h3>
            <div className={styles.locSub}>Awase, Okinawa City</div>
            <p>メインの稽古場。約50名の子どもたちが所属する、結華の拠点です。キッズクラスから選抜クラスまで、すべてのクラスを開講しています。</p>
            <div className={styles.locRecruit}>
              <div className={styles.locStatus}><span className={styles.statusOpen}></span>生徒募集中</div>
              <div className={styles.locNote}>キッズ・基礎クラスともに募集中</div>
            </div>
          </div>
          <div className={`${styles.locCard} reveal stagger-1`}>
            <h3>うるま市</h3>
            <div className={styles.locSub}>Uruma City</div>
            <p>うるま市エリアの稽古場。中部エリアからのアクセスに便利です。お近くの方はこちらでもお稽古いただけます。</p>
            <div className={styles.locRecruit}>
              <div className={styles.locStatus}><span className={styles.statusOpen}></span>生徒募集中</div>
              <div className={styles.locNote}>詳細はお問い合わせください</div>
            </div>
          </div>
          <div className={`${styles.locCard} reveal stagger-2`}>
            <h3>那覇市</h3>
            <div className={styles.locSub}>Naha City</div>
            <p>那覇市エリアの稽古場。南部からのアクセスに便利です。那覇周辺にお住まいの方もお気軽にご参加いただけます。</p>
            <div className={styles.locRecruit}>
              <div className={styles.locStatus}><span className={styles.statusFew}></span>残りわずか</div>
              <div className={styles.locNote}>詳細はお問い合わせください</div>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className={styles.message} id="message">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>02</b></div>
          <div className="sec-title">道場長からのご挨拶<small>— Message from Yuya —</small></div>
        </div>
        <div className={styles['msg-body']}>
          <div className={`${styles['msg-photo']} reveal-left`} style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A.webp')" }}>
            <div className={styles.frame}></div>
          </div>
          <div className={`${styles['msg-text']} reveal-right`}>
            <p>当道場では、まず「楽しむ」ことを第一の指導方針としています。小さな子どもたちには、琉球音楽に合わせて元気に体を動かすところから。舞踊の所作を覚える前に、まず音と仲間と、この場所そのものを好きになってほしいと願っています。</p>
            <p>そこから少しずつ、本格的な理解へ。コンクールへの挑戦、舞台への出演という具体的な目標へと、一人ひとりの歩幅に合わせて導いていきます。技術だけではなく、挨拶や礼儀、仲間との協調といった、人としての土台を育てる場所でありたい。それが「結華」という名に込めた願いです。</p>
            <p>たくさんの子どもたちが、いつかこの道場を離れたとしても、きっとまた別の場所で伝統芸能を学びながら舞台に立っていると思います。私自身も、足腰が痛いと言いながら自分に鞭を打って、精一杯、たくさんの舞台に出演していると思います。30年後、また同じ景色を、一緒に見られたら幸せです。</p>
            <div className={styles['msg-sign']}>
              <div style={{ width: '54px', height: '54px', border: '2px solid var(--crimson)', background: 'rgba(139,26,26,.9)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '11px', letterSpacing: '.1em', lineHeight: 1.2, textAlign: 'center', transform: 'rotate(-4deg)', fontWeight: 700 }}>平敷屋門<br />勇也</div>
              <div><b>平敷屋門 勇也</b><small>Founder &amp; President ・ Yuibana</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className={`${styles.steps} sec-dark`} id="steps">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>03</b></div>
          <div className="sec-title">3つの成長のステップ<small>— Growth Stages —</small></div>
        </div>
        <div className={styles['step-grid']}>
          <div className={`${styles.step} reveal`}>
            <div className={styles.n}>STEP 01</div>
            <div className={styles.age}>age 2 – 6</div>
            <h3>導入期<br />「まずは、楽しむ。」</h3>
            <p>音楽に合わせて元気に体を動かす。ジャンプ、ジャンプ。難しい所作の前に、踊りそのものを「好き」になる時間。小さなお子様でも、無理なく自然に始められます。</p>
          </div>
          <div className={`${styles.step} reveal stagger-1`}>
            <div className={styles.n}>STEP 02</div>
            <div className={styles.age}>age 7 – 13</div>
            <h3>育成期<br />「踊りと、人を、育てる。」</h3>
            <p>本格的な琉球舞踊の理解へ。所作・音曲・衣裳の世界を、ひとつずつ。同時に、挨拶や礼儀、仲間との協調を学び、人としての土台を育む情操教育の時間です。</p>
          </div>
          <div className={`${styles.step} reveal stagger-2`}>
            <div className={styles.n}>STEP 03</div>
            <div className={styles.age}>age 14 – 18</div>
            <h3>実践期<br />「舞台で、自分を咲かせる。」</h3>
            <p>コンクール挑戦、創作舞踊集団「結」での選抜舞台。本番直前、寒い稽古場で「精一杯頑張ろう」「とりあえず楽しもうぜ」と声を掛け合える、強い表現者へ。</p>
          </div>
        </div>
        <div className={`${styles['step-foot']} reveal`}>
          そして、その先へ。<br />
          道場を離れた後も、それぞれの場所で、それぞれの形で、伝統芸能と舞台を愛する心を持ち続けて欲しい。<br />
          生涯にわたって芸能を愛する人を育てること。それが、結華の最終的なゴールです。
        </div>
      </section>

      {/* DREAMS */}
      <section className={styles.dreams} id="dreams">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>04</b></div>
          <div className="sec-title">30年後の、じぶんへ<small>— Dreams of Yuibana Kids —</small></div>
        </div>
        <p className="reveal" style={{ fontFamily: 'var(--serif)', fontSize: '16px', lineHeight: 2.1, color: 'var(--ink-2)', maxWidth: '760px', margin: '-50px 0 70px' }}>
          舞踊家になることだけが、答えではありません。<br />
          結華の子どもたちが、稽古場で語ってくれた「将来の夢」を、そのままに。
        </p>
        <div className={styles['dream-list']}>
          <div className={`${styles['dream-row']} reveal`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👧🏻</div><div className={styles.who}>Aちゃん<small>（5歳）</small></div></div>
            <div className={styles['dream-bubble']}><p>おっきくなったら、プリキュアになりたい！</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal stagger-1`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👧🏽</div><div className={styles.who}>Bちゃん<small>（6歳）</small></div></div>
            <div className={styles['dream-bubble']}><p>プリンセスがいい。きれいなドレスをきて、おどりたい。</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal stagger-2`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>🧒🏻</div><div className={styles.who}>Cちゃん<small>（小2）</small></div></div>
            <div className={styles['dream-bubble']}><p>ほいくえんのせんせいになりたいです。こどもにやさしくしたい。</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👱🏻‍♀️</div><div className={styles.who}>Dさん<small>（小5）</small></div></div>
            <div className={styles['dream-bubble']}><p>美容師さんと、ネイリストの両方になりたい。お母さんをきれいにしてあげたいから。</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal stagger-1`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👩🏻</div><div className={styles.who}>Eさん<small>（中2）</small></div></div>
            <div className={styles['dream-bubble']}><p>大好きな韓国に住んで、K-POPアイドルをしていますか？</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal stagger-2`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👩🏼‍🦰</div><div className={styles.who}>Fさん<small>（高1）</small></div></div>
            <div className={styles['dream-bubble']}><p>美容を、頑張っています。</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👩🏻‍🎓</div><div className={styles.who}>Gさん<small>（高2）</small></div></div>
            <div className={styles['dream-bubble']}><p>自分の好きな仕事をして、幸せに暮らしていますか？ どこかの舞台で、また結華のみんなと会えていたら、嬉しい。</p></div>
          </div>
          <div className={`${styles['dream-row']} reveal stagger-1`}>
            <div className={styles['dream-avatar']}><div className={styles.icon}>👩🏻‍💼</div><div className={styles.who}>卒業生<small>（OG）</small></div></div>
            <div className={styles['dream-bubble']}><p>結華では、踊りだけじゃなくて、人間としての部分も教えていただいた。自分にとって、本当に大切な場所だった。</p></div>
          </div>
          
          <div className={`${styles['dream-row']} reveal stagger-2`} style={{ marginTop: '20px' }}>
            <div className={styles['dream-avatar']}>
              <div className={styles.icon} style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/yuyaheshikiyajou.webp')", backgroundSize: 'cover', backgroundPosition: 'center', border: '2px solid var(--crimson)' }}></div>
              <div className={styles.who}>勇也先生<small>（道場長）</small></div>
            </div>
            <div className={styles['dream-bubble']}>
              <p>沖縄の芸能を楽しんでほしい。そして、大きくなったときに琉球舞踊を通して、感じたこと・経験したことが、この先の未来に少しでも役にたてば嬉しいです。<br />舞台の可能性は、踊ることだけではないと思っています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO TABLE */}
      <section className={styles.info} id="classes">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>05</b></div>
          <div className="sec-title">クラスのご案内<small>— Class &amp; Tuition —</small></div>
        </div>
        <div className={styles['info-table']}>
          <div className={`${styles['info-row']} ${styles.head} reveal`}>
            <div>クラス / Class</div>
            <div>対象年齢 / Age</div>
            <div>稽古日時 / Schedule</div>
            <div>月謝 / Tuition</div>
          </div>
          <div className={`${styles['info-row']} reveal`}>
            <div className={styles.cls}>キッズクラス<small>Kids Class</small></div>
            <div className={styles.v}><b>2歳 〜 小学校低学年</b>音楽に合わせて楽しく踊る</div>
            <div className={styles.v}><b>毎週 火曜・木曜</b>17:00 〜 18:00</div>
            <div className={styles.v}><b>お問い合わせください</b>体験：無料</div>
          </div>
          <div className={`${styles['info-row']} reveal stagger-1`}>
            <div className={styles.cls}>基礎クラス<small>Standard Class</small></div>
            <div className={styles.v}><b>小学校中学年 〜 中学生</b>基礎・コンクール挑戦</div>
            <div className={styles.v}><b>毎週 火曜・木曜</b>18:00 〜 19:30</div>
            <div className={styles.v}><b>お問い合わせください</b>体験：無料</div>
          </div>
          <div className={`${styles['info-row']} reveal stagger-2`}>
            <div className={styles.cls}>選抜「結」<small>Selected Yui</small></div>
            <div className={styles.v}><b>選抜 ・ 〜18歳</b>舞台出演を目指す</div>
            <div className={styles.v}><b>毎週 + 不定期</b>19:30 〜 21:00 ほか</div>
            <div className={styles.v}><b>お問い合わせください</b>選抜制</div>
          </div>
        </div>
        <p className={`${styles['info-note']} reveal`}>
          ※ 稽古場：沖縄市泡瀬。現在約50名の子どもたちが所属しています。<br />
          ※ 月謝・入会金・衣裳代等の詳細は、お問い合わせまたは見学時にご案内いたします。
        </p>
      </section>

      {/* JOIN STEPS */}
      <section className={styles.join} id="join">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>06</b></div>
          <div className="sec-title">ご入会までの、3歩<small>— How to Join —</small></div>
        </div>
        <div className={styles['join-grid']}>
          <div className={`${styles['join-step']} reveal`}>
            <div className={styles.num}>Step <b>01</b></div>
            <h4>お問い合わせ・<br />見学のご予約</h4>
            <p>専用フォーム、またはお電話にて、見学・体験のご希望日をお気軽にご連絡ください。お子様の年齢や経験を伺い、最適なクラスをご案内します。</p>
          </div>
          <div className={`${styles['join-step']} reveal stagger-1`}>
            <div className={styles.num}>Step <b>02</b></div>
            <h4>道場で、<br />無料の見学・体験</h4>
            <p>実際の稽古場の空気を、肌で感じてください。動きやすい服装、お飲み物、タオルをご持参ください。お子様の「やってみたい」の声を、まずは聞いてあげましょう。</p>
          </div>
          <div className={`${styles['join-step']} reveal stagger-2`}>
            <div className={styles.num}>Step <b>03</b></div>
            <h4>ご入会の<br />お手続き</h4>
            <p>体験後、お子様ご自身の「やりたい」という意思を確認してから、ご入会のお手続きをご案内します。無理な勧誘は一切ございません。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} id="faq">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>07</b></div>
          <div className="sec-title">よくあるご質問<small>— FAQ —</small></div>
        </div>
        <div className={styles['faq-list']}>
          <div className={`${styles['faq-item']} reveal`}>
            <div className={styles['faq-q']}>Q.01</div>
            <div className={styles['faq-body']}>
              <h4>全くの初心者ですが、ついていけるか不安です。</h4>
              <p>全く問題ありません。当道場では「まずは楽しむ」ことを第一の指導方針としています。小さなお子様や初心者の方には、琉球の音楽に合わせて元気に体を動かすところからスタート。成長に合わせて段階的に本格的な理解へと導いていきますので、安心してお任せください。</p>
            </div>
          </div>
          <div className={`${styles['faq-item']} reveal`}>
            <div className={styles['faq-q']}>Q.02</div>
            <div className={styles['faq-body']}>
              <h4>何歳から入会できますか？</h4>
              <p>2歳から18歳まで、幅広い年齢のお子様が所属しています。現在、約50名の子どもたちが通っており、年齢やレベルに合わせたクラス分けを行っていますので、小さなお子様でも無理なくスタートできます。</p>
            </div>
          </div>
          <div className={`${styles['faq-item']} reveal`}>
            <div className={styles['faq-q']}>Q.03</div>
            <div className={styles['faq-body']}>
              <h4>伝統芸能の道場というと、将来は必ず舞踊の道に進まないといけないのでしょうか？</h4>
              <p>そんなことは全くありません。道場の子どもたちは、保育園の先生、美容師、K-POPアイドルなど、実に多様で自由な夢を持っています。私たちは、舞踊を通して礼儀や協調性など「人としての部分」を育む情操教育の場でありたいと考えています。どんな夢であっても全力で応援する環境です。</p>
            </div>
          </div>
          <div className={`${styles['faq-item']} reveal`}>
            <div className={styles['faq-q']}>Q.04</div>
            <div className={styles['faq-body']}>
              <h4>本格的にコンクールや舞台出演を目指すこともできますか？</h4>
              <p>はい、もちろん可能です。日々の稽古を通して、コンクールへの挑戦や舞台出演を目指す指導もしっかりと行っています。指導者自身も現役の琉球舞踊家として国立劇場おきなわなどで舞台に立っており、実践的なパフォーマンスを学ぶことができます。</p>
            </div>
          </div>
          <div className={`${styles['faq-item']} reveal`}>
            <div className={styles['faq-q']}>Q.05</div>
            <div className={styles['faq-body']}>
              <h4>見学・体験の際は、何を持っていけばいいですか？</h4>
              <p>動きやすい服装、お飲み物、タオルをご持参ください。沖縄市泡瀬にある道場で、子どもたちが活き活きと稽古に励む明るい雰囲気を、ぜひ一度体感しに来てください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} reveal`} id="cta">
        <h2>まずは、道場の空気を感じに、<br />いらしてください</h2>
        <p>言葉だけでは伝わらない、<br />子どもたちの笑い声と、稽古場の熱。<br />見学・体験は、いつでも無料でお迎えしています。</p>
        <Link className={styles.btn} href="/#contact">見学・体験のお問い合わせ →</Link>
        <div className={styles['ig-row']}>
          <span>Follow Yuibana ・</span>
          <a href="https://www.instagram.com/yuibana.2011/" target="_blank" rel="noopener noreferrer" aria-label="Yuibana Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
            </svg>
          </a>
          <span>@yuibana.2011</span>
        </div>
      </section>
    </>
  );
}
