import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/icons/search_icon.svg';
import './SearchForm.scss';

export function SearchForm() {
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

  function handleInputSearchForm(event: ChangeEvent<HTMLInputElement>) {
    setRequest(event.target.value);
  }

  function handleSubmitForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.trim()) {
      navigate(`/search-result/${encodeURIComponent(request.trim())}`);
      setRequest('');
    }
  }

  return (
    <form action="#" className="search-form__form" onSubmit={handleSubmitForm}>
      <input type="text" className="search-form__input" value={request} onChange={handleInputSearchForm} />
      <button type="submit" className="search-form__button">
        <img src={search} alt="search" />
      </button>
    </form>
  );
}
