export const mapToDbShipObject = (shipData) => {
  return {
    name: shipData.ship_name,
    type: shipData.ship_type,
    port: shipData.home_port,
    weight: shipData.weight_kg,
    class: shipData.class,
  };
};
