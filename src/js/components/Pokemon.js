"use strict";

function Pokemon(name, weight, id, base_experience) {
  this.name = name || "name not found";
  this.weight = weight || "weight not found";
  this.id = id || "id not found";
  this.base_experience = base_experience || "base experience not found";
}

export default Pokemon;
