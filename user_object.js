function User(props) {
  for (var name in props) {
    this[name] = props[name];
  }
}

User.count = 0;

User.create = function(props) {
  return new User(props);
}

console.log(User.count);
console.log(User.create());
