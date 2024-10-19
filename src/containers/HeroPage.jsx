function HeroPage() {
  return (
    <section id="home">
      <div className="wrapper">
        <div className="col1">
          <div className="box1">
            <img
              id="womenImage"
              src="src/assets/woman.jpg"
              alt=""
              className="img"
            />
          </div>
        </div>
        <div className="col2">
          <div className="box2" id="logo">
            <p>frxsh</p>
          </div>
          <div className="c2r1 appearLater">
            <div className="c2r1c1">
              <div className="box3">
                <img src="src/assets/sneakers.jpg" alt="" className="img" />
              </div>
              <div className="box3">
                <img src="src/assets/funky.jpg" alt="" className="img" />
              </div>
            </div>
            <div className="box31">
              <img src="src/assets/men/coolman.jpg" alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="col3">
          <div className="box5">
            <img
              src="src/assets/men/blackman.jpg"
              alt=""
              className="img appearLater"
            />
          </div>
          <div className="box4" id="textbox2">
            <p>Begin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
