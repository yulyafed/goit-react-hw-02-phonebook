export const ContactsFilter = ({ initialValue, filterChanged }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={e => filterChanged(e.target.value.toLocaleLowerCase())}
          value={initialValue}
        />
      </label>
    </>
  );
};
