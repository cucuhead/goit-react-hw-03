export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p style={{ fontWeight: "400", margin: "10px" }}>Find contacts by name</p>
      <input
        type="text"
        style={{ margin: "10px" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
