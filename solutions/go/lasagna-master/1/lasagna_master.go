package lasagna

// TODO: define the 'PreparationTime()' function
func PreparationTime(layer []string, minute int) int {
	if minute == 0 {
		minute = 2
	}
	numberLayer := len(layer)
	return minute * numberLayer
}

// TODO: define the 'Quantities()' function
func Quantities(layer []string) (int, float64) {
	var numberNoodles int
	var numberSauce int
	for _, v := range layer {
		switch v {
		case "noodles":
			numberNoodles++
		case "sauce":
			numberSauce++
		}
	}
	noodles := numberNoodles * 50
	sauce := float64(numberSauce) * 0.2
	return noodles, sauce
}

// TODO: define the 'AddSecretIngredient()' function
func AddSecretIngredient(friendsList []string, myList []string) {
	secretIngredient := friendsList[len(friendsList)-1]
	myList[len(myList)-1] = secretIngredient
}

// TODO: define the 'ScaleRecipe()' function
func ScaleRecipe(quantities []float64, portion int) []float64 {
	quantitiesCopy := make([]float64, len(quantities))
	copy(quantitiesCopy, quantities)
	var coefficient float64 = float64(portion) / 2.0
	for i, v := range quantitiesCopy {
		quantitiesCopy[i] = v * coefficient
	}
	return quantitiesCopy
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
