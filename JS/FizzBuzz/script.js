function PizzaOven(type, dough, crust, sauce, cheese, toppings){
    var pizza={};
    pizza.type=type;
    pizza.dough=dough;
    pizza.crust=crust;
    pizza.sauce=sauce;
    pizza.cheese=cheese;
    pizza.toppings=toppings;
    return(pizza);
}
p1=PizzaOven("ChicagoStyle","Pie Style", "Chicago", "Traditional", "Mozarella", ["Peperonni, Sausage"])
console.log(p1)
p2=PizzaOven("Hand Tossed","Traditional", "Artisanal", "Marinara", ["Mozarella","Feta"], ["Mushrooms","Olives","Onions"])
console.log(p2)
p3=PizzaOven("Margherita","Traditional", "Artisanal", "Marinara", ["Mozarella","Pieparmigiano-Reggiano"], ["Tomatoes","Basil","Onions"])
console.log(p3)
p4=PizzaOven("Carbonara","Traditional", "Artisanal", ["Egg-Based","Cream"], ["Mozarella","Emmental"], ["Ham","Bacon","Porchetta"])
console.log(p4)