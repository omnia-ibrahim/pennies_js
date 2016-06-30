/**
 * Function to get the user input
 */
function search(ele) {
    
    // Check if Enter is pressed
    if(ele.keyCode == 13) {
    
      var amount = document.getElementById("amount");
      var str = amount.value;
  
      // Trim white spaces at the beginning and end of the string
      var str_trimmed = str.trim();

      // Validate input
      var response = validateInput(str_trimmed);

      alert(response);
      //alert(str_trimmed);
     var out = minCoins(1320);
     var formatted_output = formatOutput(out);
     $('#form-output').html(formatted_output);
      alert(out);
alert(out.length);
for (var i = 0; i < out.length; ++i) {
//        alert(out[i]);    
//alert(out.length);    
    }  
  }
}


/**
 *
 */
function minCoins (n) {

  // Coins available
  var coins = [200, 100, 50, 20, 10, 5, 2, 1]; 

  var numberOfCoins = [0];
  var coinUsed = [0];
    
    // Dynamic programming, compute the coin used from 1..n.
    for (var i=1; i<=n; i++) {
        var minNumberOfCoins = n;
        var coin = -1;
        
        // What next coin would get to 'i' using the minimum # of coins.
        coins.forEach( function(c) {
            if (c <= i) {
                var min = numberOfCoins[i-c] + 1;
                if (min < minNumberOfCoins) {
                	minNumberOfCoins = min;
                	coin = c;
                }
            }
        });
        
        numberOfCoins[i] = minNumberOfCoins;
        coinUsed[i] = coin;
    }
    
    // What coins were used?
    var change = [];
    var total = n;
    while (total > 0) {
    	change.push(coinUsed[total]);
        total -= coinUsed[total];
    }
    
    return change;
}

/**
 * Function that takes the number, current index and count and then return the min
 * number of coins for that amount
 */
/*function minCoins (pennies, index, count) {

  var coins = [200, 100, 50, 20, 10, 5, 2, 1]; 
  
   var returned_coins = [];
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

*/

/**
 *
 */
function validateInput(str) {
  var response;
  var regex_1 = /[^£.p\d]/g;
  var regex_2 = /\d+/g;
  var regex_3 = /[a-zA-Z]/;

  var str_suffix = str.substring(0, str.length-1);
  if (!str) {
      response = 'Error: Invalid input';
    } else if (str === '0'){
      response = 'Error: Input must be greater than 0.';
    } else if (regex_1.test(str)) {
      response = 'Error: Contains invalid characters.';
    } else if (!regex_2.test(str)) {
      response = 'Error: Missing value.';
    } else if (regex_3.test(str_suffix)) {
      response = 'Error: valid character in the wrong position.';
    } else {
      response = true;
    }

  return response;
}

/**
 * Parse Input
 */
function parseInput(input) {

}

/**
 *
 */
function formatOutput(out) {
  var result = '';
  var result_1 = '';
 var counted_array = countDup(out);
  for (var i = 0; i < counted_array[0].length; ++i) {
    var value = counted_array[0][i];
    if (counted_array[0][i] === 200) {
        result_1 = '£2';
    }    
    else if (counted_array[0][i] === 100) {
        result_1 = '£1';
    }

    else {
        result_1 = counted_array[0][i] + 'p';
    }
     result += counted_array[1][i] + ' X ' + result_1 + '<br />';

  }
  
  return result;
}

/**
 * count duplicates of an array
 */
function countDup(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}
