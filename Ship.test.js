import  { Ship } from "./Ship.js";


test.only("Ship constructor creates ship that is accurate to the constructor call", () => {
  const ship = new Ship(4);
  expect(ship.length).toBe(4);
})