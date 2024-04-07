Results for the tinyArray
insert 70.875 μs
append 39.25 μs

Results for the smallArray
insert 7.792 μs
append 6.292 μs

Results for the mediumArray
insert 101.042 μs
append 86.333 μs

Results for the largeArray
insert 6.469459 ms
append 270.5 μs

Results for the extraLargeArray
insert 773.287792 ms
append 1.05125 ms

| Array | Insert | Append |
|-------|--------|--------|
| tinyArray | 70.875 μs | 39.25 μs |
| smallArray | 7.792 μs | 6.292 μs |
| mediumArray | 101.042 μs | 86.333 μs |
| largeArray | 6.469459 ms | 270.5 μs |
| extraLargeArray | 773.287792 ms | 1.05125 ms |

After performing Insert(unshift) and append(push) on all 5 given arrays of different sizes, the result shows that, as the size of the array changes/increases the time required to perform both the operation also increases. For tinyArray insert takes 70.875 μs and append takes 39.25 μs which is more compared to smallArray but after performing these operations on mediumArray, largeArray, and extraLargeArray the time needed for insertion significantly increases, while append in comparison to insertion takes much less time. 
These tests show that insert(unshift) is less efficient compared to the append(push) method. As the array size increases the insert operation scales less efficiently than append.

The Unshift is much slower compared to Push method because every time we insert array element at the first position, the rest of the array elements moves to the left after adding that element and also the their index changes which take more time than just adding an element at the end of array.
