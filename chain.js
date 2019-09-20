
var orm = {
  selectAll: function(tableInput, cb = function(res){
    callback(res);
  }) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }}

 orm.selectAll("string", function(result){

  })


var burger = {
  selectAll: function(callback = function(data) {
    var hbsObject = {
      burgers: burger_name
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  }){
    
    orm.selectAll("burger", function(res){
      callback(res);
    });
  }
}

burger.selectAll(function(resulting_data){

})

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// -------------------


// var orm = {
//   selectAll: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   }}

//  orm.selectAll("string", function(result){

//   })


// var burger = {
//   selectAll: function(callback){
//     orm.selectAll("burger", function(res){
//       callback(res);
//     });
//   }
// }

// burger.selectAll(function(resulting_data){
  
// })

// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

