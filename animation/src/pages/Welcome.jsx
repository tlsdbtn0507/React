import { Link } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";

import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const cityY = useTransform(scrollY, [0, 200], [0, -100]);
  const cityOpacity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  //scrollY가 유저의 스크롤 움직임 이고 위 함수의 2번째 인자 배열(스크롤 량)의 각 요소(0,200,300...)만큼 스크롤 하면
  //3번째 인자 배열(앞서 넣은 style의 변화 요소)의 각 요소(여기선 opacity정도)를 적용하게해줌

  const heroY = useTransform(scrollY, [0, 200], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 200, 300], [1, 1, 0]);

  const textY = useTransform(scrollY, [0, 100, 200], [1, 1.3, 1.6]);
  const textOpacity = useTransform(
    scrollY,
    [0, 150, 300, 500],
    [1, 1.5, 1.5, 0]
  );

  return (
    <>
      <header id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ opacity: textOpacity, scale: textY }}
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: cityOpacity, y: cityY }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ opacity: heroOpacity, y: heroY }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
