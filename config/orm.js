var connection = require("./connection")

var orm = {

  selectAll: function(tableInput, cb){
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  }


//   insertOne: function(){
//     // alert("Working")
//   },


//   updateOne: function(){
//     // alert("Working")
//   }
  
// };

module.exports = orm

//first create connections.js to connect to the sql database


// work on this next