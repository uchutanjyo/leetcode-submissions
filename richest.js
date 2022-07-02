const maximumWealth = function(accounts) {
  const reducedAccountTotals = [];
  const initialValue = 0;
 accounts.map((account) => {
  const reducedAccount = account.reduce((prevValue, accValue) =>  prevValue + accValue, initialValue)
  reducedAccountTotals.push(reducedAccount)
  })
  reducedAccountTotals.sort((a, b) => { return a - b })
  return reducedAccountTotals[reducedAccountTotals.length - 1]
}
