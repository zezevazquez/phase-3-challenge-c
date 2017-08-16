CREATE TABLE guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  room_id INTEGER NOT NULL,
  guest_id INTEGER NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL
);
CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  room_number VARCHAR(100) NOT NULL,
  capacity INTEGER NOT NULL
);


-- CASE
-- 		WHEN capacity > 2 THEN true
-- 		ELSE false
-- 	END
--
--   SELECT room_number, capacity,
-- CASE
-- 	WHEN date > check_in AND date < check_out THEN 'UNAVAILABLE'
-- 	ELSE 'AVAILAVLE'
-- END
-- FROM rooms JOIN bookings ON bookings.room_id = rooms.id
