package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
	var measurements = map[string]int{
		"quarter_of_a_dozen": 3,
		"half_of_a_dozen":    6,
		"dozen":              12,
		"small_gross":        120,
		"gross":              144,
		"great_gross":        1728,
	}
	return measurements
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	return make(map[string]int)
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	if unitsName, ok := units[unit]; ok {
		bill[item] += unitsName
		return true
	}
	return false
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	if _, ok := bill[item]; ok {
		if _, ok2 := units[unit]; ok2 {
			newQuantity := bill[item] - units[unit]
			if newQuantity < 0 {
				return false
			} else if newQuantity == 0 {
				delete(bill, item)
				return true
			} else {
				bill[item] = newQuantity
				return true
			}
		}
	}
	return false
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	if _, ok := bill[item]; ok {
		itemQty := bill[item]
		return itemQty, true
	}
	return 0, false
}
