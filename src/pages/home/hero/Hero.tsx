import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <img src="./умарррр.png" alt="" />
      <div className="name-div">
        <h1 className="name-animation">
          -- Umarkhon Sobirov -- Umarkhon Sobirov -- Umarkhon Sobirov --
          Umarkhon Sobirov --
        </h1>
      </div>
      <div className="location-div">
        <h1 className="contents">Located in the Uzbekistan, Tashkent</h1>
      </div>
      <div className="globe-4">
        <span className="f1"></span>
        <span className="f2"></span>
        <span className="f3"></span>
        <span className="f4"></span>
        <span className="f5"></span>
        <span className="f6"></span>
      </div>
      <div className="bgcolor"></div>
    </section>
  );
};

export default Hero;
