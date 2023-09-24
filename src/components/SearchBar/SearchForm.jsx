import PropTypes from 'prop-types';
import { Form } from './../MainStyles/Styles';

const SearchForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};