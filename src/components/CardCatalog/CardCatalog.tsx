import image from '../../assets/images/image.jpg';
import './CardCatalog.scss';

export function CardCatalog() {
  return (
    <div className="card-catalog">
      <div className="card-catalog__body">
        <div className="card-catalog__image">
          <img src={image} alt="image" />
        </div>
        <div className="card-catalog__info">
          <p className="card-catalog__date">April 20, 2021</p>
          <h3 className="card-catalog__description">
            Astronauts prep for new solar arrays on nearly seven-hour spacewalk
          </h3>
        </div>
      </div>
    </div>
  );
}
