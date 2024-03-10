
/*
Problem : Angry Professor 
----------------------------------------------------------------------------------------------------------
A Discrete Mathematics professor has a class of students. 
Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts.

See more : https://www.hackerrank.com/challenges/angry-professor/problem
*/

import java.util.Arrays;
import java.util.List;

public class AngryProfessor {

    /**
     * Determines if the class is cancelled or not based on the given threshold and arrival times of students.
     *
     * @param k The cancellation threshold. If the number of students arrived on time or early is less than k, the class will be cancelled.
     * @param a List of arrival times of students. A positive value indicates a late arrival, while 0 or negative indicates on time or early arrival.
     * @return "YES" if the class is cancelled, "NO" otherwise.
     */
    public static String angryProfessor(int k, List<Integer> a) {
        int count = 0;
        // Count the number of students arrived on time or early
        for (int arrivalTime : a) {
            if (arrivalTime <= 0) {
                count++;
            }
        }
        // If the count of on-time or early students is greater than or equal to threshold, class is not cancelled
        if (count >= k) {
            return "NO"; // Class is not cancelled
        } else {
            return "YES"; // Class is cancelled
        }
    }

    public static void main(String[] args) {
        // Test Case 1
        int k1 = 3;
        List<Integer> a1 = Arrays.asList(-1, -3, 4, 2);


        // Expected Output: "YES"
        System.out.println("Test Case 1: " + angryProfessor(k1, a1));

        // Test Case 2
        int k2 = 2;
        List<Integer> a2 = Arrays.asList(0, -1, 2, 1);

        // Expected Output: "NO"
        System.out.println("Test Case 2: " + angryProfessor(k2, a2));
    }
}
