import "./styles.css";

export default function Select({ label, name, options, onSelect }) {
  const selectList = options.map((option, index) => {
    const value = option.value || option;
    const name = option.name || option;
    return (
      <option value={value} key={index}>
        {name}
      </option>
    );
  });
  return (
    <>
      <label > {label}:</label>
      <select name={name} onSelect={onSelect}>
        {selectList}
      </select>
    </>
  );
}
