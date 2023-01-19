function Header() {
  return (
    <header className="hero has-background-danger-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-white">Apex Legends</h1>
        </div>
      </div>
    </header>
  );
}
  
function Main() {
  return (
    <main>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">どんなゲーム？</h2>
        <p className="is-size-5 has-text-centered">2019年2月4日に発売した大人気バトルロイヤル型FPSゲームである。</p>
        <p className="is-size-5 has-text-centered">3人で1つのチームを組み、20組の計60人で優勝を争う。無料でダウン</p>
        <p className="is-size-5 has-text-centered">ロードすることができるため、誰でも始めやすいゲームとなっている。</p>
      </div>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">おすすめキャラ</h2>
          <div className="level">
            <div className="level-item">
              <div className="box has-background-danger-light">
                <p className="is-size-5 has-text-danger-dark has-text-centered">敵を倒したい人</p>
                <p className="is-size-5 has-text-centered">レイス</p>        
              </div>
            </div>
            <div className="level-item">
              <div className="box has-background-danger-light">
                <p className="is-size-5 has-text-danger-dark has-text-centered">索敵したい人</p>
                <p className="is-size-5 has-text-centered">シア</p>
                <p className="is-size-5 has-text-centered"></p>
              </div>
            </div>
            <div className="level-item">
              <div className="box has-background-danger-light">
                <p className="is-size-5 has-text-danger-dark has-text-centered">サポートしたい人</p>
                <p className="is-size-5 has-text-centered">ローバ</p>
              </div>
            </div>
          </div>
        </div>
      <div className="box">
      <h2 className="is-size-3 has-text-link-dark has-text-centered">おすすめ武器</h2>
        <div className="level">
          <div className="level-item">
            <div className="box has-background-danger-light">
              <p className="is-size-5 has-text-danger-dark has-text-centered">アサルトライフル</p>
              <p className="is-size-5 has-text-centered">R-301カービン</p>
              <p className="is-size-5 has-text-centered">VK-47フラットライン</p>       
            </div>
          </div>
          <div className="level-item">
            <div className="box has-background-danger-light">
              <p className="is-size-5 has-text-danger-dark has-text-centered">サブマシンガン</p>
              <p className="is-size-5 has-text-centered">ボルトSMG</p>
              <p className="is-size-5 has-text-centered">C.A.R.SMG</p>
            </div>
          </div>
          <div className="level-item">
            <div className="box has-background-danger-light">
              <p className="is-size-5 has-text-danger-dark has-text-centered">スナイパーライフル</p>
              <p className="is-size-5 has-text-centered">センチネル</p>
              <p className="is-size-5 has-text-centered">チャージライフル</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">対応機種</h2>
        <p className="is-size-5 has-text-centered">PC</p>
        <p className="is-size-5 has-text-centered">PS4</p>
        <p className="is-size-5 has-text-centered">PS5</p>
        <p className="is-size-5 has-text-centered">Xbox</p>
        <p className="is-size-5 has-text-centered">Switch</p>
      </div>
    </main>
  );
}

  function App3() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
  
  export default App3;