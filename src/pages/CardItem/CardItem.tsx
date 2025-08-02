import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { fetchCardItem } from '../../redux/cardItemSlice';
import { addCardToFavorites, removeCardFromFavorites } from '../../redux/favoritesSlice';
import type { RootState } from '../../redux/store';
import type { DataItemCardResponse, ICatalogCard } from '../../types/interfaces';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import more from '../../assets/icons/more-horizontal.svg';
import './CardItem.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export function CardItem() {
  const { data: post, loading, error } = useSelector((state: RootState) => state.cardItem);
  const { id } = useParams();
  const dispatch = useDispatch<ThunkDispatch<DataItemCardResponse, null, Action>>();
  const favorites = useSelector((state: RootState) => state.favorites.data);
  const isFavorite = post ? favorites.some((item: ICatalogCard) => item.id === post.id) : false;

  function handleToggleFavoriteCard() {
    if (isFavorite) {
      dispatch(removeCardFromFavorites(post));
    } else {
      dispatch(addCardToFavorites(post));
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchCardItem({ id }));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="catalog__loading">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="card-item">
      <div className="card-item__container _container">
        <div className="card-item__body">
          <div className="card-item__breadcrumbs breadcrumbs">
            <Breadcrumbs currentPage={post.id} />
          </div>
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
                <div className="card-item__icon" onClick={handleToggleFavoriteCard}>
                  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.7804 1.76207C16.7665 0.74543 15.4272 0.129421 14.0043 0.0251955C12.5814 -0.0790302 11.1686 0.335391 10.0208 1.19368C8.81087 0.281986 7.3049 -0.13142 5.80615 0.036713C4.30741 0.204846 2.92721 0.942028 1.94349 2.09981C0.95978 3.25759 0.445622 4.74997 0.50456 6.27642C0.563498 7.80287 1.19115 9.25001 2.26113 10.3264L7.96676 16.1548C8.50167 16.696 9.22675 17 9.98275 17C10.7388 17 11.4638 16.696 11.9987 16.1548L17.7044 10.3264C18.2663 9.7702 18.7142 9.10698 19.0223 8.37485C19.3304 7.64272 19.4927 6.85612 19.4998 6.06026C19.5068 5.2644 19.3586 4.47497 19.0635 3.73734C18.7685 2.99971 18.3324 2.32843 17.7804 1.76207ZM16.4396 8.94879L10.734 14.729C10.6456 14.8193 10.5404 14.891 10.4245 14.9399C10.3087 14.9888 10.1844 15.014 10.0588 15.014C9.93329 15.014 9.809 14.9888 9.69312 14.9399C9.57724 14.891 9.47206 14.8193 9.38366 14.729L3.67803 8.94879C2.93226 8.1765 2.51466 7.13907 2.51466 6.05869C2.51466 4.9783 2.93226 3.94087 3.67803 3.16858C4.43798 2.40848 5.46292 1.98226 6.53085 1.98226C7.59877 1.98226 8.62371 2.40848 9.38366 3.16858C9.47206 3.25888 9.57724 3.33055 9.69312 3.37946C9.809 3.42837 9.93329 3.45355 10.0588 3.45355C10.1844 3.45355 10.3087 3.42837 10.4245 3.37946C10.5404 3.33055 10.6456 3.25888 10.734 3.16858C11.5145 2.5394 12.4963 2.22326 13.4921 2.28045C14.488 2.33764 15.4282 2.76417 16.1335 3.47869C16.8388 4.19322 17.2598 5.14574 17.3163 6.1546C17.3728 7.16347 17.0607 8.15809 16.4396 8.94879Z"
                      fill={isFavorite ? '#eb0606ff' : '#2a2929ff'}
                    />
                  </svg>
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
