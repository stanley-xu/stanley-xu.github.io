Typing classes
===

TypeScript provides type-safety in the areas you'd expect

```ts
class Vendor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return "Hello, welcome to " + this.name;
  }
}

const shop = new Vendor("Ye Olde Shop");
console.log(shop.greet());

class FoodTruck extends Vendor {
  cuisine: string;

  constructor(name: string, cuisine: string) {
    super(name);
    this.cuisine = cuisine;
  }

  greet() {
    return "Hi, welcome to food truck " + this.name + ". We serve " + this.cuisine + " food.";
  }
}

const nameOnlyTruck = new FoodTruck("Salome's Adobo"); // error! (missing 1 parameter)
const truck = new FoodTruck("Dave's Doritos", "junk"); // OK
console.log(truck.greet());
```

## Generics

We can define classes to use parametrized (generic) types

This enables a great deal of flexibility! 💪

```ts
class Drawer<ClothingType> {
  contents: ClothingType[] = [];

  add(object: ClothingType) {
    this.contents.push(object);
  }

  remove() {
    return this.contents.pop();
  }
}

interface Sock {
  color: string;
}
const sockDrawer = new Drawer<Sock>();
sockDrawer.add({ color: "white" });
const mySock = sockDrawer.remove();

interface TShirt {
  size: "s" | "m" | "l";
}
const tshirtDrawer = new Drawer<TShirt>();
tshirtDrawer.add({ size: "m" });

const mixedDrawer = new Drawer<Sock | TShirt>();
```
