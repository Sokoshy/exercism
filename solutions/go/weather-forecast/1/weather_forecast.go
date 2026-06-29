// Package weather provides tools for forecasting and reporting weather conditions
// in various cities across the country of Goblinocus. It allows users to set and retrieve
// the current weather condition and location, and to generate a formatted weather report.
package weather

// CurrentCondition represents the current weather condition (e.g., "sunny", "rainy").
// It is a package-level variable that can be set and accessed by other functions.
var CurrentCondition string

// CurrentLocation represents the current city or location for which the weather is being reported.
// It is a package-level variable that can be set and accessed by other functions.
var CurrentLocation string

// Forecast sets the current location and weather condition, then returns a formatted weather report.
// It updates the package-level variables CurrentLocation and CurrentCondition with the provided values.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
