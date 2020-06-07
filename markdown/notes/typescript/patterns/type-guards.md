## Type guards

These are necessary in the absence of relying on polymorphic behaviour

### Duck typing

In plain JS, we take advantage of **duck typing**: if it can `quack` it's a `Duck`

```ts
interface Bird { name: string }
interface Duck extends Bird { quack: () => void }
interface Goose extends Bird { honk: () => void }
type PossibleAnimals = Bird | Duck | Goose

function rollCall(animals: PossibleAnimals[]) {
  animals.forEach(animal => {
    if ('quack' in animal) { // `in` checks object keys
      const mustBeDuck = animal
      mustBeDuck.quack()
    }

    // The below are less than ideal methods for type guarding
    if (animal instanceof GooseClass) { // `GooseClass` required!
      const mustBeGoose = animal
      mustBeGoose.honk()
    } else if (typeof animal === 'undefined') { // only works with primitives!
      throw Error('not an animal')
    }
  })
}
```
Note
- `in` checks object keys
- `instanceof` requires a `class` definition
- `typeof` can only be used to test with native JavaScript primitives (i.e. `number`, `undefined`, etc.)

### TypeScript guards

The JS solutions above can only get us so far...

To check our custom object types, we need to implement TS type guards
- This is done by writing a *type predicate function*

```ts
function isGoose(animal: PossibleAnimal): animal is Goose {
  return animal && 'honk' in animal
}
```
Notes
- `is` is a type assertion (?)
- We return a boolean that asserts the typing of an object
