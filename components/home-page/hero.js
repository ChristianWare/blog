import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/black.png'
          alt='An image showing Chris'
          width={300}
          height={300}
        />
      </div>
      <h1>I go by the name of Black Though</h1>
      <p>
        I'm the lead singer/rapper in my band, The Roots. Watch me on The
        Tonight Show with Jimmy Fallon.{" "}
      </p>
    </section>
  );
}

export default Hero;
