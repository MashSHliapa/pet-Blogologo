import type { ICatalogCard } from '../../types/interfaces';
import './CardCatalog.scss';

export function CardCatalog(props: { post: ICatalogCard }) {
  return (
    <div className="card-catalog">
      <div className="card-catalog__body">
        <div className="card-catalog__image">
          <img src={props.post.image_url} alt="image" />
        </div>
        <div className="card-catalog__info">
          <p className="card-catalog__date">{props.post.updated_at}</p>
          <h3 className="card-catalog__description">{props.post.title}</h3>
        </div>
      </div>
    </div>
  );
}
