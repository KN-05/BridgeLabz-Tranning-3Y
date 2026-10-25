// Q3: arrow function vs normal function (this)
const user = {
  name: "Riya",
  showName: () => {
    console.log(this.name);
  },
};

// Arrow functions have no own "this", they use the outer one (not the object), so it's undefined
user.showName();

// Fix: normal function, "this" is the object that calls it
const fixedUser = {
  name: "Riya",
  showName: function () {
    console.log(this.name);
  },
};

fixedUser.showName();
