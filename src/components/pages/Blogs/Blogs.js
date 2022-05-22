import React from "react";

const Blogs = () => {
  return (
    <div className="m-20">
      <div>
      <h1 className="mt-8">
        <span className="text-sm font-bold">
          1. How will you improve the performance of a React Application :
        </span> 
         1.Keeping component state local where necessary. Memoizing React
         2.components to prevent unnecessary re-renders. Code-splitting in React
         3.using dynamic import() Windowing or list virtualization in React. Lazy
         4.loading images in React.
      </h1>
      </div>
      <div>
      <h1 className="mt-8">
        <span className="text-sm font-bold">
          2. What are the different ways to manage a state in a React application? :
        </span> 
         React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.
      </h1>
      </div>
      <div>
      <h1 className="mt-8">
        <span className="text-sm font-bold">
          3. How does prototypical inheritance work? :
        </span> 
         The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
      </h1>
      </div>
      <div>
      <h1 className="mt-8">
        <span className="text-sm font-bold">
          4. Why you do not set products = [...] instead, you use the setProducts :
        </span> 
         Why setState() is async? ReactJs sets its state asynchronously because it can result in an expensive operation. Making it synchronous might leave the browser unresponsive. Asynchronous setState calls are batched to provide a better user experience and performance it creates a pending state transition, and accessing it after calling this method will only return the present value
      </h1>
      </div>
      <div>
      <h1 className="mt-8">
        <span className="text-sm font-bold">
          5. How will you implement a search to find products by name :
        </span> 
         A good product description should focus on the product's features and benefits. Obviously, the features are a bit more clear cut. The benefits will require a bit more creativity and understanding of your target audience. However, both features and benefits allow for creative writing. An effective product description is succinct and draws the customer's attention. As they read the best features of your product, they are more likely to buy it. They should be detailed so that they answer all the key questions the consumer may have about the product.
      </h1>
      </div>
      <div>
      <h1 className="mt-8">
        <span className="text-sm font-bold">
          6. What is a unit test? Why should write unit tests? :
        </span> 
         A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
      </h1>
      </div>
    </div>
  );
};

export default Blogs;
