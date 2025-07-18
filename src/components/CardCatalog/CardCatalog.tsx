import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import type { ICatalogCard } from '../../types/interfaces';
import './CardCatalog.scss';

export function CardCatalog(props: { post: ICatalogCard }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="card-catalog">
      <div className="card-catalog__body">
        <div className="card-catalog__image">
          <img src={props.post.image_url} alt="image" />
        </div>
        <div
          className={
            theme ? 'card-catalog__info card-catalog__info_dark' : 'card-catalog__info card-catalog__info_light'
          }
        >
          <p
            className={
              theme ? 'card-catalog__date card-catalog__date_dark' : 'card-catalog__date card-catalog__date_light'
            }
          >
            {props.post.updated_at}
          </p>
          <h3 className="card-catalog__description">{props.post.title}</h3>
        </div>
      </div>
    </div>
  );
}
