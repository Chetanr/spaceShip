import sqlstring from "sqlstring";

export const mapToDbShipObject = (shipData) => {
  return {
    name: shipData.ship_name,
    type: shipData.ship_type,
    port: shipData.home_port,
    weight: shipData.weight_kg,
    class: shipData.class,
  };
};

export const generateWhereClause = (weight, port) => {
  if (weight && port) {
    return `WHERE weight = ${sqlstring.escape(
      weight
    )} AND WHERE port = ${sqlstring.escape(port)}`;
  }

  if (weight) {
    return `WHERE weight LIKE ${sqlstring.escape(weight)}`;
  }

  if (port) {
    return `WHERE port = ${sqlstring.escape(port)}`;
  }
};
