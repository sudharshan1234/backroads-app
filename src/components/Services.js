import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

function Services() {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services'></Title>
      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id}></Service>;
        })}
      </div>
    </section>
  );
}
export default Services;
