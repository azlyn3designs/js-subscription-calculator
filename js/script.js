//Subscription Plan Calculator
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"; //"basic" subscription plan (default)
var subDuration = 1; //one month subscription (default)

//Subscription plan dropdown menu selection Event Listener on change
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

//Duration in number of months dropdown menu selection Event Listener on change
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

//calculates monthly costs for the subscription plans offered
var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //one month "basis" subscription plan cost (default)
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
