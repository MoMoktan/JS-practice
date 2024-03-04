// let json = '{"name": "john", "age": 30}';
// let user = JSON.parse(json);

// alert(user.name);
// alert(user.age);


    let json = '[{"firstName":"John", "lastName":"Doe" }]';
try {
    let user = JSON.parse(json);
    console.log(user)
    console.log(user[0].firstName);
} catch(error) {
    console.log("error occurred");
}


