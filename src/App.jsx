function Header() {
  return (
    <header className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">趣味紹介</h1>
        </div>
      </div>
    </header>
  );
}

function Card1() {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered has-background-danger-light">
          櫻坂46
        </p>
      </header>
      <div className="card-image">
        <figure className="image is-128x128">
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=櫻坂46" alt="女性アイドル"/>
        </figure>
      </div>

      <footer className="card-footer">
        <div className="buttons">
          <button className="button has-background-danger-light is-rounded is-small">
            <a href="./page1.html" className="card-footer-item has-text-dark">簡単紹介PAGE</a>
          </button>
        </div>
      </footer>

      <footer className="card-footer">
        <div className="buttons">
          <button className="button has-background-danger-light is-rounded is-small">
            <a href="https://api.qrserver.com/v1/create-qr-code/?data=櫻坂46" className="card-footer-item has-text-dark">拡大QRコード</a>
          </button>
        </div>
      </footer>
    </div>
  )
}

function Card2() {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered has-text-white has-background-dark">
          SixTONES
        </p>
      </header>
      <div className="card-image">
        <figure className="image is-128x128">
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=SixTONES" alt="男性アイドル"/>
        </figure>
      </div>

      <footer className="card-footer">
        <div className="buttons">
          <button className="button has-background-dark is-rounded is-small">
            <a href="./page2.html" className="card-footer-item has-text-white">簡単紹介PAGE</a>
          </button>
        </div>
      </footer>

      <footer className="card-footer">
        <div className="buttons">
          <button className="button has-background-dark is-rounded is-small">
            <a href="https://api.qrserver.com/v1/create-qr-code/?data=SixTONES" className="card-footer-item has-text-white">拡大QRコード</a>
          </button>
        </div>
      </footer>
    </div>
  )
}

function Card3() {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered has-text-white has-background-danger-dark">
          Apex Legends
        </p>
      </header>
      <div className="card-image">
        <figure className="image is-128x128">
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=Apex Legends" alt="人気FPSゲーム"/>
        </figure>
      </div>

      <footer className="card-footer">
        <div className="buttons">
          <button className="button has-background-danger-dark is-rounded is-small">
            <a href="./page3.html" className="card-footer-item has-text-white">簡単紹介PAGE</a>
          </button>
        </div>
      </footer>

      <footer className="card-footer">
        <div className="buttons">
          <button className="button has-background-danger-dark is-rounded is-small">
            <a href="https://api.qrserver.com/v1/create-qr-code/?data=Apex Legends" className="card-footer-item has-text-white">拡大QRコード</a>
          </button>
        </div>
      </footer>
    </div>
  )
}

function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <nav className="level">
            <div className="level-item">
              <Card1 />
            </div>
            <div className="level-item">
              <Card2 />
            </div>
            <div className="level-item">
              <Card3 />
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>QR images are retrieved from QR code API</p>
        <p>
          <a href="https://goqr.me/api/">QR code API</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;