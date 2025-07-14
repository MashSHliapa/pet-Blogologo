import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchBlog } from '../../redux/blogSlice';
import { CardCatalog } from '../../components/CardCatalog/CardCatalog';
import type { RootState } from '../../redux/store';
import type { DataBlogResponse } from '../../types/interfaces';
import './Blog.scss';

export function Blog() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch<ThunkDispatch<DataBlogResponse, null, Action>>();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  if (loading) {
    return <div className="catalog__loading">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const blog = posts.map((item) => <CardCatalog key={item.id} post={item} />);

  return (
    <div className="blog">
      <div className="blog__container _container">
        <div className="blog__body">
          <div className="blog__title">Blog</div>
          <div className="blog__catalog">{blog}</div>
        </div>
      </div>
    </div>
  );
}
