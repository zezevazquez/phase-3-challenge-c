COPY bookings(id, room_id, guest_id, check_in, check_out)
FROM '/Users/zezemanolo/Desktop/Zeze/learnersguild/phase-challenges/phase3_final/phase-3-challenge-c/part-2/data/bookings.csv' DELIMITER ',' CSV HEADER;

COPY guests(id, name, email)
FROM '/Users/zezemanolo/Desktop/Zeze/learnersguild/phase-challenges/phase3_final/phase-3-challenge-c/part-2/data/guests.csv' DELIMITER ',' CSV HEADER;

COPY rooms(id, room_number, capacity)
FROM '/Users/zezemanolo/Desktop/Zeze/learnersguild/phase-challenges/phase3_final/phase-3-challenge-c/part-2/data/rooms.csv' DELIMITER ',' CSV HEADER;
