'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ryukyu-buyou.module.css';

export default function RyukyuBuyouPage() {
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: '琉球舞踊とは — 歴史と種類を解説',
        description: '琉球舞踊は、琉球王国時代に宮廷で発展した沖縄の伝統舞踊。古典舞踊・雑踊り・創作舞踊の分類や歴史を解説。',
        author: {
          '@type': 'Person',
          name: '平敷屋門勇也',
          url: 'https://next-app-cyan-eight.vercel.app/',
        },
        publisher: {
          '@type': 'Person',
          name: '平敷屋門勇也',
        },
        url: 'https://next-app-cyan-eight.vercel.app/ryukyu-buyou',
        mainEntityOfPage: 'https://next-app-cyan-eight.vercel.app/ryukyu-buyou',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '琉球舞踊にはどのような種類がありますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '琉球舞踊は大きく3つに分類されます。琉球王国時代に宮廷で演じられた「古典舞踊」、明治以降に庶民の間で生まれた「雑踊り（ぞうおどり）」、そして現代の感性で新たに創られる「創作舞踊」です。',
            },
          },
          {
            '@type': 'Question',
            name: '古典舞踊と雑踊りの違いは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '古典舞踊は琉球王国時代に宮廷で演じられた格式高い舞踊で、老人踊り・若衆踊り・二才踊り・女踊りの4種類があります。雑踊りは明治以降に庶民文化として発展した踊りで、生活や自然を題材にした親しみやすい作品が多いのが特徴です。',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="subhero" id="hero">
        <div className="hero-bg">
          <Image src="https://jinzai.okinawa/wp-content/uploads/2026/04/琉球舞踊家-平敷屋門勇也-伝統芸能.webp" alt="琉球舞踊家 平敷屋門勇也の舞台写真" fill priority style={{ objectFit: 'cover', objectPosition: 'center 25%' }} />
        </div>
        <div className="inner">
          <div className="crumb reveal">About ・ 沖縄の伝統芸能</div>
          <h1 className="reveal stagger-1">琉球舞踊とは<small>What is Ryukyu Buyou</small></h1>
        </div>
      </header>

      {/* LEDE */}
      <section className={styles['lede-section']} id="intro">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>01</b></div>
          <div className="sec-title">沖縄の歴史と心を、<br/>身体で語る芸能<small>— Introduction —</small></div>
        </div>
        <div className={styles['lede-block']}>
          <div className={`${styles['lede-photo']} reveal-left`}>
            <Image src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也＿top.webp" alt="平敷屋門勇也 琉球舞踊の構え" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} />
            <div className={styles.frame}></div>
          </div>
          <div className={`${styles['lede-text']} reveal-right`}>
            <div className={styles.en}>A Living Tradition of the Ryukyu Kingdom</div>
            <h2>ただの踊りではない<br/>琉球の歴史そのもの</h2>
            <p>琉球舞踊（りゅうきゅうぶよう）は、沖縄で生まれた伝統的な踊り。けれど、それは「踊り」という言葉だけでは収まらない芸能です。沖縄の歴史、文化、言葉、音楽、人々の心――そのすべてを身体で語る、生きた表現の場。</p>
            <p>沖縄はかつて「琉球王国」という独立した国でした。琉球舞踊は、その王国の中で発展した芸能。だから琉球舞踊を知ることは、沖縄の歴史を知ること。そして、人々がどんな思いで生きてきたかを知ることでもあります。</p>
            <p>このページでは、500年の時間を超えて受け継がれてきた琉球舞踊の世界を、歴史・分類・衣装・鑑賞のポイントから、ご案内します。</p>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className={`${styles.history} sec-dark`} id="history">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>02</b></div>
          <div className="sec-title">500年の、舞の歴史<small>— A 500-Year Journey —</small></div>
        </div>
        <div className={styles['history-list']}>
          <div className={`${styles['hist-row']} reveal`}>
            <div className={styles['hist-era']}>Chapter I<b>琉球王国時代</b></div>
            <div className={styles['hist-body']}>
              <h3>もてなしの芸能として、生まれる。</h3>
              <p>琉球舞踊が大きく発展したのは、約500年前の琉球王国時代。当時の琉球は、中国、日本、東南アジアと貿易を行い、さまざまな文化が沖縄に流れ込んでいました。</p>
              <p>特に中国との交流は深く、中国から来た使節（しせつ）をもてなすために、王府――王国の政府――は芸能を発展させていきます。この「お客様をもてなすための芸能」が、琉球舞踊の土台となりました。沖縄独自の文化に、中国文化、日本文化が混ざり合って生まれた、混淆の芸能なのです。</p>
            </div>
          </div>
          <div className={`${styles['hist-row']} reveal stagger-1`}>
            <div className={styles['hist-era']}>Chapter II<b>1719年・組踊の誕生</b></div>
            <div className={styles['hist-body']}>
              <h3>玉城朝薫、「組踊」を創る。</h3>
              <p>1719年、踊奉行（おどりぶぎょう）の玉城朝薫が、音楽・せりふ・踊りで物語を表現する舞台芸術「組踊」を創作。これは琉球版の歌舞伎・能ともいえる総合芸術でした。</p>
              <p>この組踊の中で踊りの技術はさらに磨かれ、後の琉球舞踊に大きな影響を与えていきます。物語を中心とした組踊と、踊りそのものを中心に発展した琉球舞踊。2つは、深く呼応しながら歩んでいきました。</p>
            </div>
          </div>
          <div className={`${styles['hist-row']} reveal stagger-2`}>
            <div className={styles['hist-era']}>Chapter III<b>1879年・明治以降</b></div>
            <div className={styles['hist-body']}>
              <h3>王族の芸能から、人々の芸能へ。</h3>
              <p>1879年、日本政府によって琉球王国は廃され、沖縄県となりました（琉球処分）。王府に仕えていた踊り手たちは仕事を失います。けれど、芸能そのものは消えませんでした。</p>
              <p>踊り手たちは民間で活動を続け、芝居小屋、お祝い、地域行事、お祭りなどで踊るようになります。ここから、琉球舞踊は「王族のための芸能」から、「人々の芸能」へと広がっていきました。</p>
            </div>
          </div>
          <div className={`${styles['hist-row']} reveal stagger-3`}>
            <div className={styles['hist-era']}>Chapter IV<b>戦後・復興と継承</b></div>
            <div className={styles['hist-body']}>
              <h3>戦火を越えて、未来へ。</h3>
              <p>第二次世界大戦の沖縄戦では、多くの文化財や芸能が失われました。けれど戦後、人々は「沖縄の文化を残したい」という強い思いで、琉球舞踊を復活させていきます。</p>
              <p>今では、学校教育、伝統芸能公演、地域文化、海外公演など、あらゆる場で受け継がれています。2009年には、組踊がユネスコの無形文化遺産にも登録されました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className={styles.category} id="category">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>03</b></div>
          <div className="sec-title">大きく、2つの世界<small>— Two Main Categories —</small></div>
        </div>
        <div className={styles['cat-grid']}>
          <div className={`${styles.cat} reveal-left`}>
            <div className={styles['cat-photo']}>
              <Image src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也-女踊り-1.webp" alt="古典舞踊・女踊りの舞台写真" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className={styles.label}>No. 01</div>
            <h3>古典舞踊</h3>
            <div className={styles.reading}>こてんぶよう ・ Classical Dance</div>
            <p className={styles.desc}>王国時代、王族や中国使節をもてなすために踊られた、格式高い舞踊。感情を大げさに表現するのではなく、内側に宿る「静の美」を伝えます。</p>
            <ul className={styles.features}>
              <li>動きはゆっくり</li>
              <li>無駄が少ない</li>
              <li>気品がある</li>
              <li>所作に意味</li>
            </ul>
            <div className={styles.pieces}><b>代表演目 ／</b>かぎやで風／若衆こてい節／四つ竹／本貫花 ほか</div>
          </div>
          <div className={`${styles.cat} reveal-right`}>
            <div className={styles['cat-photo']}>
              <Image src="https://jinzai.okinawa/wp-content/uploads/2026/04/平敷屋門勇也-女踊り傘.webp" alt="古典舞踊・女踊り 傘を使った演目の舞台写真" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className={styles.label}>No. 02</div>
            <h3>雑踊</h3>
            <div className={styles.reading}>ぞうおどり ・ Folk Dance</div>
            <p className={styles.desc}>明治以降、人々の暮らしをテーマに作られた踊り。古典より親しみやすく、表情も豊か。農民、漁師、商人――普通の人々の生活が描かれます。</p>
            <ul className={styles.features}>
              <li>明るい</li>
              <li>わかりやすい</li>
              <li>動きが大きい</li>
              <li>ユーモアも</li>
            </ul>
            <div className={styles.pieces}><b>代表演目 ／</b>鳩間節／加那ヨー天川／むんじゅる ほか</div>
          </div>
        </div>
      </section>

      {/* GENRES (4 sub) */}
      <section className={styles.genres} id="genres">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>04</b></div>
          <div className="sec-title">古典の、4つの顔<small>— Four Classical Genres —</small></div>
        </div>
        <div className={styles['gen-grid']}>
          <div className={`${styles.gen} reveal`}>
            <div className={styles.num}>No. 01</div>
            <h4>老人踊</h4>
            <div className={styles.reading}>Roujin-odori</div>
            <p>年配の人物を演じる踊り。ゆったりとした動きで、人生経験や落ち着きを表現する。</p>
            <div className={styles.play}><span>代表演目</span>かぎやで風</div>
            <a href="https://youtu.be/-kuvDDRBjm0" target="_blank" rel="noopener noreferrer" className={styles['yt-link']}>
              <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              実際の演舞を見る
            </a>
          </div>
          <div className={`${styles.gen} reveal stagger-1`}>
            <div className={styles.num}>No. 02</div>
            <h4>若衆踊</h4>
            <div className={styles.reading}>Wakashu-odori</div>
            <p>若い男性を表現する踊り。力強さと美しさ、品の良さが同居する。昔は男性のみが踊った。</p>
            <div className={styles.play}><span>代表演目</span>若衆ゼイ</div>
            <a href="https://youtu.be/oT-CSjwOwLY" target="_blank" rel="noopener noreferrer" className={styles['yt-link']}>
              <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              実際の演舞を見る
            </a>
          </div>
          <div className={`${styles.gen} reveal stagger-2`}>
            <div className={styles.num}>No. 03</div>
            <h4>女踊</h4>
            <div className={styles.reading}>Onna-odori</div>
            <p>女性の優雅さを表現する踊り。柔らかな手の動き、静かな感情、控えめな美しさ。勇也が最も得意とする世界。</p>
            <div className={styles.play}><span>代表演目</span>四つ竹</div>
            <a href="https://youtu.be/-yWQf8OWeEE" target="_blank" rel="noopener noreferrer" className={styles['yt-link']}>
              <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              実際の演舞を見る
            </a>
          </div>
          <div className={`${styles.gen} reveal stagger-3`}>
            <div className={styles.num}>No. 04</div>
            <h4>二才踊</h4>
            <div className={styles.reading}>Nisai-odori</div>
            <p>青年男性の踊り。若者らしい元気さと勇ましさ。鍛えられた構えと足の運びが見せ場。</p>
            <div className={styles.play}><span>代表演目</span>高平良萬歳</div>
            <a href="https://youtu.be/X8TzHKZyzw0" target="_blank" rel="noopener noreferrer" className={styles['yt-link']}>
              <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              実際の演舞を見る
            </a>
          </div>
        </div>
        <div style={{ padding: '20px 50px 0', fontSize: '11px', color: 'var(--sub)', textAlign: 'right' }} className="reveal">
          <a href="https://www.pref.okinawa.lg.jp/bunkakoryu/bunkageijutsu/1009556/1009653/1027669.html" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
            ※沖縄県公式ホームページより引用
          </a>
        </div>
      </section>

      {/* COSTUME */}
      <section className={styles.costume} id="costume">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>05</b></div>
          <div className="sec-title">色と柄に、意味がある<small>— Costume & Bingata —</small></div>
        </div>

        <div className={styles['cost-intro']}>
          <div className={`${styles['cost-photo']} reveal-left`}>
            <Image src="https://jinzai.okinawa/wp-content/uploads/2026/04/%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A-%E7%90%89%E8%A3%85-1.webp" alt="琉球舞踊の伝統衣装「琉装（りゅうそう）」" fill style={{ objectFit: 'cover', objectPosition: 'center 25%' }} />
          </div>
          <div className="reveal-right">
            <p>琉球舞踊の衣装は、「琉装（りゅうそう）」と呼ばれる、琉球王国独自の衣装文化。中国や日本の影響を受けながらも、沖縄の強い太陽と豊かな自然の中で、独自の鮮やかさを獲得していきました。</p>
            <p>大胆な色使い、南国の花や鳥の柄、海と波。そのすべてに、意味がある。実は、王国時代には、自由に好きな色を着ることは許されませんでした。色には「身分」や「立場」、そして「祈り」が込められていたのです。</p>
          </div>
        </div>

        <div className={styles['colors-grid']}>
          <div className={`${styles['color-card']} reveal`}>
            <div className={styles.swatch} style={{ background: 'linear-gradient(135deg, #e8c441 0%, #c19a1f 100%)', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08)' }}></div>
            <div className={styles.label}>No.01 / Ki-iro</div>
            <h5>黄色</h5>
            <p>最も位が高い、王族の色。太陽のような特別な色として扱われた。</p>
          </div>
          <div className={`${styles['color-card']} reveal stagger-1`}>
            <div className={styles.swatch} style={{ background: 'linear-gradient(135deg, #5d2d6e 0%, #3a1a48 100%)' }}></div>
            <div className={styles.label}>No.02 / Murasaki</div>
            <h5>紫</h5>
            <p>高貴さと品格の色。古典舞踊で気品を伝える、重要な色。</p>
          </div>
          <div className={`${styles['color-card']} reveal stagger-2`}>
            <div className={styles.swatch} style={{ background: 'linear-gradient(135deg, #b6201e 0%, #7a0e0e 100%)' }}></div>
            <div className={styles.label}>No.03 / Aka</div>
            <h5>赤</h5>
            <p>生命力と祝福。祝いの舞踊、華やかな女踊によく見られる。</p>
          </div>
          <div className={`${styles['color-card']} reveal stagger-3`}>
            <div className={styles.swatch} style={{ background: 'linear-gradient(135deg, #4a7fb8 0%, #1f4d80 100%)' }}></div>
            <div className={styles.label}>No.04 / Ao</div>
            <h5>青</h5>
            <p>沖縄の海と空を感じさせる、爽やかな色。雑踊にも多い。</p>
          </div>
          <div className={`${styles['color-card']} reveal stagger-4`}>
            <div className={styles.swatch} style={{ background: 'linear-gradient(135deg, #f5efe3 0%, #ddd3bd 100%)', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08)' }}></div>
            <div className={styles.label}>No.05 / Shiro</div>
            <h5>白</h5>
            <p>清らかさと神聖さ。衣装の内側や、足袋などに使われる。</p>
          </div>
        </div>

        <div className={`${styles.bingata} reveal`}>
          <div className={styles['bingata-image']}></div>
          <div className={styles.text}>
            <div className={styles['ja-label']}>No. 06 ・ Bingata</div>
            <h3>紅型</h3>
            <div className={styles.read}>びんがた ・ Okinawa&apos;s Traditional Dyed Cloth</div>
            <p>「紅」は多彩な色、「型」は模様――その名の通り、沖縄を代表する色彩の染物。琉球王国時代には王族や士族の衣装として使われ、女踊では今もなお舞台の華となっています。</p>
            <p>南国の花や鳥、海や波、植物。沖縄の自然そのものが、布の上に咲く。舞台に紅型衣装が登場した瞬間、空気が一気に変わる。それが、琉球舞踊の衣装の力です。</p>
            <div style={{ marginTop: '20px', fontSize: '11px', color: 'var(--sub)' }}>
              <a href="https://www.okinawaclip.com/post/1702013872/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                紅型写真：OKINAWACLIP　よみもの記事より引用
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIEWING POINTS */}
      <section className={`${styles.viewing} sec-dark`} id="viewing">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>06</b></div>
          <div className="sec-title">鑑賞の、4つの視点<small>— How to Watch —</small></div>
        </div>

        <div className={`${styles['label-top']} reveal`}>Before you watch</div>
        <p className={`${styles['viewing-lede']} reveal stagger-1`}>
          全部を理解しようとしなくて、大丈夫。<br/>
          <em>感じる</em>こと、<em>気づく</em>こと。<br/>
          そこから、琉球舞踊の世界が、ひらいていきます。
        </p>

        <div className={styles['points-grid']}>
          <div className={`${styles.point} reveal`}>
            <div className={styles.num}>Point <b>01</b></div>
            <h4>「静けさ」の<br/>美を味わう。</h4>
            <p>琉球舞踊は、激しく動く踊りではありません。ゆっくり、静か、丁寧に。けれどその静けさの中にこそ、喜び・恋しさ・悲しみ・敬意が宿る。少しの動きに、大きな意味がある芸能です。</p>
            <div className={styles.ex}>Listen carefully<b>呼吸の間（ま）に、耳を澄ます</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-1`}>
            <div className={styles.num}>Point <b>02</b></div>
            <h4>「手の動き」を<br/>追いかける。</h4>
            <p>琉球舞踊の手は、ただ動いているのではありません。花、波、恋心。指先1本で、物語が描かれます。手のひらが上を向く時、下を向く時。その違いに、こめられた感情を感じてみてください。</p>
            <div className={styles.ex}>Watch the hands<b>花のように、波のように</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-2`}>
            <div className={styles.num}>Point <b>03</b></div>
            <h4>「足運び」と<br/>「目線」を見る。</h4>
            <p>静かに見える足運びは、実はとても高度な技術。重心の移動、床との会話があります。そして目線――どこを見ているか、誰を思っているか。視線の先に、踊り手が描く世界が広がっています。</p>
            <div className={styles.ex}>Follow the gaze<b>視線の先に、物語がある</b></div>
          </div>
          <div className={`${styles.point} reveal`}>
            <div className={styles.num}>Point <b>04</b></div>
            <h4>「衣装の色と柄」を<br/>読む。</h4>
            <p>踊り手が黄色を着ていれば、それは王族を意味します。波の模様には、命や旅や永遠が込められている。色と柄を「読む」ことで、舞台の意味は何倍にも深くなります。衣装は、もう一つの台詞です。</p>
            <div className={styles.ex}>Read the costume<b>色は身分、柄は祈り</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-1`}>
            <div className={styles.num}>Point <b>05</b></div>
            <h4>「音楽の流れ」に<br/>呼吸を合わせる。</h4>
            <p>三線、歌、箏、笛、太鼓。踊り手は音を「数える」のではなく、音楽の流れに呼吸を合わせます。観る側も同じです。リズムを取ろうとせず、音と一緒に息をする。それが、舞台と1つになる瞬間です。</p>
            <div className={styles.ex}>Breathe with music<b>三線の音色を、身体で聴く</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-2`}>
            <div className={styles.num}>Point <b>06</b></div>
            <h4>「型」の中の<br/>個性を見る。</h4>
            <p>琉球舞踊には、長い歴史の中で受け継がれてきた「型」があります。自由に見えて、実は細かいルールがある。だからこそ、上手な人ほど、自然に見える。型の中で、それぞれの踊り手がどう自分を表現しているか――それも鑑賞の醍醐味です。</p>
            <div className={styles.ex}>Within the form<b>型の中に、その人がいる</b></div>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section className={styles.music} id="music">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>07</b></div>
          <div className="sec-title">舞踊の心臓、三線。<small>— Sanshin & Music —</small></div>
        </div>
        <div className={styles['music-grid']}>
          <div className={`${styles['music-text']} reveal-left`}>
            <h3>音楽と一体になって、<br/>はじめて舞踊になる。</h3>
            <p>琉球舞踊において、音楽は伴奏ではなく、舞踊そのものの一部です。中心となるのが三線（さんしん）。蛇皮を張った三本弦の楽器で、沖縄音楽の心と呼ばれています。</p>
            <p>三線の音色、歌い手の声、箏や笛の旋律、太鼓のリズム。踊り手は音を数えるのではなく、音楽の流れに呼吸を合わせていきます。だからこそ、舞踊は生きる。同じ演目でも、その夜の三線の調子で、踊りが少し違って見える――それが琉球舞踊の生きた魅力です。</p>
            <div className={styles['music-instruments']}>
              <div className={styles.instr}><b>三線</b><small>Sanshin</small></div>
              <div className={styles.instr}><b>歌</b><small>Uta</small></div>
              <div className={styles.instr}><b>箏</b><small>Koto</small></div>
              <div className={styles.instr}><b>笛</b><small>Fue</small></div>
              <div className={styles.instr}><b>太鼓</b><small>Taiko</small></div>
              <div className={styles.instr}><b>胡弓</b><small>Kucho</small></div>
            </div>
          </div>
          <div className={`${styles['music-visual']} reveal-right`}>
            <div className={styles['label-overlay']}>三線<small>SANSHIN</small></div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className={`${styles.closing} reveal`} id="closing">
        <div className={styles['closing-mark']}>&quot;</div>
        <p className={styles['closing-text']}>
          静かな動きの中に、礼儀、品格、<br/>
          感情、歴史を込める芸能。<br/>
          少しの動きに、大きな意味がある。<br/>
          そこが、琉球舞踊の1番深い魅力です。
        </p>
        <div className={styles['closing-actions']}>
          <Link href="/sousaku" className={styles['closing-cta']}>
            <small>琉球舞踊を鑑賞したい方はこちら</small>
            創作舞踊集団へ →
          </Link>
          <Link href="/yuibana" className={styles['closing-cta']}>
            <small>琉球舞踊を学んでみたい方はこちら</small>
            道場へ →
          </Link>
        </div>
      </section>
    </>
  );
}
