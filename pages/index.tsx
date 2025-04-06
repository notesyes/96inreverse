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
            <img src="no_padding (2).png" className={styles.imageLogo} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#episodes">Episodes</a>
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
                  src="/no_padding (2).png"
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

        {/* Latest Episodes */}
        <section id="episodes" className={styles.episodes}>
          <div className={styles.container}>
            <h2>Latest Episodes</h2>
            <div className={styles.episodeGrid}>
              {/* Episode 1 */}
              <div className={styles.episodeCard}>
                <div className={styles.episodeNumber}>01</div>
                <h3>Modern Relationships & Technology</h3>
                <p>
                  In this episode, Peter and Cedrick discuss various topics
                  ranging from the unusual weather patterns and global warming
                  to conspiracy theories surrounding current events. They delve
                  into the complexities of online dating, including the rise of
                  ghosting and the emotional impact it has on individuals. The
                  conversation shifts to the superficial nature of modern
                  relationships and a nostalgic longing for genuine connections.
                  They also explore the evolution of dating apps, the impact of
                  technology on relationships, and the decline of retail stores
                  in the face of online shopping. The episode concludes with a
                  discussion about electric vehicles, their performance, and the
                  importance of maintaining cleanliness in cars.
                </p>
                <a href="#" className={styles.listenBtn}>
                  Listen Now
                </a>
              </div>

              {/* Episode 2 */}
              <div className={styles.episodeCard}>
                <div className={styles.episodeNumber}>02</div>
                <h3>Young Relationships & Personal Growth</h3>
                <p>
                  In this episode, Peter and Cedrick welcome guests Kayden and
                  Yesli to discuss the dynamics of young relationships. They
                  explore how Kayden and Yesli met, the challenges of dating in
                  high school, and the unique aspects of their relationship,
                  including age differences and personal experiences. The
                  conversation also touches on the importance of emotional
                  connections versus physical attraction in relationships,
                  providing insights into the complexities of love and dating at
                  a young age. In this conversation, the speakers delve into the
                  complexities of relationships, discussing personal experiences
                  and lessons learned. They explore themes of self-worth, the
                  importance of understanding backgrounds, and the value of
                  women in society.
                </p>
                <a href="#" className={styles.listenBtn}>
                  Listen Now
                </a>
              </div>
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
                  <div className={styles.hostPlaceholder}>
                    <span>Peter</span>
                  </div>
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
                  <div className={styles.hostPlaceholder}>
                    <span>Cedrick</span>
                  </div>
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
                  <div className={styles.hostPlaceholder}>
                    <span>Nate</span>
                  </div>
                </div>
                <h3>Nate</h3>
                <p>
                  Host bio goes here. Replace this text with the host's summary.
                  This section should include a brief description of the host,
                  their background, interests, and role in the podcast.
                </p>
              </div>

              {/* HOST 4 */}
              <div className={styles.hostProfile}>
                <div className={styles.hostImage}>
                  <div className={styles.hostPlaceholder}>
                    <span>Machelle</span>
                  </div>
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
                src="/no_padding (2).png"
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
