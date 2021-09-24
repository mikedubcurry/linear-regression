const len = (a) => a.length; // length of source array
const sum = (a) => a.reduce((s, i) => s + i, 0); // sum items in array
const square = (a) => Math.pow(a, 2); // square a number
const getX = (a) => a.x; // return x value in object {x, y}
const getY = (a) => a.y; // return y value in object {x, y}
const getXY = (a) => a.x * a.y; // return x*y value in object {x, y}

const x_terms = (a) => a.map(getX); // return array of x values
const y_terms = (a) => a.map(getY); // return array of y values
const xy_terms = (a) => a.map(getXY); // return array of x*y values
const squared_terms = (a) => a.map(square); // return array of squared values

const sigmaX = (a) => sum(x_terms(a)); // sum of all x values
const sigmaY = (a) => sum(y_terms(a)); // sum of all y values
const sigmaXY = (a) => sum(xy_terms(a)); // sum of all x*y values

const xSquared = (a) => squared_terms(x_terms(a)); // array of x values squared
const sigmaX2 = (a) => sum(xSquared(a)); // sum of x squared values

const intNum = (a) => sigmaY(a) * sigmaX2(a) - sigmaX(a) * sigmaXY(a); // intercept formula numerator
const intDen = (a) => len(a) * sigmaX2(a) - square(sigmaX(a)); // intercept formula denomonator
const intercept = (a) => intNum(a) / intDen(a); // b value in `y = mx + b`

const slopeNum = (a) => len(a) * sigmaXY(a) - sigmaX(a) * sigmaY(a); // slope formula numerator
const slopeDen = (a) => len(a) * sigmaX2(a) - square(sigmaX(a)); // slope formula denomonator
const slope = (a) => slopeNum(a) / slopeDen(a); // m value in `y = mx + b`

const linReg = (a) => (x) => x * slope(a) + intercept(a); // returns `y = mx + b` fn for a given array of {x, y}


const date = (d) => {
    let dt = new Date(d);
    return `${dt.getFullYear()}/${
        dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1
    }/${dt.getDate()}`;
};

module.exports = { linReg, date };
