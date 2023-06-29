import React  from 'react';
import PropTypes from 'prop-types';
import { Text, Input } from './SearchContact.Styled';
export default function SearchContactByName(props) {
  const { title, filter, onFilterChange } = props;
  return (
    <div>
      <Text>{title}</Text>
      <form>
        <Input
          value={filter}
          type="text"
          onChange={onFilterChange}
          placeholder="Search by name"
        />
      </form>
    </div>
  );
}
SearchContactByName.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};






