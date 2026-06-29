package raindrops

import "fmt"

func Convert(number int) string {
	var divisor []int = []int{3, 5, 7}
	sounds := []string{"Pling", "Plang", "Plong"}
	var result string
	for i := 0; i < len(divisor); i++ {
		if number%divisor[i] == 0 {
			result += sounds[i]
		}
	}
	if result == "" {
		return fmt.Sprintf("%d", number)
	}
	return result
}
