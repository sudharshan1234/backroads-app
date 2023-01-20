import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours'></Title>

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour {...tour} key={id}></Tour>;
        })}
      </div>
    </section>
  );
}
export default Tours;
