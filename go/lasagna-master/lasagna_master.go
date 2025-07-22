package lasagna

// TODO: define the 'PreparationTime()' function
func PrepartionTime(layer []string, minute int) int {
	numberLayer := len(layer)
	return minute * numberLayer
}

// TODO: define the 'Quantities()' function
func Quantities(layer []string) (int, float64) {
	var numberNoodles int
	for _, v := range layer {
		if v == "noodles" {
			numberNoodles++
		}
	}
	noodles := numberNoodles * 50
	sauce := float64(numberNoodles) * 0.4
	return noodles, sauce
}

// TODO: define the 'AddSecretIngredient()' function


// TODO: define the 'ScaleRecipe()' function

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
