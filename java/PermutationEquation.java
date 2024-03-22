/*
Problem : Permutation Equation
----------------------------------------------------------------------------------------------------------
John Watson knows of an operation called a right circular rotation on an array of integers.
One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

See more : https://www.hackerrank.com/challenges/permutation-equation/problem

*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PermutationEquation {
    /**
     * Finds the values of y for all x in the arithmetic sequence 1 to n,
     * where y = p(p(x)) for a given sequence p.
     *
     * @param p The sequence of integers.
     * @return A list containing the values of y for all x.
     */
    public static List<Integer> permutationEquation(List<Integer> p) {
        List<Integer> result = new ArrayList<>();
        for (int x = 1; x <= p.size(); x++) {
            int idx = p.indexOf(x) + 1;
            int y = p.indexOf(idx) + 1;
            result.add(y);
        }
        return result;
    }

    public static void main(String[] args) {
        List<Integer> p_sequence1 = Arrays.asList(2, 3, 1);
        List<Integer> result1 = permutationEquation(p_sequence1);
        System.out.println(result1.equals(Arrays.asList(2, 3, 1)));  

        List<Integer> p_sequence2 = Arrays.asList(4, 3, 5, 1, 2);
        List<Integer> result2 = permutationEquation(p_sequence2);
        System.out.println(result2.equals(Arrays.asList(1, 3, 5, 4, 2))); 
    }
}

