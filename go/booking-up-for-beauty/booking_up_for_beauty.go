package booking

import "time"

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
	t, _ := time.Parse("1/2/2006 15:04:05", date)
	return t
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	dateNow := time.Now()
	dateParse, _ := time.Parse("January 2, 2006 15:04:05", date)
	return dateParse.Before(dateNow)
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
	dateParse, _ := time.Parse("Monday, January 2, 2006 15:04:05", date)
	date = dateParse.Format("15:04")
	if date >= "12:00" && date < "18:00" {
		return true
	} else {
		return false
	}

}

// Description returns a formatted string of the appointment time.
func Description(date string) string {
	dateParse := Schedule(date)
	dateFormating := dateParse.Format("Monday, January 2, 2006, at 15:04.")
	return "You have an appointment on " + dateFormating
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	return time.Date(2025, time.September, 15, 0, 0, 0, 0, time.UTC)
}
