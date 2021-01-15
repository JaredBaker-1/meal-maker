const menu = {
_courses: {
  appetizers: [],
  mains: [],
  desserts: [],
},
get appetizers() {

},
set appetizers(appetizerIn){

},
get mains() {

},
set mains(mainsIn){

},
get desserts() {

},
set desserts(dessertsIn){

},

get courses(){
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  }
},

addDishToCourse(courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice,
  };
  this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName){
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
},

generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;

  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
}
};

menu.addDishToCourse('appetizers', 'salad', 3.00);
menu.addDishToCourse('appetizers', 'soup', 5.00);
menu.addDishToCourse('appetizers', 'breadsticks', 6.00);

menu.addDishToCourse('mains', 'chicken', 5.00);
menu.addDishToCourse('mains', 'beef', 7.00);
menu.addDishToCourse('mains', 'lamb', 9.00);

menu.addDishToCourse('desserts', 'cookie', 3.00);
menu.addDishToCourse('desserts', 'ice cream', 5.00);
menu.addDishToCourse('desserts', 'bread pudding', 6.00);

const meal = menu.generateRandomMeal();
console.log(meal);