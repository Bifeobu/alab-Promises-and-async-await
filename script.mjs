// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  //console.log(dbs.db1(id)):
  Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id),]).then(([x1,x2,x3]) => {
    console.log([x1, x2, x3])
  })
  .catch((err) => {
    console.log(err);
  });
}

getUserData(1);