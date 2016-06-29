function search(ele) {

    if(ele.keyCode == 13) {

  var out = findMinCoins(7);

        alert(out);        
    }
}


function minCoins (pennies, index, count) {

  var coins = [200, 100, 50, 20, 10, 5, 2, 1]; 
   if (pennies == 0) {
        return count;
    }
    if (index == coins.length) {
        return 0;
    }
    if (pennies < 0) {
        return 0;
    }

var countUsingIndex = minCoins(pennies - coins[index], index, count + 1);
var countWithoutUsingIndex = minCoins(pennies, index + 1, count);
    if (countUsingIndex == 0) {
        return countWithoutUsingIndex;
    }
    if (countWithoutUsingIndex == 0) {
        return countUsingIndex;
    }
    return Math.min(countUsingIndex, countWithoutUsingIndex);

}

function findMinCoins(sum) {
    return minCoins(sum, 0, 0);
}

