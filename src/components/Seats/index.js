import "./style.scss";

import { Seat } from "./Seat";

const Seats = ({ data, form, setForm }) => {
  const makeSeats = () => {
    if (data) {
      const { seats } = data;
      const { ids } = form;

      const handleSelect = (id, isAvailable) => {
        if (isAvailable && !ids.includes(id)) {
          setForm({ ...form, ids: [...ids, id] });
        } else if (isAvailable && ids.includes(id)) {
          const newArrIds = ids.filter((el) => el !== id);
          setForm({ ...form, ids: newArrIds });
        }

        return;
      };

      return seats?.map(({ id, isAvailable, name }) => (
        <Seat
          key={id}
          id={id}
          name={name}
          isAvailable={isAvailable}
          ids={ids}
          handleSelect={handleSelect}
        />
      ));
    }
  };

  const content = makeSeats();

  return <section className="seats">{content}</section>;
};

export { Seats };
