const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts:[]
    },
  
     get appetizers(){
       return this._courses.appetizers;
      },
      get mains(){
        return this._courses.mains;
      },
      get desserts(){
        return this._courses.deserts;
      },
      set appetizers(apt){
        return this._courses.appetizers = apt;
      },
      set mains(mai){
         return this._courses.mains = mai;
      },
      set desserts(dess){
         return this._courses.desserts = dess;
      },
  
      get courses(){
       return {
         appetizers: this.appetizers,
         mains: this.mains,
         desserts: this.desserts,
       };
     },
  
      addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
         name: dishName,
         price: dishPrice
       };
       return this._courses[courseName].push(dish);
     },
      getRandomDishFromCourse(courseName){
       let dishes = this._courses[courseName];
       let randomIndex = Math.random() * dishes.length;
       let wholenumber = Math.floor(randomIndex)
       return dishes[wholenumber];
     },
      generateRandomMeal(){
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is GHC ${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers','Caesar Salad', 5.00);
  menu.addDishToCourse('appetizers', 'Alomo', 2.50);
  menu.addDishToCourse('appetizers','Osten Meat', 9.00);
  
  menu.addDishToCourse('mains','fufu', 5.00);
  menu.addDishToCourse('mains','banku', 5.00);
  menu.addDishToCourse('mains','Rice', 5.00);
  
  menu.addDishToCourse('desserts','fanice', 2.00);
  menu.addDishToCourse('desserts','yoghurt', 5.00);
  menu.addDishToCourse('desserts','cookies', 5.00);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);