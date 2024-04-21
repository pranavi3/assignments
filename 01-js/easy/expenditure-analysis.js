/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = {};
  for(let i = 0; i<transactions.length; i++){
    if(transactions[i]["category"] in ans){
      ans[transactions[i]["category"]] = ans[transactions[i]["category"]] + transactions[i]["price"];
    }else{
      ans[transactions[i]["category"]] = transactions[i]["price"];
    }
  }
  let res = [];
  let entries = Object.entries(ans);
  for(const [key, value] of entries){
    res.push(new Ex(`${key}`, parseInt(`${value}`)));
  }
  return res;
}
class Ex{
  constructor(category, totalSpent) {
    this.category = category;
    this.totalSpent = totalSpent;
  }
}
module.exports = calculateTotalSpentByCategory;
