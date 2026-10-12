# Manual Review Issue Log

## Issue 1

- **Location:** `bankOfTheNorth.ts`, line 7
- **Issue:** `BALANCE` is stored as an array instead of a numeric account balance.
- **Explanation:** The program performs arithmetic on the balance, but an array cannot represent the account balance required by the program requirements.
- **Suggested Fix:** Store the account balance as a number and use that value consistently in deposit, withdrawal, transfer, and balance-check operations.
- **Status:** Fixed

## Issue 2

- **Location:** `bankOfTheNorth.ts`, lines 10-18
- **Issue:** `deposit` does not update the account balance correctly.
- **Explanation:** The function combines the array `BALANCE` with a number, assigns the result only to the local parameter, and does not validate that the deposit amount is valid.
- **Suggested Fix:** Validate the amount, update the shared numeric balance, and return the updated balance only when the PIN is correct.
- **Status:** Fixed

## Issue 3

- **Location:** `bankOfTheNorth.ts`, lines 21-29
- **Issue:** `withdrawl` is misspelled and its implementation does not withdraw funds.
- **Explanation:** The function name is inconsistent with the operation it represents. It also uses an undefined `balance` variable, adds instead of subtracting the withdrawal amount, and has no insufficient-funds check.
- **Suggested Fix:** Rename the function to `withdraw`, use the account balance, subtract the amount, reject invalid amounts, and prevent the balance from becoming negative.
- **Status:** Fixed

## Issue 4

- **Location:** `bankOfTheNorth.ts`, lines 32-35
- **Issue:** The balance message is unreachable.
- **Explanation:** The function returns before the `console.log` statement, so the message never executes.
- **Suggested Fix:** Log the balance before returning, or remove the log and let the caller display the returned value.
- **Status:** Fixed

## Issue 5

- **Location:** `bankOfTheNorth.ts`, lines 38-43
- **Issue:** `transfer` does not enforce the PIN or correctly withdraw the transfer amount.
- **Explanation:** The `pin` parameter is ignored, `withdrawl` is called with only the amount even though it expects two arguments, and the transfer result is not checked before reporting success.
- **Suggested Fix:** Validate the PIN, withdraw the amount through a correctly defined withdrawal operation, stop on failure, and report success only after the balance changes.
- **Status:** Fixed

## Issue 6

- **Location:** `bankOfTheNorth.ts`, lines 38-43
- **Issue:** `transfer` returns a function reference instead of the current balance.
- **Explanation:** `return balanceCheck` returns the function itself rather than calling it, so callers do not receive the account balance.
- **Suggested Fix:** Return `balanceCheck()` after a successful transfer, or return the updated balance directly.
- **Status:** Fixed

## Issue 7

- **Location:** `bankOfTheNorth.ts`, lines 38-43
- **Issue:** The recipient value is only included in a message and no recipient account is updated.
- **Explanation:** The function claims to transfer money to another user, but it does not model or update a recipient account. It can report a successful transfer without completing the destination-side operation.
- **Suggested Fix:** Define how recipient accounts are represented and update the recipient balance only after the sender withdrawal succeeds.
- **Status:** Fixed
