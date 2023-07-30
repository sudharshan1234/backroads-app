import aboutImg from "../images/about.jpeg";
import Title from "./Title";
function About() {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us'></Title>

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            At Wanderlust Excursion, we are fervent believers in the power of
            travel to inspire, transform, and create lasting memories. Our
            mission is to provide you with exceptional travel experiences that
            go beyond the ordinary. We meticulously craft each journey, blending
            adventure, culture, and exploration to ensure you embark on a truly
            unforgettable expedition.
          </p>
          <p>
            With a team of passionate travel enthusiasts and seasoned local
            guides, we are dedicated to curating personalized itineraries that
            cater to your unique interests and preferences. Whether you crave
            adrenaline-pumping escapades, cultural immersions, or serene
            getaways, our expertly guided tours promise to ignite your
            wanderlust and leave you with cherished moments that last a
            lifetime. Join us as we unlock the world's hidden treasures and
            invite you to unleash your inner adventurer with Wanderlust
            Excursion.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
