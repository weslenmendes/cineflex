const Seat = ({ ids, id, isAvailable, name, handleSelect, seats }) => {
  const handleClick = (className) => {
    if (className.includes("unavailable")) {
      alert("Esse assento não está disponível");
    } else {
      handleSelect(id, isAvailable, name, seats);
    }
  };

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
      onClick={() => handleClick(className)}
    >
      {name}
    </div>
  );
};

export { Seat };
