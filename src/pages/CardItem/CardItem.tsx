import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { ICardItem } from '../../types/interfaces';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import more from '../../assets/icons/more-horizontal.svg';
import './CardItem.scss';

export function CardItem() {
  const [post, setPost] = useState<Partial<ICardItem>>({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);
  console.log(id)

  return (
    <div className="card-item">
      <div className="card-item__container _container">
        <div className="card-item__body">
          <div className="card-item__breadcrumbs">Home/Post 14278</div>
          <div className="card-item__info">
            <h2 className="card-item__title">{post.title}</h2>
            <div className="card-item__image">
              <img src={post.image_url} alt="image" />
            </div>
            <div className="card-item__content">
              <h4 className="card-item__text">{post.summary}</h4>
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
