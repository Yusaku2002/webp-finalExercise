function Header() {
  return (
    <header className="hero has-background-danger-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">櫻坂46</h1>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">どんなグループ？</h2>
        <p className="is-size-5 has-text-centered">2020年12月9日にデビューした女性アイドルグループである。</p>
        <p className="is-size-5 has-text-centered">元々は「欅坂46」として活動していたが、2020年7月に改名が</p>
        <p className="is-size-5 has-text-centered">発表され、「櫻坂46」として再デビューした。ここ最近、新たに</p>
        <p className="is-size-5 has-text-centered">3期生（11人）が加入したことによって、メンバー数は30人となった。</p>
        <p className="is-size-5 has-text-centered">また、昨年の11月8日-11月9日に東京ドームでの公演が実現し、</p>
        <p className="is-size-5 has-text-centered">今勢いに乗って活動を行っている。</p>
      </div>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">おすすめ楽曲（櫻坂46）</h2>
        <p className="is-size-5 has-text-centered">BAN</p>
        <p className="is-size-5 has-text-centered">半信半疑</p>
        <p className="is-size-5 has-text-centered">偶然の答え</p>
        <p className="is-size-5 has-text-centered">Dead end</p>
        <p className="is-size-5 has-text-centered">五月雨よ</p>
        <p className="is-size-5 has-text-centered">なぜ 恋をして来なかったんだろう？</p>
      </div>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">おすすめ楽曲（欅坂46）</h2>
        <p className="is-size-5 has-text-centered">Overture</p>
        <p className="is-size-5 has-text-centered">避雷針</p>
        <p className="is-size-5 has-text-centered">不協和音</p>
        <p className="is-size-5 has-text-centered">二人セゾン</p>
        <p className="is-size-5 has-text-centered">世界には愛しかない</p>
        <p className="is-size-5 has-text-centered">夏の花は向日葵だけじゃない</p>
        <br></br>
      </div>
    </main>
  );
}

function App1() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App1;