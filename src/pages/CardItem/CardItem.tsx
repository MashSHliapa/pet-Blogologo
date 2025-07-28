import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { fetchCardItem } from '../../redux/cardItemSlice';
import type { RootState } from '../../redux/store';
import type { DataItemCardResponse } from '../../types/interfaces';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import more from '../../assets/icons/more-horizontal.svg';
import './CardItem.scss';

export function CardItem() {
  const { data: post, loading, error } = useSelector((state: RootState) => state.cardItem);
  const { id } = useParams();
  const dispatch = useDispatch<ThunkDispatch<DataItemCardResponse, null, Action>>();

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
