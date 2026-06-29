#include "difference_of_squares.h"

unsigned int sum_of_squares(unsigned int number){
    return number * (number + 1) / 2;
}
unsigned int square_of_sum(unsigned int number) {
    return sum_of_squares(number) * sum_of_squares(number);
}

unsigned int difference_of_squares(unsigned int number) {
    return square_of_sum(number) - sum_of_squares(number);
}
