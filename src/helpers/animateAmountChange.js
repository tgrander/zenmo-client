const animateAmountChange = (oldAmount, newAmount, cb) => {
  var count = oldAmount;
  var number = newAmount;
  var interval = setInterval(function(){
    cb(++count)
    if (count === number) clearInterval(interval)
  }, 100);
}

export default animateAmountChange
