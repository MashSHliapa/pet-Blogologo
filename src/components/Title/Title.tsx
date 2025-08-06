import type { JSX } from 'react';
import './Title.scss';

export function Title(props: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="title">
      <h2 className="title__text">{props.children}</h2>
    </div>
  );
}
