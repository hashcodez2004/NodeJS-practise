//we want to use this math in hello.js
//therefore we have to export whatever we want to use in hello.js

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
// one more way to export

// exports.add = (a,b) => a+b;
// exports.sub = (a,b) => a-b;

// module.exports = add;
// module.exports = sub; //if we will use this way then the value will be overwritten to sub...no add operatin will be performed
//therefore use objects for multiple imports

module.exports = {
    add,                    //more preffered
    sub                  
}
