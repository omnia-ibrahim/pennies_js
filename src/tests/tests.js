 QUnit.test('minCoins', function( assert ) {
    assert.equal(minCoins (100), 100);
    assert.equal(minCoins (7), '5,2');
});

 QUnit.test('validateInput', function( assert ) {
    assert.equal(validateInput('100p'), true);
    assert.equal(validateInput('o2342'), 'Error: Contains invalid characters.');
});

QUnit.test('parseInput', function( assert ) {
    assert.equal(parseInput('100p'), '100');
    assert.equal(parseInput('£1320'), '132000');
    assert.equal(parseInput('£44.54'), '4454');
});