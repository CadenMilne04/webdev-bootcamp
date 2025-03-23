exports.getDate = function() {
const today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-us", options);
    }

exports.getDay =function(){
    const today = new Date();
        var options = {
            weekday: "long"
        };
    
        return today.toLocaleDateString("en-us", options);
    }