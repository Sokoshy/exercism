package interest

// InterestRate returns the interest rate for the provided balance.
func InterestRate(balance float64) float32 {
	switch {
	case balance < 0:
		return 3.213
	case balance >= 0 && balance < 1000:
		return 0.5
	case balance >= 1000 && balance < 5000:
		return 1.621
	default:
		return 2.475
	}
}

// Interest calculates the interest for the provided balance.
func Interest(balance float64) float64 {
	switch {
	case balance < 0:
		return balance * 0.03213
	case balance >= 0 && balance < 1000:
		return balance * 0.005
	case balance >= 1000 && balance < 5000:
		return balance * 0.01621
	default:
		return balance * 0.02475
	}
}

// AnnualBalanceUpdate calculates the annual balance update, taking into account the interest rate.
func AnnualBalanceUpdate(balance float64) float64 {
	switch {
	case balance < 0:
		return (balance * 0.03213) + balance
	case balance <= 0 && balance < 1000:
		return (balance * 0.005) + balance
	case balance >= 1000 && balance < 5000:
		return (balance * 0.01621) + balance
	default:
		return (balance * 0.02475) + balance
	}
}

// YearsBeforeDesiredBalance calculates the minimum number of years required to reach the desired balance.
func YearsBeforeDesiredBalance(balance, targetBalance float64) int {
	var years int
	for balance < targetBalance {
		years++
		balance += Interest(balance)
	}
	return years
}
