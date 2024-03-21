/*
Problem : Circular Array Rotation
----------------------------------------------------------------------------------------------------------
John Watson knows of an operation called a right circular rotation on an array of integers.
One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
See more : https://www.hackerrank.com/challenges/circular-array-rotation/problem
*/


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CircularArrayRotation {

    /**
     * Rotates the elements of the given list in a circular manner by the specified number of steps,
     * and returns the values at the specified indices after rotation.
     *
     * @param a       The list of integers to rotate.
     * @param k       The number of steps to rotate the list.
     * @param queries The list of indices to report after rotation.
     * @return A list containing the values at the specified indices after rotation.
     */
    public static List<Integer> circularArrayRotation(List<Integer> a, int k, List<Integer> queries) {
        List<Integer> result = new ArrayList<>();
        int length = a.size();
        k %= length;

        for (int i = 0; i < queries.size(); i++) {
            int index = (queries.get(i) - k + length) % length;
            result.add(a.get(index));
        }

        return result;
    }

    public static void main(String[] args) {
        // Test 1
        List<Integer> a = Arrays.asList(1, 2, 3);
        int k = 2;
        List<Integer> queries = Arrays.asList(0, 2);
        List<Integer> result = circularArrayRotation(a, k, queries);
        System.out.println(result.equals(Arrays.asList(2, 1))); 
        
        // Test 2
        List<Integer> b = Arrays.asList(5, 6, 7, 8, 9);
        int k2 = 3;
        List<Integer> queries2 = Arrays.asList(1, 3);
        List<Integer> result2 = circularArrayRotation(b, k2, queries2);
        System.out.println(result2.equals(Arrays.asList(8, 5)));
    }

}

