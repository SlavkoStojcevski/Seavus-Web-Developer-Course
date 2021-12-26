function type(variable) {
  console.log(typeof variable);
}
var someObject = {
  foo: "This",
  bar: "works!",
};
type(someObject);
type(true);
type(7);
type("seven");
type();
