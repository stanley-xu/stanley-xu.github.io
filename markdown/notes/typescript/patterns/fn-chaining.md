Function chaining API
===


**Key:** public API methods must return the **same object** which encapsulates the **same state**

## Functional form

Outer function encapsulates API state while the `api` is a closure which captures that state

```ts
const doCompute = (start = 0) => {
  let state = start

  const api = {
    add: (arg: number = 1) {
      state += arg
      return api
    }

    print: () => {
      console.log(state)
      return api
    }
  }

  return api
}
```

## Class form

Leverages ES6 classes that contain private state and its methods returning an instance to itself

```ts
class DoCompute {
  private state: number

  constructor(start = 0) {
    this.state = start
  }

  public add(arg: number = 1) {
    this.state += arg
    return this
  }

  public print() {
    console.log(this.state)
    return this
  }
}
```