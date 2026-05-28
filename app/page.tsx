'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('yuya');

  useEffect(() => {
    // Scroll Reveal Animation (Intersection Observer)
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <header className="hero" id="hero">
        <div className="hero-left">
          <div>
            <div className="hero-eyebrow reveal">琉球舞踊家・沖縄芝居役者</div>
            <h1 className="hero-title reveal stagger-1">
              <span className="row1">平敷屋門 勇也</span>
              <span className="row2">Heshikiyajou Yuya</span>
            </h1>

            <p className="hero-lede reveal stagger-3">
              4歳で稽古場の戸を叩いてから、30有余年。<br />
              勝連平敷屋の地に生まれ、女踊の所作に身を浸し、<br />
              ともに歩む人々と、琉球舞踊と、沖縄の伝統と。<br />
              1人ひとりの可能性が、伝統の中で大きく花咲くように。
            </p>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img" role="img" aria-label="琉球舞踊 琉装の平敷屋門勇也"></div>
          <div className="hero-vertical">
            琉球舞踊のその先に、<br className="sp-br" />
            <span className="sp-indent">沖縄の伝統文化がある。</span>
          </div>
          <div className="seal">平敷屋門<br />勇也</div>
        </div>
      </header>

      {/* SCHEDULE */}
      <section className="schedule" id="schedule">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>01</b></div>
          <div className="sec-title">
            公演詳細
            <small>— Performance Schedule —</small>
          </div>
        </div>

        <div className="fan-message reveal stagger-1">
          <div className="hanagasa-icon" aria-hidden="true">
            <img src="/images/hanagasa.png" alt="花笠" />
          </div>
          <p>いつも温かいご声援をいただき、本当にありがとうございます。</p>
          <p>皆様が客席から見守ってくださるからこそ、私は舞台で生かされています。</p>
          <p>
            1つひとつの舞台に心を込め、最高の舞をお届けいたしますので、<br className="pc-br" />
            ぜひ会場へ足をお運びいただけたら嬉しいです。
          </p>
          <div className="message-sign">平敷屋門 勇也</div>
        </div>

        <div className="sched-tabs reveal" role="tablist">
          <button
            className={`sched-tab ${activeTab === 'yuya' ? 'active' : ''}`}
            role="tab"
            onClick={() => setActiveTab('yuya')}
          >
            平敷屋門 勇也<small>Heshikiyajou Yuya</small>
          </button>
          <button
            className={`sched-tab ${activeTab === 'champ' ? 'active' : ''}`}
            role="tab"
            onClick={() => setActiveTab('champ')}
          >
            チャンプ流ぅ<br className="sp-br" />芸能団<small>Champru Trio</small>
          </button>
          <button
            className={`sched-tab ${activeTab === 'yuika' ? 'active' : ''}`}
            role="tab"
            onClick={() => setActiveTab('yuika')}
          >
            創作舞踊集団<br className="sp-br" />「結華」<small>Yuibana</small>
          </button>
        </div>

        <div className={`sched-panel ${activeTab === 'yuya' ? 'active' : ''}`}>
          <div className="sched-list">
            <div className="sched-item reveal">
              <div className="sched-date"><b>05.18</b><span className="month">SUN ・ 2026</span></div>
              <div className="sched-body">
                <h4>琉球舞踊鑑賞教室「女踊・二才踊」</h4>
                <p>玉城流光乃会 赤嶺啓子琉舞道場とともに、古典の心を継ぐ一夜。</p>
              </div>
              <div className="sched-venue">国立劇場おきなわ ・ 大劇場<small>National Theatre Okinawa</small></div>
              <div className="sched-status confirmed">出演決定</div>
            </div>
            <div className="sched-item reveal stagger-1">
              <div className="sched-date"><b>07.12</b><span className="month">SUN ・ 2026</span></div>
              <div className="sched-body">
                <h4>組踊「執心鐘入」</h4>
                <p>組踊鑑賞教室。立ち役者として出演。</p>
              </div>
              <div className="sched-venue">国立劇場おきなわ ・ 小劇場<small>Kumi-odori Stage</small></div>
              <div className="sched-status confirmed">出演決定</div>
            </div>
            <div className="sched-item reveal stagger-2">
              <div className="sched-date"><b>09.—</b><span className="month">2026</span></div>
              <div className="sched-body">
                <h4>沖縄芝居「朝顔夕顔」</h4>
                <p>方言せりふ劇。舞踊家の所作で芝居の世界へ。</p>
              </div>
              <div className="sched-venue">調整中<small>Venue TBA</small></div>
              <div className="sched-status tba">日程調整中</div>
            </div>
          </div>
        </div>

        <div className={`sched-panel ${activeTab === 'champ' ? 'active' : ''}`}>
          <div className="sched-list">
            <div className="sched-item reveal">
              <div className="sched-date"><b>06.21</b><span className="month">SUN ・ 2026</span></div>
              <div className="sched-body">
                <h4>鶴見 凱旋公演 ／ うちなー芸能の夕べ</h4>
                <p>沖縄県人の心の街・鶴見へ。沖縄から東京の地へ、唄と三線と舞踊を運びます。10周年の節目を前にした、特別な凱旋舞台。</p>
              </div>
              <div className="sched-venue">鶴見 ・ 神奈川県<small>Tsurumi, Kanagawa</small></div>
              <div className="sched-status featured">凱旋公演</div>
            </div>
            <div className="sched-item reveal stagger-1">
              <div className="sched-date"><b>2027</b><span className="month">SPRING</span></div>
              <div className="sched-body">
                <h4>結成10周年 記念公演</h4>
                <p>2017年に始まった3人の歩み。10年の節目を、那覇の舞台で。</p>
              </div>
              <div className="sched-venue">沖縄県内 ・ 大ホール<small>10th Anniversary Stage</small></div>
              <div className="sched-status featured">10周年</div>
            </div>
            <div className="sched-item reveal stagger-2">
              <div className="sched-date"><b>毎月</b><span className="month">MONTHLY</span></div>
              <div className="sched-body">
                <h4>チャンプ流ぅ寄席</h4>
                <p>即興コント、歌、踊り。子どもから年配まで、笑いの絶えない場。</p>
              </div>
              <div className="sched-venue">沖縄県内 各地<small>Various Venues</small></div>
              <div className="sched-status confirmed">定期開催</div>
            </div>
          </div>
        </div>

        <div className={`sched-panel ${activeTab === 'yuika' ? 'active' : ''}`}>
          <div className="sched-list">
            <div className="sched-item reveal">
              <div className="sched-date"><b>08.16</b><span className="month">SUN ・ 2026</span></div>
              <div className="sched-body">
                <h4>結華 創作舞踊公演「結ぶ・咲かす」</h4>
                <p>会員それぞれの可能性を、舞台の上で結び、咲かせる。年に1度の創作発表。</p>
              </div>
              <div className="sched-venue">うるま市民芸術劇場 響ホール<small>Uruma City Hibiki Hall</small></div>
              <div className="sched-status confirmed">主催公演</div>
            </div>
            <div className="sched-item reveal stagger-1">
              <div className="sched-date"><b>11.03</b><span className="month">TUE ・ 2026</span></div>
              <div className="sched-body">
                <h4>結華キッズ 発表会</h4>
                <p>子ども創作舞踊集団「結」の発表の場。次の世代へ。</p>
              </div>
              <div className="sched-venue">うるま市 ・ 文化センター<small>Uruma Cultural Center</small></div>
              <div className="sched-status confirmed">出演</div>
            </div>
            <div className="sched-item reveal stagger-2">
              <div className="sched-date"><b>通年</b><span className="month">2026</span></div>
              <div className="sched-body">
                <h4>稽古生 募集中</h4>
                <p>2歳から大人まで。1人ひとりの可能性を、ともに咲かせます。</p>
              </div>
              <div className="sched-venue">稽古場 ・ 沖縄市泡瀬<small>Awase Studio</small></div>
              <div className="sched-status tba">随時受付</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="photo-gallery" id="gallery">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>02</b></div>
          <div className="sec-title">素顔の記憶<small>— Another Face —</small></div>
        </div>
        <div className="pg-grid">
          <div
            className="pg pg-1 reveal"
            style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F%EF%BC%93.webp')" }}
          >
            <div className="cap">Another Face<small>Off-stage</small></div>
          </div>
          <div
            className="pg pg-2 reveal stagger-1"
            style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F.webp')" }}
          >
            <div className="cap">Another Face<small>Off-stage</small></div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="profile" id="profile">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>03</b></div>
          <div className="sec-title">自分の中心に、琉球舞踊<small>— Profile / プロフィール —</small></div>
        </div>
        <div className="profile-body">
          <div className="profile-portrait reveal-left">
            <div
              className="photo pos-top"
              style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A.webp')" }}
            ></div>
            <div className="frame"></div>
          </div>
          <div className="profile-text reveal-right">
            <p>平敷屋門 勇也（へしきやじょう ゆうや）、1989年、沖縄県うるま市勝連平敷屋の生まれ。物心ついた頃には「沖縄の芸能をやりたい」と自ら口にし、4歳の誕生日の翌週、初めて稽古場の扉を叩いた。</p>
            <p>玉城流光乃会・赤嶺啓子の門下で女踊を学び、小・中・高と現代版組踊「肝高の阿麻和利」へ出演。1度は芸事を離れる時期もあったが、21歳で沖縄へ戻り、再び舞踊と向き合う。創作舞踊集団「結華」を設立、会長を務める。28歳で唄三線・古典音楽・舞踊の3者によるユニット「チャンプ流ぅ芸能団」を結成。</p>
            <p>県内外、海外と積極的に活動。伝統を背負いつつ、表現者として“楽しむ”ことを大切にしながら、舞台の可能性をカタチにする挑戦は続く。</p>
            <div className="profile-quote">
              「僕のすべての中心にあるものが、琉球舞踊。<br />
              自分の中心にあって、いつも自分を律しているもの。<br />
              その中心があるからこそ、いろいろなことに挑んでいける。」
              <small>— Yuya Heshikiyajou</small>
            </div>
          </div>
        </div>
      </section>

      {/* CHRONICLE */}
      <section className="chronicle sec-dark" id="chronicle">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>04</b></div>
          <div className="sec-title" style={{ color: 'var(--paper)' }}>4歳からの、舞の軌跡<small>— Chronicle / 年譜 —</small></div>
        </div>
        <div className="timeline">
          <div className="t-row reveal">
            <div className="t-year">1989<span className="t-age-inline">年 — 0歳</span></div>
            <div className="t-title">うるま市勝連平敷屋に生まれる</div>
            <div className="t-desc">
              門中（ムンチュー）の流れを汲む、平敷屋門の地に生を享ける。
              <div className="t-img reveal stagger-2">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/urumashiyeshikiya.webp" alt="平敷屋の風景" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="t-row reveal stagger-1">
            <div className="t-year">1993<span className="t-age-inline">年 — 4歳</span></div>
            <div className="t-title">琉球舞踊の稽古をはじめる</div>
            <div className="t-desc">
              自ら「沖縄の芸能をやりたい」と志願し、誕生日翌週、道場へ。
              <div className="t-img reveal stagger-2">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A-%E5%B9%BC%E5%B0%91%E6%9C%9F%E6%99%82%E4%BB%A3.webp" alt="幼少期の勇也" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="t-row reveal stagger-2">
            <div className="t-year">2000<span className="t-age-inline">年 — 10〜17歳</span></div>
            <div className="t-title">現代版組踊「肝高の阿麻和利」出演</div>
            <div className="t-desc">
              小・中・高と勝連の地元舞台に立ち続け、伝統の血を体に刻む。
              <div className="t-img reveal stagger-3">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/%E3%81%8D%E3%82%80%E3%81%9F%E3%81%8B%E3%81%AE%E9%98%BF%E9%BA%BB%E5%92%8C%E5%88%A9.webp" alt="肝高の阿麻和利" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="t-row reveal stagger-3">
            <div className="t-year">2010<span className="t-age-inline">年 — 21歳</span></div>
            <div className="t-title">沖縄帰郷／創作舞踊集団「結華」設立</div>
            <div className="t-desc">
              高校卒業後の上京を経て帰郷。会長として後進の育成と創作を始める。
              <div className="t-img reveal stagger-4">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/%E4%B8%87%E5%9B%BD%E6%B4%A5%E6%A2%81%E9%A4%A8-%E7%B5%90%E8%8F%AF.webp" alt="結華設立" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="t-row reveal stagger-4">
            <div className="t-year">2017<span className="t-age-inline">年 — 28歳</span></div>
            <div className="t-title">「チャンプ流ぅ芸能団」結成</div>
            <div className="t-desc">
              唄三線・古典音楽・琉球舞踊の若手3人で〈うちなー芸能〉を再編。
              <div className="t-img reveal stagger-5">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/%E3%83%81%E3%83%A3%E3%83%B3%E3%83%97%E6%B5%81%E3%81%85%E8%8A%B8%E8%83%BD%E5%9B%A3-.webp" alt="チャンプ流ぅ芸能団" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="t-row reveal stagger-5">
            <div className="t-year">2020<span className="t-age-inline">年 — 現在</span></div>
            <div className="t-title">国立劇場おきなわ／海外公演</div>
            <div className="t-desc">
              「琉球舞踊鑑賞教室」「組踊」等に出演。ハワイ・全国各地で舞台を重ねる。
              <div className="t-img reveal stagger-6">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/IMG_0960.jpeg" alt="海外公演など" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="t-row reveal stagger-6">
            <div className="t-year">2025<span className="t-age-inline">年 — 36歳</span></div>
            <div className="t-title">アメリカ公演／華の時代</div>
            <div className="t-desc">
              「もっと幅広い層に届けたい。沖縄に面白いものがあると伝えたい」。
              <div className="t-img reveal stagger-7">
                <img src="https://jinzai.okinawa/wp-content/uploads/2026/04/%E3%83%81%E3%83%A3%E3%83%B3%E3%83%97%E6%B5%81%E3%81%85%E8%8A%B8%E8%83%BD%E5%9B%A3-%E3%82%AA%E3%83%8F%E3%82%A4%E3%82%AA%E5%B7%9E.webp" alt="アメリカ公演" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERLUDE */}
      <section className="interlude reveal">
        <div className="interlude-text reveal stagger-1">
          これまでのすべての歩みが、今日の舞台を創り上げる。<br />
          そして、その熱は歩みを止めることなく、挑み続ける。<br /><br />
          その先にある景色を、あなたとともに。
        </div>
        <div className="interlude-scroll">
          <span className="interlude-line"></span>
          KEEP SCROLLING
        </div>
      </section>

      {/* WORKS */}
      <section className="works" id="works">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>05</b></div>
          <div className="sec-title">無数のかお、ひとつの魂<small>— Portfolio / 表現の形 —</small></div>
        </div>
        <p className="sched-intro reveal" style={{ margin: '-40px 0 50px' }}>衣装や演目が変われば、全く別の命が宿る。ひとつの身体から生み出される、無限の表情と役柄の振り幅。</p>
        <div className="works-grid">
          <div className="w work-1 reveal">
            <div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%A5%B3%E8%B8%8A%E3%82%8A-%E6%B2%96%E7%B8%84.webp')" }}></div>
            <div className="w-caption">女踊り<small>Onna-odori</small></div>
          </div>
          <div className="w work-2 reveal stagger-1">
            <div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E5%A5%B3%E8%B8%8A%E3%82%8A%E5%82%98.webp')" }}></div>
            <div className="w-caption">女踊り傘<small>Umbrella Dance</small></div>
          </div>
          <div className="w work-3 reveal stagger-2">
            <div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E6%97%A5%E5%82%98%E8%B8%8A%E3%82%8A.webp')" }}></div>
            <div className="w-caption">日傘踊り<small>Parasol Dance</small></div>
          </div>
          <div className="w work-4 reveal stagger-1">
            <div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E6%B2%96%E7%B8%84%E8%8A%9D%E5%B1%85%E5%BD%B9%E8%80%85-%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F2.webp')" }}></div>
            <div className="w-caption">沖縄芝居<small>Okinawa Theatre</small></div>
          </div>
          <div className="w work-5 reveal stagger-2">
            <div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E6%B2%96%E7%B8%84%E8%8A%9D%E5%B1%85%E5%BD%B9%E8%80%85-%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F.webp')" }}></div>
            <div className="w-caption">役者<small>Actor</small></div>
          </div>
        </div>
      </section>

      {/* CHAMPRU */}
      <section className="champru sec-dark" id="champru">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>06</b></div>
          <div className="sec-title" style={{ color: 'var(--paper)' }}>ジャンルを越えて、うちなーの今を<small>— Champru / チャンプ流ぅ芸能団 —</small></div>
        </div>
        <div className="champ-grid">
          <div className="champ-img reveal-left">
            <div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E3%83%81%E3%83%A3%E3%83%B3%E3%83%97%E6%B5%81%E8%8A%B8%E8%83%BD%E5%9B%A3-%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-%E7%9F%A5%E5%BF%B5%E5%8B%9D%E4%B8%89-%E4%BB%B2%E5%AE%97%E6%A0%B9%E5%89%B5-1.webp')" }}></div>
          </div>
          <div className="champ-text reveal-right">
            <h3>チャンプ流ぅ芸能団</h3>
            <div className="en">Champru Performing Trio — since 2017</div>
            <div className="anniv">
              <div className="anniv-mark">10<small>th</small></div>
              <div className="anniv-body">
                <b>来年、結成10周年。</b>
                <span>2026年6月 ・ 鶴見 凱旋公演 決定</span>
                <em>Homecoming Stage in Tsurumi, June 2026</em>
              </div>
            </div>
            <p>「自分たちで楽しいものを創作していく。それが&quot;チャンプぅ&quot;です」――平敷屋門が結成の原点を語る、唄三線・古典音楽・琉球舞踊の三者によるユニット。</p>
            <p>伝統を背負う若手芸能家が、即興コント・歌・踊りを一舞台に編む。子どもから年配まで、笑いの絶えない唯一無二の場をつくり続けている。最年少ながら、リーダーとして全体を律する勇也の姿がある。</p>
            <div className="champ-members">
              <div className="champ-member">Buyou ・ 舞踊<b>平敷屋門 勇也</b></div>
              <div className="champ-member">Min&apos;you ・ 民謡<b>仲宗根 創</b></div>
              <div className="champ-member">Sanshin ・ 古典<b>知念 勝三</b></div>
            </div>
            <div className="ig-row" style={{ marginTop: '22px', color: 'rgba(243,237,225,.85)' }}>
              <span className="ig-label" style={{ color: 'rgba(243,237,225,.5)' }}>Follow ・</span>
              <a className="ig-btn" href="https://www.instagram.com/champuryu_geinoudan/" target="_blank" rel="noopener noreferrer" aria-label="チャンプ流ぅ芸能団 Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg>
              </a>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '13px', letterSpacing: '.1em' }}>@champuryu_geinoudan</span>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      <section className="groups" id="groups">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>07</b></div>
          <div className="sec-title">琉球舞踊をもっと身近に<small>— Groups / 主宰団体 —</small></div>
        </div>
        <p className="sched-intro reveal" style={{ margin: '-40px 0 50px' }}>伝統芸能の「敷居の高さ」を取り払い、誰もが心から楽しめる舞台を。未来へ繋ぐ2つの集団。</p>
        <div className="group-grid">
          <div className="group-card reveal">
            <div className="group-img"><div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E5%89%B5%E4%BD%9C%E8%88%9E%E8%B8%8A%E9%9B%86%E5%9B%A3-%E7%B5%90%E8%8F%AF-%E5%9B%9B%E3%83%84%E7%AB%B9.webp')" }}></div></div>
            <div className="group-body">
              <div className="group-jp">創作舞踊集団「結華」</div>
              <div className="group-en">Yuika ・ Founded 2010</div>
              <p className="group-desc">21歳の帰郷を機に、勇也が会長として設立した創作舞踊集団。伝統の所作を礎に、新しい時代の舞踊を結び咲かせる場。</p>
              <div className="group-role"><b>—</b> 会長 ・ Founder & President</div>
            </div>
          </div>
          <div className="group-card reveal stagger-1">
            <div className="group-img"><div className="photo" style={{ backgroundImage: "url('https://jinzai.okinawa/wp-content/uploads/2026/04/%E7%B5%90%E8%8F%AF%E3%82%AD%E3%83%83%E3%82%BA-%E6%B2%96%E7%B8%84%E7%90%89%E7%90%83%E8%88%9E%E8%B8%8A-%E5%B9%B3%E6%95%B7%E5%B1%8B%E9%96%80%E5%8B%87%E4%B9%9F-1.webp')" }}></div></div>
            <div className="group-body">
              <div className="group-jp">子ども創作舞踊集団「結」</div>
              <div className="group-en">Yui ・ Children&apos;s Group</div>
              <p className="group-desc">次世代の踊り手たちと向き合う、子どものための集団。自分が4歳で受け取ったものを、いま、新しい子どもたちの手に渡してゆく。</p>
              <div className="group-role"><b>—</b> 代表 ・ Representative</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="news" id="stages">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>08</b></div>
          <div className="sec-title">近年の主な舞台<small>— Recent Stages / 公演記録 —</small></div>
        </div>
        <div className="news-list">
          <div className="news-row reveal"><div className="news-date">2025. ——</div><div className="news-tag tag-stage">公演</div><div className="news-title">アメリカ公演<small>チャンプ流ぅ芸能団 海外ツアー</small></div><div className="news-venue">U.S.A.</div></div>
          <div className="news-row reveal stagger-1"><div className="news-date">2024. 08. 24</div><div className="news-tag tag-stage">公演</div><div className="news-title">琉球舞踊鑑賞教室<small>「老人老女」「若衆ぜい」「江戸上り口説」「瓦屋」 ほか</small></div><div className="news-venue">国立劇場おきなわ</div></div>
          <div className="news-row reveal stagger-2"><div className="news-date">2024. 06. 03</div><div className="news-tag tag-tv">TV</div><div className="news-title">RBC「沖縄CLIP」<small>琉球舞踊と咲かせる花 平敷屋門勇也</small></div><div className="news-venue">RBC 琉球放送</div></div>
          <div className="news-row reveal stagger-3"><div className="news-date">2024. ——</div><div className="news-tag tag-stage">公演</div><div className="news-title">時代明朗劇「朝顔夕顔」<small>沖縄芝居 ・ 国立劇場おきなわ</small></div><div className="news-venue">那覇</div></div>
          <div className="news-row reveal stagger-4"><div className="news-date">2024. 07. 20</div><div className="news-tag tag-stage">公演</div><div className="news-title">組踊の世界「執心鐘入」<small>組踊鑑賞教室</small></div><div className="news-venue">国立劇場おきなわ</div></div>
          <div className="news-row reveal stagger-5"><div className="news-date">——</div><div className="news-tag tag-event">海外</div><div className="news-title">ハワイ公演<small>琉球舞踊・うちなー芸能</small></div><div className="news-venue">Honolulu, HI</div></div>
        </div>
      </section>

      {/* BREAKER */}
      <section className="breaker reveal">
        <div className="breaker-photo" style={{ backgroundImage: "url('/images/akamine_beige.png')" }}></div>
        <div className="breaker-content">
          <div className="breaker-mark">&quot;</div>
          <p className="breaker-text">
            舞台にかける情熱は、<br />
            師である私でも、<br />
            圧倒されるくらいに、すごい。
          </p>
          <div className="breaker-attr">
            Words from his teacher
            <b>赤嶺 啓子 ・ 玉城流光乃会 赤嶺啓子琉舞道場</b>
            <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', fontFamily: 'var(--latin)', letterSpacing: '.2em' }}>沖縄県指定無形文化財「琉球歌劇」保持者</span>
          </div>
        </div>
      </section>

      {/* WALKING ANIMATION */}
      <div className="walking-container">
        <img src="/images/ryuso_woman.png" alt="琉装の女性" className="walking-woman" />
      </div>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="sec-head reveal">
          <div className="sec-num">Section <b>09</b></div>
          <div className="sec-title">舞台のご依頼、承ります<small>— Contact / 連絡先 —</small></div>
        </div>
        <div className="contact-grid">
          <div className="reveal-left">
            <div className="contact-big">
              舞台の場へ、<br />お声がけ下さい
              <small>For any stage, performance &amp; inquiry.</small>
            </div>
          </div>
          <dl className="contact-info reveal-right">
            <dt>稽古場 / Studio</dt>
            <dd>沖縄県沖縄市泡瀬</dd>
            <dt>所属流派 / School</dt>
            <dd>玉城流 光乃会 赤嶺啓子琉舞道場</dd>
            <dt>所属ユニット / Unit</dt>
            <dd>チャンプ流ぅ芸能団</dd>
            <dt>主宰 / Founder</dt>
            <dd>創作舞踊集団 結華 ・ 子ども創作舞踊集団 結</dd>
            <dt>SNS / Instagram</dt>
            <dd style={{ borderBottom: 'none', paddingBottom: '0' }}>
              <div className="ig-card">
                <a className="ig-btn" href="https://www.instagram.com/heshikiyajouyuuya/" target="_blank" rel="noopener noreferrer" aria-label="平敷屋門勇也 Instagram" style={{ color: 'var(--ink)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg>
                </a>
                <div className="ig-meta"><b>平敷屋門 勇也</b><span>@heshikiyajouyuuya</span></div>
              </div>
              <div className="ig-card">
                <a className="ig-btn" href="https://www.instagram.com/champuryu_geinoudan/" target="_blank" rel="noopener noreferrer" aria-label="チャンプ流ぅ芸能団 Instagram" style={{ color: 'var(--ink)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg>
                </a>
                <div className="ig-meta"><b>チャンプ流ぅ芸能団</b><span>@champuryu_geinoudan</span></div>
              </div>
              <div className="ig-card">
                <a className="ig-btn" href="https://www.instagram.com/yuibana.2011/" target="_blank" rel="noopener noreferrer" aria-label="結華 Instagram" style={{ color: 'var(--ink)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg>
                </a>
                <div className="ig-meta"><b>創作舞踊集団「結華」</b><span>@yuibana.2011</span></div>
              </div>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
}
