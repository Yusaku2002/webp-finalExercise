function Header() {
  return (
    <header className="hero has-background-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-white">SixTONES</h1>
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
        <p className="is-size-5 has-text-centered">2020年1月22日にCDデビューした、ジャニーズ事務所所属の6人組</p>
        <p className="is-size-5 has-text-centered">男性アイドルグループである。デビュー曲の「Imitation Rain」は</p>
        <p className="is-size-5 has-text-centered">X JAPANのYOSHIKIさんによって作詞作曲されている。ここ最近では、</p>
        <p className="is-size-5 has-text-centered">「SixTONES LIVE TOUR 2023」が開催され、グループとしては初の</p>
        <p className="is-size-5 has-text-centered">ドームツアー公演も決定した。（ドームのチケット当たってほしい）</p>
      </div>
      <div className="box">
        <h2 className="is-size-3 has-text-link-dark has-text-centered">おすすめ楽曲</h2>
        <p className="is-size-5 has-text-centered">S.I.X</p>
        <p className="is-size-5 has-text-centered">Rollin'</p>
        <p className="is-size-5 has-text-centered">ふたり</p>
        <p className="is-size-5 has-text-centered">マスカラ</p>
        <p className="is-size-5 has-text-centered">WHIP THAT</p>
        <p className="is-size-5 has-text-centered">Good Luck!</p>
        <p className="is-size-5 has-text-centered">Special Order</p>
        <p className="is-size-5 has-text-centered">Imitation Rain</p>
        <p className="is-size-5 has-text-centered">僕が僕じゃないみたいだ</p>
      </div>
      </main>
    );
  }
  

  function App2() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
  
  export default App2;