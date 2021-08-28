//classic example of closures in a constructor, to help hide private variables.

var Person = function(firstAndLast) {
    let a = firstAndLast.split(" ");
    let firstName1 = a[0];
    let lastName1 = a[1];
    

    //functions to set names, respectively
    this.setFirstName = (first) => {firstName1 = first;}
    this.setLastName = (last) => {lastName1 = last;}
    this.setFullName = (firstAndLast) => {
    let a = firstAndLast.split(" ");
    firstName1 = a[0];
    lastName1 = a[1];
    }

    //functions to get names, respectively 
    this.getFirstName = () => {return firstName1};
    this.getLastName = () => {return lastName1};
    this.getFullName = () => {return firstName1 + " " + lastName1;};
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.setFullName("Haskell Curry")
  console.log(bob.getLastName());
  