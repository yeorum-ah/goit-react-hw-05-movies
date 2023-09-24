import { Input } from 'components/MainStyles/Styles';

const SearchInput = () => (
  <Input
    type="text"
    name="movieName"
    title="May contain only letters, apostrophe, dash and spaces."
    required
    autoComplete="off"
    autoFocus
    placeholder="Search movie..."
  />
);

export default SearchInput;