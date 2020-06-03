DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon
(
  name VARCHAR
(255),
  weight INT,
  id INT,
  base_experience INT
);

INSERT INTO pokemon
  (name, weight, id, base_experience)
VALUES
  ('ronstoppable', 170, 420, 187);
