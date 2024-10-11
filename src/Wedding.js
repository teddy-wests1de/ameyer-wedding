import weddingImg from './images/tamara-govedarovic-emjwxAqJB-8-unsplash.jpg'
export function Wedding() {
  return (
    <div className="wedding">
      <div className='wedding-image'>
        <img src={weddingImg} alt='Picture of a Wedding Couple' />
      </div>
      <div className='wedding-details'>
      <h2>Wedding Details</h2>
        <p>
        The wedding will be held on Saturday, March 28, 2020. We'll start with a nonsectarian ceremony, then move to the hotel for the reception. Dress code will be black tie optional.
        </p>
        <div>
        <p>
          CEREMONY
          2:00PM – 3:00PM
          Old Checkers Hall
          321 Acacia Street
          Constanipole
        </p>
      </div>
      <div>
        <p>
          RECEPTION
          5:00PM – 10:00PM
          The Grand Budapest Hotel
          Myanmar
          New India, 12345
        </p>
      </div>
      </div>
      
    </div>
  );
}
