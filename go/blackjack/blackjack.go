package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "ten", "jack", "queen", "king":
		return 10
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	default:
		return 0
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var valCard1 int = ParseCard(card1)
	var valCard2 int = ParseCard(card2)
	var valTotalCard int = valCard1 + valCard2
	var valDealear int = ParseCard(dealerCard)
	var decission string

	switch {

	// for ace and card = 10
	case card1 == "ace" && card2 == "ace":
		decission = "P"
	case valTotalCard == 21:
		if valDealear != 10 && valDealear != 11 {
			decission = "W"
		} else {
			decission = "S"
		}

	//if the sum of the two cards is between 17 et 20, stand
	case valTotalCard >= 17 && valTotalCard <= 20:
		decission = "S"

	// if the sum of the two cards is between 12 et 16
	// decide according to the dealer's visible card
	case valTotalCard >= 12 && valTotalCard <= 16:
		if valDealear >= 7 {
			decission = "H"
		} else {
			decission = "S"
		}

	// if the sum is 11 or under, always draw a card
	case valTotalCard <= 11:
		decission = "H"
	}

	return decission
}
