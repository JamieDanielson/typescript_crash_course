# TypeScript Crash Course by Traversy Media

[TypeScript Crash Course | Traversy Media](https://youtu.be/rAy_3SIqT-E)

## Some notes

When using typescript, you write everything in TypeScript but it compiles into JavaScript, so you reference your JS file in HTML, not your TS file.

`tsc --init` will create a tsconfig.json

`tsc types.ts` will compile ts into the js file

But instead of doing this every time you make a change...

`tsc types.ts -w` enters watch mode, meaning it'll watch for changes and update the js file accordingly.

Now keep in mind, TS is for the developer, not for the user. So let's say you a string type defined but you tried using a number... you'll get an error in VSCode but it'll still work on browser because it technically works in JS. Example:

```ts
let myString: string;
myString = 'Hello World!';
console.log(myString); // good, no errors, shows 'Hello World!'
```

```ts
let myString: string;
myString = 1;
console.log(myString); // shows 1, but myString is underlined as error
```

```ts
let strNumTuple: [string, number];
strNumTuple = ['Hello', 4];
```

(<https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/>)

>Tuples are like Tupperware containers that let you store different types of food on each container. We can collect and bundle the containers and we can disperse them as well. At the same time, we can make it optional to fill a container. However, it would be a good idea to keep the containers with uncertain content at the bottom of the stack to make the containers with guaranteed content both easy to find and predictable.
>

```ts
type Point = [number, number?, number?];

const x: Point = [10];
const xy: Point = [10, 20];
const xyz: Point = [10, 20, 10];

console.log(x.length);
console.log(xy.length);
console.log(xyz.length);
```

With functions, you can assign types for arguments and for the result. In this case, num1 is first argument passed in and must be a number; if not, it'll error. Same with num2. The :number after the arguments but before the curly brace are there saying the result should be a number.

```ts
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(getSum(1, 4));
```
