'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './first-time.module.css';

export default function FirstTimePage() {
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

    // Scroll highlight observer for .point
    const pointEls = document.querySelectorAll(`.${styles.point}`);
    if (pointEls.length) {
      const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.active);
          } else {
            e.target.classList.remove(styles.active);
          }
        });
      }, { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' });
      pointEls.forEach(el => highlightObserver.observe(el));
      return () => {
        observer.disconnect();
        highlightObserver.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="subhero" id="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/万国津梁館-創作舞踊-創作エイサー-結華.webp')" }}></div>
        <div className="inner">
          <div className="crumb reveal">For First-time Viewers ・ はじめての方へ</div>
          <h1 className="reveal stagger-1">はじめての方へ<small>Your First Step into Ryukyu Buyou</small></h1>
        </div>
      </header>

      {/* WELCOME */}
      <section className={styles.welcome} id="welcome">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>01</b></div>
          <div className="sec-title">琉球舞踊が、<br />はじめての方へ<small>— Welcome —</small></div>
        </div>
        <div className={styles.welcomeBlock}>
          <div className={`${styles.welcomePhoto} reveal-left`} style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E6%B2%96%E7%B8%84%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A-%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E6%B2%96%E7%B8%84-1-1.webp')" }}>
            <div className={styles.frame}></div>
          </div>
          <div className={`${styles.welcomeText} reveal-right`}>
            <div className={styles.en}>Don&apos;t try to understand everything</div>
            <h2>全部を理解しなくて<br />大丈夫です</h2>
            <p>琉球舞踊は、ゆっくりと、静かに、そして丁寧に踊られる芸能です。激しく動くわけでも、大きな声で叫ぶわけでもない。だから、「何を見ればいいんだろう？」と最初は戸惑うかもしれません。</p>
            <p>でも、心配いりません。全部を理解しようとしなくていい。ただ、感じてみる。気づいてみる。それだけで、舞台の景色は、ずっと豊かに見えてきます。</p>
            <p>このページでは、はじめての方が琉球舞踊を楽しむための「鑑賞のポイント」と、舞台に登場する「小道具」の意味をご紹介します。一つでも知っていると、舞台がぐっと近づきます。</p>
          </div>
        </div>
      </section>

      {/* GUIDE NAV */}
      <div className={`${styles.guideNav} reveal`}>
        <div className={styles.label}>Index<b>このページの構成</b></div>
        <ul>
          <li><a href="#viewing">① 鑑賞の6つのポイント</a></li>
          <li><a href="#props">② 小道具の意味</a></li>
          <li><a href="#deeper">③ もっと深く楽しむために</a></li>
        </ul>
      </div>

      {/* VIEWING POINTS */}
      <section className={`${styles.viewing} sec-dark`} id="viewing">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>02</b></div>
          <div className="sec-title">鑑賞の、六つの視点<small>— How to Watch —</small></div>
        </div>

        <p className={`${styles.viewingLede} reveal stagger-1`}>
          全部を理解しようとしなくて、大丈夫。<br />
          <em>感じる</em>こと、<em>気づく</em>こと。<br />
          そこから、琉球舞踊の世界が、ひらいていきます。
        </p>

        <div className={styles.pointsGrid}>
          <div className={`${styles.point} reveal`}>
            <div className={styles.num}>Point 1</div>
            <h4>「静けさ」の<br />美を味わう。</h4>
            <p>琉球舞踊は、激しく動く踊りではありません。ゆっくり、静か、丁寧に。けれどその静けさの中にこそ、喜び・恋しさ・悲しみ・敬意が宿る。少しの動きに、大きな意味がある芸能です。</p>
            <div className={styles.ex}>Listen carefully<b>呼吸の間（ま）に、耳を澄ます</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-1`}>
            <div className={styles.num}>Point 2</div>
            <h4>「手の動き」を<br />追いかける。</h4>
            <p>琉球舞踊の手は、ただ動いているのではありません。花、波、恋心。指先一本で、物語が描かれます。手のひらが上を向く時、下を向く時。その違いに、こめられた感情を感じてみてください。</p>
            <div className={styles.ex}>Watch the hands<b>花のように、波のように</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-2`}>
            <div className={styles.num}>Point 3</div>
            <h4>「足運び」と<br />「目線」を見る。</h4>
            <p>静かに見える足運びは、実はとても高度な技術。重心の移動、床との会話があります。そして目線――どこを見ているか、誰を思っているか。視線の先に、踊り手が描く世界が広がっています。</p>
            <div className={styles.ex}>Follow the gaze<b>視線の先に、物語がある</b></div>
          </div>
          <div className={`${styles.point} reveal`}>
            <div className={styles.num}>Point 4</div>
            <h4>「衣装の色と柄」を<br />読む。</h4>
            <p>踊り手が黄色を着ていれば、それは王族を意味します。波の模様には、命や旅や永遠が込められている。色と柄を「読む」ことで、舞台の意味は何倍にも深くなります。衣装は、もう一つの台詞です。</p>
            <div className={styles.ex}>Read the costume<b>色は身分、柄は祈り</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-1`}>
            <div className={styles.num}>Point 5</div>
            <h4>「音楽の流れ」に<br />呼吸を合わせる。</h4>
            <p>三線、歌、箏、笛、太鼓。踊り手は音を「数える」のではなく、音楽の流れに呼吸を合わせます。観る側も同じです。リズムを取ろうとせず、音と一緒に息をする。それが、舞台と一つになる瞬間です。</p>
            <div className={styles.ex}>Breathe with music<b>三線の音色を、身体で聴く</b></div>
          </div>
          <div className={`${styles.point} reveal stagger-2`}>
            <div className={styles.num}>Point 6</div>
            <h4>「型」の中の<br />個性を見る。</h4>
            <p>琉球舞踊には、長い歴史の中で受け継がれてきた「型」があります。自由に見えて、実は細かいルールがある。だからこそ、上手な人ほど、自然に見える。型の中で、それぞれの踊り手がどう自分を表現しているか――それも鑑賞の醍醐味です。</p>
            <div className={styles.ex}>Within the form<b>型の中に、その人がいる</b></div>
          </div>
        </div>
      </section>

      {/* PROPS INTRO */}
      <section className={styles.propsIntro} id="props">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>03</b></div>
          <div className="sec-title">小道具に、すべての意味が宿る<small>— The Meaning of Stage Props —</small></div>
        </div>

        <div className={`${styles.propsQuote} reveal stagger-1`}>
          <div className={styles.smallLabel}>Before we begin</div>
          <h3>琉球舞踊の小道具は、<br />言葉の代わりに感情を語るもの。</h3>
          <p>琉球舞踊は、感情を大きく叫ばない芸能です。だからこそ、扇や四つ竹といった小道具に、意味を込めて表現します。ただの飾りではなく、身分、感情、季節、女性らしさ、男性らしさ、祈り、豊穣、喜び――そのすべてを伝えるための、もう一つの言葉です。</p>
          <div className={styles.propsTags}>
            <span>身分</span>
            <span>感情</span>
            <span>季節</span>
            <span>女性らしさ</span>
            <span>男性らしさ</span>
            <span>祈り</span>
            <span>豊穣</span>
            <span>喜び</span>
          </div>
        </div>
      </section>

      {/* PROP 01 - 四つ竹 */}
      <section className={styles.prop} id="yotsudake">
        <div className={`${styles.propHead} reveal`}>
          <div className={styles.propNum}>No. <b>01</b></div>
          <div className={styles.propTitle}>四つ竹 <em>ゆつだけ ／ Yotsudake</em><small>〜 琉球舞踊を象徴する音 〜</small></div>
        </div>
        <div className={styles.propBody}>
          <div className={`${styles.propText} reveal-left`}>
            <p className={styles.lead}>竹を打ち合わせて、<br />&quot;カチッ、カチッ&quot;と<br />美しい音を鳴らす。</p>
            <p>琉球舞踊で最も有名な小道具の一つが「四つ竹」です。両手の指に四枚の竹片を結びつけ、踊り手が打ち合わせて、澄んだ音を鳴らします。</p>
            <p>あの音は、ただリズムを取っているのではありません。舞台に〈祝いの空気〉を生み出している。特に古典女踊では、上品な動きの中に、四つ竹の澄んだ音が響く。それだけで、空気が変わります。</p>

            <div className={styles.propMeanings}>
              <div className={styles.label}>Meaning ・ 込められた意味</div>
              <ul>
                <li>お祝い</li>
                <li>喜び</li>
                <li>華やかさ</li>
                <li>王国文化の優雅さ</li>
              </ul>
            </div>
            <p className={styles.propPiece}><b>代表演目 ／</b>「四つ竹」</p>
          </div>
          <div className={`${styles.propPhoto} reveal-right`}>
            <div style={{ width: '100%', height: '100%', background: "#f5f0e8 url('https://jinzai.okinawa/wp-content/uploads/2026/04/yotudake.webp') center/contain no-repeat" }}></div>
            <div className={styles.badge}>Photo ・ Yotsudake</div>
          </div>
        </div>
      </section>

      {/* PROP 02 - 扇 */}
      <section className={styles.prop} id="sensu">
        <div className={`${styles.propHead} reveal`}>
          <div className={styles.propNum}>No. <b>02</b></div>
          <div className={styles.propTitle}>扇 <em>おうぎ ／ Sensu</em><small>〜 自然や感情を表現する 〜</small></div>
        </div>
        <div className={styles.propBody}>
          <div className={`${styles.propPhoto} reveal-left`}>
            <div style={{ width: '100%', height: '100%', background: "#f5f0e8 url('https://jinzai.okinawa/wp-content/uploads/2026/04/ryukyubuyou-sensu.webp') center/contain no-repeat" }}></div>
            <div className={styles.badge}>Photo ・ Sensu</div>
          </div>
          <div className={`${styles.propText} reveal-right`}>
            <p className={styles.lead}>少し開くだけ。<br />静かに返すだけ。<br />それだけで空気が変わる。</p>
            <p>扇も、琉球舞踊にとって非常に重要な小道具です。演目によって、その意味は変わります。花、波、月、風、手紙、想い――踊り手が扇を扱う、その一瞬の角度や速度で、舞台の意味が変わります。</p>
            <p>琉球舞踊では、扇を大きく派手に使わないことが多い。少し開くだけ、静かに返すだけ。ここに、琉球舞踊独特の「静かな表現」が宿ります。引き算の美学です。</p>

            <div className={styles.propMeanings}>
              <div className={styles.label}>Meaning ・ 込められた意味</div>
              <ul>
                <li>花</li>
                <li>波</li>
                <li>月</li>
                <li>風</li>
                <li>手紙</li>
                <li>想い</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROP 03 - 花笠 */}
      <section className={styles.prop} id="hanagasa">
        <div className={`${styles.propHead} reveal`}>
          <div className={styles.propNum}>No. <b>03</b></div>
          <div className={styles.propTitle}>花笠 <em>はながさ ／ Hanagasa</em><small>〜 女性美と祝福の象徴 〜</small></div>
        </div>
        <div className={styles.propBody}>
          <div className={`${styles.propText} reveal-left`}>
            <p className={styles.lead}>舞台に花笠が出ると、<br />一気に琉球王朝の<br />華やかな空気になる。</p>
            <p>大きな花笠は、古典女踊で特に有名です。これは単なる「帽子」ではありません。鮮やかな紅色を中心に、ときに金や緑が添えられた、舞台を象徴する一枚。</p>
            <p>花笠には、華やかさ、女性の美しさ、王国文化、お祝いという意味が込められています。踊り手が花笠を持って舞台に現れた瞬間――それは、王朝時代の宴のはじまりを告げる合図でもあります。</p>

            <div className={styles.propMeanings}>
              <div className={styles.label}>Meaning ・ 込められた意味</div>
              <ul>
                <li>華やかさ</li>
                <li>女性の美しさ</li>
                <li>王国文化</li>
                <li>お祝い</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.propPhoto} reveal-right`}>
            <div style={{ width: '100%', height: '100%', background: "#f5f0e8 url('https://jinzai.okinawa/wp-content/uploads/2026/04/花笠.webp') center/contain no-repeat" }}></div>
            <div className={styles.badge}>Photo ・ Hanagasa</div>
          </div>
        </div>
      </section>

      {/* MINI GRID - props 4–7 */}
      <section className={styles.propsGrid} id="other-props">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>04</b></div>
          <div className="sec-title">暮らしと、海と、祝福と<small>— Other Stage Props —</small></div>
        </div>
        <div className={styles.miniGrid}>
          <div className={`${styles.mini} reveal`}>
            <div className={styles.num}>No. 04</div>
            <h4>打花</h4>
            <div className={styles.read}>うちばな ・ Uchibana</div>
            <p>演目によっては、花びらをまく演出があります。沖縄では祝いの文化がとても大切にされてきました。だから琉球舞踊でも、「祝う空気」を作る小道具が多いのです。</p>
            <div className={styles.meanings}><b>Meaning</b>幸せ ／ 祝福 ／ 喜び</div>
          </div>
          <div className={`${styles.mini} reveal stagger-1`}>
            <div className={styles.num}>No. 05</div>
            <h4>手ぬぐい・布</h4>
            <div className={styles.read}>てぬぐい ・ Tenugui</div>
            <p>雑踊では、布や手ぬぐいが使われることがあります。庶民の生活を表現するための小道具。古典舞踊より、人間らしい感情が出やすい場面で登場します。</p>
            <div className={styles.meanings}><b>Meaning</b>働く女性 ／ 農作業 ／ 恋愛 ／ 日常生活</div>
          </div>
          <div className={`${styles.mini} reveal stagger-2`}>
            <div className={styles.num}>No. 06</div>
            <h4>棒・櫂</h4>
            <div className={styles.read}>ぼう・かい ・ Bou &amp; Kai</div>
            <p>演目によっては、棒、船の櫂、漁具なども登場します。海と共に生きてきた沖縄の暮らしを表しています。沖縄にとって海は、命、貿易、旅、別れ、豊かさ――そのすべてに繋がる存在でした。</p>
            <div className={styles.meanings}><b>Meaning</b>命 ／ 貿易 ／ 旅 ／ 豊かさ</div>
          </div>
        </div>
      </section>

      {/* DEEPER */}
      <section className={`${styles.deeper} sec-dark`} id="deeper">
        <div className="sec-head reveal">
          <div className="sec-num" style={{ color: '#d4a23a' }}>Section <b>05</b></div>
          <div className="sec-title">もっと、深く<br />楽しむために<small>— Going Deeper —</small></div>
        </div>
        <div className={styles.deeperGrid}>
          <div className={`${styles.deeperCard} reveal`}>
            <div className={styles.n}>Insight <b style={{ fontStyle: 'normal', fontFamily: 'var(--serif)', color: 'var(--paper)', fontSize: '32px', display: 'block', marginTop: '6px', letterSpacing: 0, fontWeight: 500 }}>07</b></div>
            <h4>小道具は、「役に<br />なりきるため」のもの。</h4>
            <p>琉球舞踊では、小道具を持つことで、踊り手の身体や空気が変わります。例えば扇を持つと、手の角度、指先、視線、呼吸まで変わる。つまり小道具は、演技の一部なのです。役になるための、もう一つの身体。</p>
          </div>
          <div className={`${styles.deeperCard} reveal stagger-1`}>
            <div className={styles.n}>Insight <b style={{ fontStyle: 'normal', fontFamily: 'var(--serif)', color: 'var(--paper)', fontSize: '32px', display: 'block', marginTop: '6px', letterSpacing: 0, fontWeight: 500 }}>08</b></div>
            <h4>「持つだけ」に<br />見えて、とても高度。</h4>
            <p>初心者の目には、「持っているだけ」に見えるかもしれません。でも実際は、非常に高度です。扇一つでも、どの角度で開くか、どこで止めるか、どれだけ見せるか、いつ閉じるか――全部に意味があります。だから、上手な人ほど、小道具が〈自然〉に見えるのです。</p>
          </div>
          <div className={`${styles.deeperCard} reveal stagger-2`}>
            <div className={styles.n}>Insight <b style={{ fontStyle: 'normal', fontFamily: 'var(--serif)', color: 'var(--paper)', fontSize: '32px', display: 'block', marginTop: '6px', letterSpacing: 0, fontWeight: 500 }}>09</b></div>
            <h4>沖縄文化の、<br />象徴そのもの。</h4>
            <p>琉球舞踊の小道具は、ただ舞台を華やかにするためではありません。その中には、王国文化、自然信仰、人々の暮らし、女性美、礼儀、祈りが込められています。つまり小道具を見ることは、沖縄文化を見ることでもあるのです。</p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className={`${styles.closing} reveal`} id="closing">
        <div className={styles.closingMark}>&quot;</div>
        <p>
          琉球舞踊を深く楽しみたくなったら、<br />
          ぜひ「何を持っているか」<br /><br />
          「なぜ、この演目で、この小道具なんだろう？」と<br />
          考えてみる。すると、踊りがただの動きではなく、<br />
          <em style={{ fontStyle: 'normal', color: 'var(--crimson)' }}>感情・歴史・文化・願い</em>を語っていることが、<br />
          少しずつ見えてきます。
        </p>
        <Link className={styles.closingCta} href="/ryukyu-buyou">琉球舞踊とは ・ もっと知る →</Link>
      </section>
    </>
  );
}
