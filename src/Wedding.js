import weddingImg from './images/tamara-govedarovic-emjwxAqJB-8-unsplash.jpg'
export function Wedding() {
  return (
    <div className="wedding">
      <div className='wedding-image'>
        <img src={weddingImg} alt='Picture of a Wedding Couple' />
      </div>
      <div>
        <p>
        The wedding will be held on Saturday, March 28, 2020. We'll start with a nonsectarian ceremony, then move to the hotel for the reception. Dress code will be black tie optional.
        </p>
      </div>
      <div>
        <p>
          CEREMONY
          3:00PM – 4:00PM
          New Woods Church
          123 Demo St
          New York, NY 12345
        </p>
      </div>
      <div>
        <p>
          RECEPTION
          5:00PM – 10:00PM
          The Villa
          123 Demo St
          New York, NY 12345
        </p>
      </div>
    </div>
  );
}
