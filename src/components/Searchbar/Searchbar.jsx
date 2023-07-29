import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearchHeart } from 'react-icons/bs';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { Button, StyledField, StyledForm } from './Searchbar.styled';

 const Searchbar = ({ onQueryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;
    onQueryChange(movieName);
  }, [movieName, onQueryChange]);

  const handleSearchSubmit = (values, action) => {
    const query = values.query;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);

    action.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSearchSubmit}>
      <StyledForm>
        <StyledField
          type="text"
          name="query"
          title="Please enter movie name."
          placeholder="Movie name"
          required
        />
        <ErrorMessage name="name" component="div" />
        <Button type="submit">
          <BsSearchHeart />
          Search
        </Button>
      </StyledForm>
    </Formik>
  );
};

export default Searchbar

Searchbar.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
};
