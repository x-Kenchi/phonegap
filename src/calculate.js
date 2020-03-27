import { add } from "./operators/add.js";
import { substract } from "./operators/substract.js";
import { multiply } from "./operators/multiply.js";
import { divide } from "./operators/divide.js";

const operators = {
	'+': add,
	'-': substract,
	'*': multiply,
	'/': divide
}
function calculate(a, b, operator) {
    "use strict";
	return (operators[operator] || (() => 0))(parseFloat(a || 0),parseFloat(b || 0));
}

export{calculate}