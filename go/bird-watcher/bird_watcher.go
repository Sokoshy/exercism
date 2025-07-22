package birdwatcher

// TotalBirdCount return the total bird count by summing
// the individual day's counts.
func TotalBirdCount(birdsPerDay []int) int {
	var totalBird int
	for _, v := range birdsPerDay {
		totalBird += v
	}
	return totalBird
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
	var birdWeek int
	if week == 1 {
		birdWeek1 := birdsPerDay[:7]
		birdWeek = TotalBirdCount(birdWeek1)
	} else {
		weekStart := (week - 1) * 7
		weekEnd := weekStart + 7
		birdWeek2 := birdsPerDay[weekStart:weekEnd]
		birdWeek = TotalBirdCount(birdWeek2)

	}
	return birdWeek
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	for i, v := range birdsPerDay {
		if i%2 == 0 {
			birdsPerDay[i] = v + 1
		}
	}
	return birdsPerDay
}
