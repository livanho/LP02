# Group Work Check

This activity was completed as a solo group-work simulation.

## Reviewer

- Reviewed `bankOfTheNorth.ts` manually before running ESLint.
- Identified defects involving the balance data type, deposits, withdrawals, PIN enforcement, unreachable logging, transfers, and recipient handling.
- Confirmed that the corrected implementation addresses the issues recorded in `issue_log.md`.

## Scribe

- Compared the issue log with `fixBankOfTheNorth.ts`.
- Confirmed that all seven documented issues have a suggested fix and are marked `Fixed`.
- No additional issues found during the comparison.

## Author

- Created `fixBankOfTheNorth.ts` as a corrected copy rather than changing the original review subject.
- Added numeric balance handling, PIN checks for every action, positive amount validation, insufficient-funds protection, and transfer failure handling.
- No additional unresolved issues found.

## ESLint Comparison

The original file produced five errors:

- `USER` was assigned but never used.
- The balance assignment in `deposit` was useless and unused.
- The withdrawal `amount` parameter was unused.
- The `transferAmount` variable was assigned but never used.

The corrected file passed ESLint with zero errors and zero warnings.

The group identified issues that ESLint did not identify, including the array-based balance model, incorrect deposit arithmetic, adding instead of subtracting during withdrawal, missing overdraft protection, missing PIN enforcement in `transfer` and `balanceCheck`, unreachable logging, incorrect transfer arguments, reporting transfer success without confirming withdrawal, and returning a function reference instead of calling it.

ESLint identified unused variables and assignments that the manual review did not list as separate issues. These findings were addressed as part of the corrected implementation.