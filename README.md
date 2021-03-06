## Questions to discuss

As my input grows, the possible challenge I see is that if the input remains sorted by sequence, a lot of comparison will have to be done in order to capture all the intervals. I will address that problem as I already did in my solution by sorting by the interval start property.

### Time Complexity

The time complexity of the merge interval function is O(N * logN), where N is the total number of intervals. I am iterating the intervals only once which will take O(N). However, since I needed to sort the intervals based on their start value, the time complexity becomes O(N * logN).

### Space Complexity

The space complexity of the above algorithm will be O(N) as I need to return a list containing all the merged intervals.

### Assumptions

- The same interval should not be added twice
- Only added intervals can be removed
- Only valid intervals can be deleted