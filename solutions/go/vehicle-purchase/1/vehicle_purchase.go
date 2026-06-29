package purchase

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	if kind == "car" || kind == "truck" {
		return true
	}
	return false
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	if option1 < option2 {
		return option1 + " is clearly the better choice."
	}
	return option2 + " is clearly the better choice."
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	// is less than 3 year cost 20% less
	// is less than 10 year an greater than 3 year cost 30% less
	// is greater than 10 year 50% less of price
	if age < 3 {
		reduction := int(originalPrice) % 20
		cost := originalPrice - float64(reduction)
		return cost
	} else if age >= 3 && age < 10 {
		reduction := int(originalPrice) % 30
		cost := originalPrice - float64(reduction)
		return cost
	} else {
		reduction := int(originalPrice) % 50
		cost := originalPrice - float64(reduction)
		return cost
	}
}
