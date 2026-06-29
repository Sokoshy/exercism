#include "grains.h"

uint64_t square(uint8_t index) {

    if (index < 1 || index > 64) {
            return 0;
    }

    uint64_t result = 1;
    for (int i = 1; i <= index - 1; i++) {
        result *= 2;
    }
    return result;
}

uint64_t total(void) {
    uint64_t total_grains = 0;

    for (uint8_t i = 1; i <= 64; i++) {
        total_grains += square(i);
    }
    return total_grains;
}
