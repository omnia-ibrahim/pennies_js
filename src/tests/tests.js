 QUnit.test('minCoins', function( assert ) {
    assert.equal(minCoins (100), 100);
    assert.equal(minCoins (7), '5,2');
    assert.equal(minCoins (456), '200,200,50,5,1');
});

 QUnit.test('validateInput', function( assert ) {
    assert.equal(validateInput('100p'), true);
    assert.equal(validateInput('o2342'), 'Error: Contains invalid characters.');
    assert.equal(validateInput('23p42'), 'Error: valid character in the wrong position.');
});

QUnit.test('parseInput', function( assert ) {
    assert.equal(parseInput('100p'), '100');
    assert.equal(parseInput('£1320'), '132000');
    assert.equal(parseInput('£44.54'), '4454');
});
