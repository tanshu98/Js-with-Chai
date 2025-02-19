const promiseA = () => {
    return new Promise((resolve, reject) => {
      resolve(5);
      // reject("Pls enter a valid number");
    });
  };
  
  const square = (number) => {
    return new Promise((resolve, reject) => {
      resolve(number * number);
    });
  };
  
  // promiseA()
  //   .then((data) => {
  //     square(data)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         // Promise.reject(err);
  //       });
  //   })
  //   .catch((err) => console.log(err));
  
  
  // We can do the same thing using async await in much clear way - 
  
  const test = async()=> {
      try {
      const number = await promiseA();
      const sqaureNumber = await square(number);
      console.log(sqaureNumber);
      } catch (error) {
          Promise.reject(error)
      }
  }
  
  test();