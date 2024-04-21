const mongoose = require("mongoose");

const conn = async() => {
    try{
        await mongoose
        .connect("mongodb+srv://pranitmorab23:123456789pm@cluster0.vyxihvp.mongodb.net/contact_update")
        .then(
            () => {
            console.log("Connected");
        },
         (error) => {
            console.log(error);
        }
    );

    } catch(error){
        console.log(error);
    }
};

conn();