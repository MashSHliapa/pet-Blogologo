import './CardItem.scss';
import image from '../../assets/images/image.jpg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import more from '../../assets/icons/more-horizontal.svg';

export function CardItem() {
  return (
    <div className="card-item">
      <div className="card-item__container _container">
        <div className="card-item__body">
          <div className="card-item__breadcrumbs">Home/Post 14278</div>
          <div className="card-item__info">
            <h2 className="card-item__title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h2>
            <div className="card-item__image">
              <img src={image} alt="image" />
            </div>
            <div className="card-item__content">
              <h4 className="card-item__text">
                The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects.
                The artist’s installation Relic, produced alongside sound recordist Chris Watson, was recently on view
                at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the
                Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the
                group show “Summer Exhibition” at Marlborough London, which runs through September 10th.
              </h4>
              <div className="card-item__icons">
                <div className="card-item__icon">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="card-item__icon">
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="card-item__icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
