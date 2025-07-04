import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>96 in Reverse - The Podcast</title>
        <meta
          name="description"
          content="Official website for the 96 in Reverse podcast"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#252a34" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="noBgColor (8).png" className={styles.imageLogo} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#hosts">Hosts</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroLogo}>
                <img
                  src="/noBgColor (8).png"
                  alt="96 in Reverse Logo"
                  className={styles.heroImageLogo}
                />
              </div>
              <p className={styles.tagline}>
                Conversations that turn perspective upside down
              </p>
            </div>
          </div>
        </section>

        {/* Podcast Player */}
        <section id="player" className={styles.player}>
          <div className={styles.container}>
            <h2>Listen Now</h2>
            <div className={styles.playerContainer}>
              <iframe
                src="https://player.rss.com/96-in-reverse?theme=color"
                style={{ width: "100%", height: "320px" }}
                title="96 in reverse"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Meet the Hosts */}
        <section id="hosts" className={styles.hosts}>
          <div className={styles.container}>
            <h2>Meet The Hosts</h2>
            <div className={styles.hostsGrid}>
              {/* HOST 1 */}
              <div className={styles.hostProfile}>
                <div className={styles.hostImage}>
                  <img
                    src="/Peter.PNG"
                    alt="Peter"
                    className={styles.hostImg}
                  />
                </div>
                <h3>Peter</h3>
                <p>
                  Hey everyone, I'm Peter! Originally from the Dominican
                  Republic, I'm a big fan of dancing, music, and all things
                  tech. I've spent years working in different companies, but now
                  I'm excited to do my own thing with this podcast. I'm starting
                  this with the people I love, and we're just going to share
                  life as it happens – the good, the bad, and the funny. Come
                  along for the ride – it's going to be a blast!
                </p>
              </div>

              {/* HOST 2 */}
              <div className={styles.hostProfile}>
                <div className={styles.hostImage}>
                  <img
                    src="/Cedrick.PNG"
                    alt="Cedrick"
                    className={styles.hostImg}
                  />
                </div>
                <h3>Cedrick</h3>
                <p>
                  Hi my name is Cedrick, I am first of eight sibling and we all
                  grew up in Daytona Beach Florida. My hobbies are singing,
                  dancing, plants and exorcising. One hobby that I a coming into
                  is the ability to speak in front of other (motivational
                  speaking), cause I feel i can reach so many people with
                  whatever issue. Some of things are the reasons why I connected
                  with peter to all things across the board being and accepting
                  people in life is the start of healing each other. I really
                  think 96 in reverse is safe space for people like Peter and
                  myself to teach and learn about people and their perspective
                  in life.
                </p>
              </div>

              {/* HOST 3 */}
              <div className={styles.hostProfile}>
                <div className={styles.hostImage}>
                  <img src="/Nate.PNG" alt="Nate" className={styles.hostImg} />
                </div>
                <h3>Nate</h3>
                <p>
                  I'm Nate and hail from New York City. I am currently a student
                  for art therapy and take care of my parents at home as work.
                  I'm an artist with two degrees in Fine Arts/Studio Art. My
                  favorite mediums are oil paint and sculpting, but I am trying
                  my hand at digital art. That's it from me, blessed be.
                </p>
              </div>

              {/* HOST 4 */}
              <div className={styles.hostProfile}>
                <div className={styles.hostImage}>
                  <img
                    src="/Machelle.PNG"
                    alt="Machelle"
                    className={styles.hostImg}
                  />
                </div>
                <h3>Machelle</h3>
                <p>
                  Machelle is one of the four main voices behind 96 in Reverse,
                  known for her deadpan delivery, sharp observations, and
                  occasional reminders that someone here has to say the quiet
                  part out loud. Whether she's unpacking culture, memory, or
                  mildly chaotic life choices, Machelle brings humor with a
                  straight face—and a depth that lingers longer than the
                  punchline.
                </p>
                <p>
                  She's not here to sugarcoat it. She's here to ask why we're
                  still pretending we don't know better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Show */}
        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <h2>About The Show</h2>
            <div className={styles.aboutContent}>
              <p>
                96 in Reverse is a podcast that explores a wide range of topics
                from relationships and technology to current events and personal
                growth. Hosted by a team of four diverse personalities, each
                episode offers unique perspectives and engaging conversations
                that challenge conventional thinking.
              </p>
              <p>
                Whether discussing the complexities of modern dating, the impact
                of technology on our lives, or sharing personal stories and
                experiences, 96 in Reverse aims to entertain, inform, and
                inspire listeners with authentic and thought-provoking content.
              </p>
              <p>
                Join us for new episodes where we turn perspective upside down
                and explore life from different angles.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className={styles.social}>
          <div className={styles.container}>
            <h2>Connect With Us</h2>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/96inreverse.thepodcast"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              {/* Additional social links can be added here */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img
                src="/noBgColor (8).png"
                alt="96 in Reverse Logo"
                className={styles.footerImageLogo}
              />
            </div>
            <div className={styles.footerInfo}>
              <p>&copy; 2025 96 in Reverse. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
