import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;
  color: #000;
  &:hover {
 color: #3f5452;
 text-decoration: underline overline #466b2f;
  }
`;
export const MovieList = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
`;

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 0;
`;