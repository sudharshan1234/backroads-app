const Tour = ({ image, date, title, text, place, days, startingPrice, id }) => {
  return (
    <article className='tour-card' key={id}>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt='' />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{" "}
            {place}
          </p>
          <p>{days} days</p>
          <p>from ${startingPrice}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
