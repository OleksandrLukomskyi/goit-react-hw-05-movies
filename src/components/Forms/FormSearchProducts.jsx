import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './FormSearchProducts.module.css';

const FormSearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: searchQuery });
    setSearchQuery('');
  };

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    !searchQuery && setSearchQuery(searchParams.get('search'));
  }, [searchParams, searchQuery]);

  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <div >
        <label htmlFor="exampleInputSearch" className={css.formLabel}></label>
        <input
          name="search"
          type="text"
          className={css.formInput}
          id="exampleInputSearch"
          value={searchQuery || ''}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default FormSearchProducts;
