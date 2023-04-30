//here is my data
const userData = { email: "", password: "" };

//here is what data should look like
const schema = {
  email: Joi.string().min(3).max(30),
  password: Joi.string().min(12).max(20),
};

document.getElementById("login").addEventListener("input", (event) => {
  //   console.log(event.target.name, event.target.value);
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  const { name, value } = event.target;
  userData[name] = value;
  //   if (name === "email") {
  //     userData.email = value;
  //   }

  userDate[name] = value;

  //send data to joi

  Joi.validate(userData.email, schema, (error, response) => {
    const errosMod = {};

    error.details.forEach((error) => {
      //   errorsMod[error.context.key] = error.message;

      document.getElementById((error.message.key = "Error")).innerHTML =
        error.message;
    });
  });
});

///https://slides.com/jmsherry/javascript-in-the-browser?token=K-ZXPle0#/0/73
