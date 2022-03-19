const path = "/users/download/index.html";

function stringValidation (path) {
  if (path.slice(-5) == '.html') {
      return true;
  }
}

console.log(stringValidation(path));
