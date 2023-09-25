import { ButtonIcon, Input, Form, SearchBox } from '../MainStyles/Styles';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => (
  <SearchBox>
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="movieName"
        title="May contain only letters, apostrophe, dash and spaces."
        required
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
      />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
    </Form>
  </SearchBox>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

