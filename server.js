var http = require('http');
var url = require("url");

var routes = [];

// basic http request handler
var HttpReqHandler = function() {
}

HttpReqHandler.prototype.onHttpRequest = function(req, res) {
    switch (req.method) {
        case "GET":
            return this.onGet(req, res);
        case "POST":
           return this.onPost(req, res);
        default:
           return this.respondUnSupport(req, res);
    }
}

HttpReqHandler.prototype.respond = function(req, res, statusCode, headers, body) {
      if (headers) {
        if (!headers["Access-Control-Allow-Methods"]) {
          headers["Access-Control-Allow-Methods"] = "GET, POST, DELETE, OPTIONS";
        }
        if (!headers["Access-Control-Allow-Origin"]) {
          headers["Access-Control-Allow-Origin"] = "*";
        }
        if (!headers["Access-Control-Allow-Headers"]) {
          headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization, Accept*, X-Requested-With";
        }
      } else {
        headers = {
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept*, X-Requested-With"
        };
      }
      res.writeHead(statusCode, headers);
      if (body) {
        return res.end(body);
      } else {
        return res.end();
      }
}

HttpReqHandler.prototype.respondUnSupport = function(req, res) {
    return this.respond(req, res, 400);
}

// check user's status
var CheckUser = function() {
}

CheckUser.prototype = new HttpReqHandler();

CheckUser.prototype.onGet = function(req, res) {
      var headers;
      headers = {
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept*, X-Requested-With",
        "Content-Type": "application/json"
      };
      res.writeHead(200, headers);

      var userStatus = {  
        "occupied": false,
        "verified": false,
        "locked": false
      }; 
      res.write(JSON.stringify(userStatus));
      return res.end();
}

CheckUser.prototype.onPost = function(req, res) {
    return this.respond(req, res, 400);
}

// create user 
var CreateUser = function() {
}

CreateUser.prototype = new HttpReqHandler();

CreateUser.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

CreateUser.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["userName"]);
        console.log(params["pwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var ticket = {  
          "ticket": "f1d9721c5957c20ccec59c56fa783acc84ec1d36" 
        }; 
        res.write(JSON.stringify(ticket));

        res.end();
    });
}

// sign in
var SignIn = function() {
}

SignIn.prototype = new HttpReqHandler();

SignIn.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

SignIn.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["userName"]);
        console.log(params["pwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var ticket = {  
          "ticket": "f1d9721c5957c20ccec59c56fa783acc84ec1d36" 
        }; 
        res.write(JSON.stringify(ticket));

        res.end();
    });
}

// sign out
var SignOut = function() {
}

SignOut.prototype = new HttpReqHandler();

SignOut.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

SignOut.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        if (postData.length > 0) { // maybe empty?
            var params = JSON.parse(postData);
            console.log(params);
            console.log(params["pwdStr"]);
        }

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var empty = {  
          "hello": "hi" 
        }; 
        res.write(JSON.stringify(empty));

        res.end();
    });
}

// send activation code
var SendActivationCode = function() {
}

SendActivationCode.prototype = new HttpReqHandler();

SendActivationCode.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

SendActivationCode.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        if (postData.length > 0) {
            var params = JSON.parse(postData);
            console.log(params);
            console.log(params["type"]);
            console.log(params["redirectTo"]);
        }

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var empty = {  
          "hello": "hi" 
        }; 
        res.write(JSON.stringify(empty));

        res.end();
    });
}

// activate user
var Activate = function() {
}

Activate.prototype = new HttpReqHandler();

Activate.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

Activate.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["code"]);
        console.log(params["type"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var userName = {  
          "userName": "name@example.com" 
        }; 
        res.write(JSON.stringify(userName));

        res.end();
    });
}

// get service tickets
var GetServiceTickets = function() {
}

GetServiceTickets.prototype = new HttpReqHandler();

GetServiceTickets.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

GetServiceTickets.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["type"]);
        console.log(params["services"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var findMyDevice = {
            "FindMyDevice": {
                "ticket": "f1d9721c5957c20ccec59c56fa783acc84ec1d36",
                "type": 0,
                "expiration": 1441781815  // seconds since epoch
            }
        };

        res.write(JSON.stringify(findMyDevice));

        res.end();
    });
}

// freeze account
var Freeze = function() {
}

Freeze.prototype = new HttpReqHandler();

Freeze.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

Freeze.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["pwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var userName = {  
          "hello": "hi" 
        }; 
        res.write(JSON.stringify(userName));

        res.end();
    });
}

// unfreeze account
var UnFreeze = function() {
}

UnFreeze.prototype = new HttpReqHandler();

UnFreeze.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

UnFreeze.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["pwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var userName = {  
          "ticket": "f1d9721c5957c20ccec59c56fa783acc84ec1d36" 
        }; 
        res.write(JSON.stringify(userName));

        res.end();
    });
}

// destroy account
var Destroy = function() {
}

Destroy.prototype = new HttpReqHandler();

Destroy.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

Destroy.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["pwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var empty = {  
          "hello": "" 
        }; 
        res.write(JSON.stringify(empty));

        res.end();
    });
}

// send code
var SendCode = function() {
}

SendCode.prototype = new HttpReqHandler();

SendCode.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

SendCode.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["userName"]);
        console.log(params["type"]);
        console.log(params["redirectTo"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var userName = {  
          "hello": "hi" 
        }; 
        res.write(JSON.stringify(userName));

        res.end();
    });
}

// verify code
var VerifyCode = function() {
}

VerifyCode.prototype = new HttpReqHandler();

VerifyCode.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

VerifyCode.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["code"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var pwdResetCode = {  
          "pwdResetCode": "f1d9721c5957c20ccec59c56fa783acc84ec1d36" 
        }; 
        res.write(JSON.stringify(pwdResetCode));

        res.end();
    });
}

// reset password
var Reset = function() {
}

Reset.prototype = new HttpReqHandler();

Reset.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

Reset.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["pwdResetCode"]);
        console.log(params["newPwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var userName = {  
          "userName": "name@example.com" 
        }; 
        res.write(JSON.stringify(userName));

        res.end();
    });
}

// change password
var Change = function() {
}

Change.prototype = new HttpReqHandler();

Change.prototype.onGet = function(req, res) {
    return this.respond(req, res, 400);
}

Change.prototype.onPost = function(req, res) {
    req.setEncoding('utf-8');

    var postData = "";

    req.on("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    
    req.on("end", function () {
        var params = JSON.parse(postData);
        console.log(params);
        console.log(params["oldPwdStr"]);
        console.log(params["newPwdStr"]);

        // todo

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        var ticket = {  
          "ticket": "f1d9721c5957c20ccec59c56fa783acc84ec1d36" 
        }; 
        res.write(JSON.stringify(ticket));

        res.end();
    });
}

// add route handler
function addRoute(path, handler) {
    routes.push({
        path: path, 
        handler: handler
    });
}

// find related handler
function findHandler(path) {
    var r = null;
    var i = 0;
    var len = routes.length;
    for (i = 0; i < len; i++) {
        r = routes[i];
        if (path.match(r.path)) {
            return r.handler;
        }
    }
}

// all http request handler
var checkuser = new CheckUser(); // check user status 
var createUser = new CreateUser();// create user
var signIn = new SignIn();// account signin
var signOut = new SignOut();// account signout 
var sendActivationCode = new SendActivationCode();// send activation code
var activateAccount = new Activate();// activate account
var getServiceTickets = new GetServiceTickets();// activate account
var accountFreeze = new Freeze(); // freeze account
var accountUnFreeze = new UnFreeze(); // unfreeze account
var accountDestroy = new Destroy(); // destroy account

var sendCode = new SendCode(); // forgot password: send code
var verifyCode = new VerifyCode(); // forgot password: verify code
var resetPwd = new Reset(); // forgot password: reset pwd 
var changePwd = new Change(); // change password: change pwd

// add handlers for different requests!
addRoute(/\/v1\/account\/checkuser/, checkuser); // for '/v1/account/checkuser'
addRoute(/\/v1\/account\/create$/, createUser); // for '/v1/account/create'
addRoute(/\/v1\/account\/signin$/, signIn); // for '/v1/account/signin'
addRoute(/\/v1\/account\/signout$/, signOut); // for '/v1/account/signout'
addRoute(/\/v1\/account\/send_activation_code$/, sendActivationCode); // for '/v1/account/send_activation_code'
addRoute(/\/v1\/account\/activate$/, activateAccount); // for '/v1/account/activate'
addRoute(/\/v1\/account\/get_service_tickets$/, getServiceTickets); // for '/v1/account/get_service_tickets'
addRoute(/\/v1\/account\/freeze$/, accountFreeze); // for '/v1/account/freeze'
addRoute(/\/v1\/account\/unfreeze$/, accountUnFreeze); // for '/v1/account/unfreeze'
addRoute(/\/v1\/account\/destroy$/, accountDestroy); // for '/v1/account/destroy'
addRoute(/\/v1\/password\/forgot\/send_code$/, sendCode); // for '/v1/password/forgot/send_code'
addRoute(/\/v1\/password\/forgot\/verify_code$/, verifyCode); // for '/v1/password/forgot/verify_code'
addRoute(/\/v1\/password\/forgot\/reset$/, resetPwd); // for '/v1/password/forgot/reset'
addRoute(/\/v1\/password\/change$/, changePwd); // for '/v1/password/change'

// Now, create http server
http.createServer(function (request, response) {
    var segs = url.parse(request.url);
    var handler = findHandler(segs.path);
    if (handler) {
        return handler.onHttpRequest(request, response);
    } 

    response.writeHead(404);
	response.end();
}).listen(8888);
