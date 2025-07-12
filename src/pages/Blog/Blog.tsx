import { useEffect, useState } from 'react';
import { CardCatalog } from '../../components/CardCatalog/CardCatalog';
import type { ICatalogCard } from '../../types/interfaces';
import './Blog.scss';

export function Blog() {
  const [posts, setPosts] = useState<ICatalogCard[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/blogs')
      .then((response) => response.json())
      .then((data) => setPosts(data.results));
  }, []);

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
