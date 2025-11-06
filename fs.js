const fs = require("fs");
const path = require("path");
// fs.mkdir(path.join(__dirname,'templates'),err=>{
//     if(err) throw new Error()
//         console.log("Folder was create successfully")
//     }

// )

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();
//   console.log("Folder was create successfully");
// });

fs.writeFile(
  path.join(__dirname, "notes", "november.txt"),
  "Create new course NodeJs",
  (err) => {
    if (err) throw new Error();
    console.log("File was created");

    fs.appendFile(
      path.join(__dirname, "notes", "number.txt"),
      "and microservice project",
      (err) => {
        if (err) throw new Error();
        console.log("File was changed successfully");
      }
    );
  }
);
