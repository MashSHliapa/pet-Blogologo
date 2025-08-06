import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../../redux/blogSlice';
import { CardCatalog } from '../../components/CardCatalog/CardCatalog';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Title } from '../../components/Title/Title';
import type { RootState } from '../../redux/store';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { DataBlogResponse } from '../../types/interfaces';
import nothingFound from '../../assets/images/favorites_empty.png';

export function SearchResult() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch<ThunkDispatch<DataBlogResponse, null, Action>>();
  const { request } = useParams<{ request: string }>();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const filteredPosts = request
    ? posts.filter((post) => post.title.toLowerCase().includes(request.toLowerCase()))
    : posts;

  const blog = filteredPosts.map((post) => <CardCatalog key={post.id} post={post} />);

  if (loading) {
    return <div className="catalog__loading">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="blog">
      <div className="blog__container _container">
        <div className="blog__body">
          <div className="blog__breadcrumbs breadcrumbs">
            <Breadcrumbs currentPage={'Search results'} />
          </div>
          <div className="blog__title">
            <Title>Search results "{request}"</Title>
          </div>
          <div className="blog__catalog">{blog.length > 1 ? blog : <img src={nothingFound} alt="nothingFound" />}</div>
        </div>
      </div>
    </div>
  );
}
