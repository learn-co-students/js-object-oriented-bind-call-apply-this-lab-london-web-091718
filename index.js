function justInvoke (fn) {
  return fn();
};

function setThisWithCall (fn, thisVal, arg) {
  return fn.call(thisVal, arg);
};

function setThisWithApply (fn, thisVal, arg) {
  return fn.apply(thisVal, arg);
};

function returnNewFunctionOf (func, thisVal) {
  return func.bind(thisVal);
}
