import "./style.scss";

import { Seat } from "./Seat";

const Seats = ({ data, form, setForm }) => {
  const makeSeats = () => {
    if (data) {
      const { seats: seatsData } = data;
      const { ids } = form;

      const compareNumbers = (a, b) => a - b;

      const handleSelect = (id, isAvailable, name, seats) => {
        if (isAvailable && !ids.includes(id)) {
          setForm({
            ...form,
            ids: [...ids, +id],
            seats: [...seats, +name].sort(compareNumbers),
          });
        } else if (isAvailable && ids.includes(id)) {
          const newArrIds = ids.filter((el) => el !== id);
          const newArrSeats = seats?.filter((el) => el !== +name);
          setForm({ ...form, ids: newArrIds, seats: newArrSeats });
        }

        return;
      };

      return seatsData?.map(({ id, isAvailable, name }) => (
        <Seat
          key={id}
          id={id}
          name={name}
          isAvailable={isAvailable}
          ids={ids}
          handleSelect={handleSelect}
          seats={form.seats}
        />
      ));
    }
  };

  const content = makeSeats();

  return <section className="seats">{content}</section>;
};

export { Seats };
