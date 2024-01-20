function greet() {
    let name = prompt("What is your name?");

    alert("Hello " + name + "!");

    let age_as_string = prompt("How old are you?");

    let age = parseInt(age_as_string);

    let birthday_already = confirm("Have you had a birthday this year?");

    let birth_year = new Date().getFullYear()

    if(birthday_already) {
        birth_year = birth_year - age;
    }else{
        birth_year = birth_year - (age + 1);
    }

    alert("Your birth year is " + birth_year.toString() + "!");
}