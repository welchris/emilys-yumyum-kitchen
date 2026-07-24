import lolaSandok from "../../assets/logos/lola-sandok-logo.png";

function Hero() {
  return (
    <section >
      <div className="hero__image-wrapper">
        <img
          src={lolaSandok}
          alt="Emily's Yumyum Kitchen by Lola Sandok"
          className="hero__lola-image"
        />
      </div>
    </section>
  );
}

export default Hero;
