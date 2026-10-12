const USER = "Rose Thecat";
const USER_PIN = 1234;
let balance = 998;

function hasValidAmount(amount: number) {
  return Number.isFinite(amount) && amount > 0;
}

export function deposit(pin: number, amount: number) {
  if (pin !== USER_PIN) {
    console.log("Incorrect PIN");
    return;
  }

  if (!hasValidAmount(amount)) {
    console.log("Deposit amount must be positive");
    return;
  }

  balance += amount;
  console.log(balance);
  return balance;
}

export function withdraw(pin: number, amount: number) {
  if (pin !== USER_PIN) {
    console.log("Incorrect PIN");
    return;
  }

  if (!hasValidAmount(amount)) {
    console.log("Withdrawal amount must be positive");
    return;
  }

  if (amount > balance) {
    console.log("Insufficient funds");
    return;
  }

  balance -= amount;
  console.log(balance);
  return balance;
}

export function balanceCheck(pin: number) {
  if (pin !== USER_PIN) {
    console.log("Incorrect PIN");
    return;
  }

  console.log(`Your balance is ${balance}`);
  return balance;
}

export function transfer(pin: number, amount: number, recipient: string) {
  if (pin !== USER_PIN) {
    console.log("Incorrect PIN");
    return;
  }

  const updatedBalance = withdraw(pin, amount);
  if (updatedBalance === undefined) {
    return;
  }

  console.log(`Success! ${amount} was transferred to ${recipient}`);
  return balanceCheck(pin);
}

export { USER };