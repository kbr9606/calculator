var input = {"array" : []};

input.getInput = function() {
    return this.array.join("");
};

input.removeAll = function(value) {
    this.array = [];
    this.array.push(value);
};

input.empty = function() {
    return this.array.length === 0;
};

input.prepareCalc = function() {
    this.array = this.array.join("").split(" ");
};

input.getValue = function() {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};

input.getOpertator = function() {
    var op = this.array.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        return op;
    }
    else {
        return "$";
    }
}

var output = {};
output.text = document.getElementById("output");

output.print = function(str) {
    this.text.innerHTML = str;
};

output.display = function() {
    this.text.innerHTML = input.getInput();
}

var calculator = {};
calculator.calculate = function(first, second, op) {
    var ret;
    switch (op) {
        case "+" :
        ret = first + second;
        break;
        case "-" :
        ret = first - second;
        break;
        case "*" :
        ret = first * second;
        break;
        case "/" :
        ret = first / second;
        break;
        default :
        return NaN;
    }
    return ret;
}

var clickNumber = function(event) {
    var str = event.target.innerHTML;
    console.log(str);

    if (str === "BS") {
        input.array.pop();
    }
    else if (str === "+" || str === "-" || str === "*" || str === "/") {
        input.array.push(" " + str + " ");
    }
    else {
        input.array.push(str);
    }

    if (input.empty()) {
        output.text.innerHTML = "Empty";
    }
    else {
        output.display();
    }
};

var showResult = function(event) {
    input.prepareCalc();
    var first = input.getValue();
    while(!input.empty()) {
        var op = input.getOpertator();
        var second = input.getValue();
        result = calculator.calculate(first, second, op);
    }
    output.print(result);
    input.removeAll(result);
}


