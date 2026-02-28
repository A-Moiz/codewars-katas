function realFloor(floorNumber) {
    if (floorNumber <= 0) return floorNumber;

    if (floorNumber > 13) return floorNumber - 2;

    return floorNumber - 1;
}