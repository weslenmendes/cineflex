const Seat = ({ ids, id, isAvailable, name, handleSelect }) => {
  let isSelected = ids.includes(id) && isAvailable;
  let className = "";

  if (isAvailable && !isSelected) {
    className = "seat";
  } else if (isSelected) {
    className = "seat selected";
  } else {
    className = "seat unavailable";
  }

  return (
    <div
      key={name}
      className={className}
      onClick={() => handleSelect(id, isAvailable)}
    >
      {name}
    </div>
  );
};

export { Seat };
