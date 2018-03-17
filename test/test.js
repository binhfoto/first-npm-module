const expect = require('chai').expect;
const calculation = require('../index');

describe('test calculation', function () {
    it('sum', function () {
        expect(calculation.sum(1, 2)).to.equal(3);
    });

    it('subtract', function () {
        expect(calculation.subtract(1, 2)).to.equal(-1);
    });

    it('multiply', function () {
        expect(calculation.multiply(1, 2)).to.equal(2);
    });

    it('divide', function () {
        expect(calculation.divide(2, 1)).to.equal(2);
    });
});