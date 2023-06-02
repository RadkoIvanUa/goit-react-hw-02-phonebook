import PropTypes from 'prop-types';

export default function Filter({ onFilter, filter }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input onChange={onFilter} type="text" value={filter} />
    </>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
