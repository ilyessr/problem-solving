/*
Problem : ViralAdvertising
----------------------------------------------------------------------------------------------------------
Each day, half of the recipients like the advertisement and will share it with 3 friends on the following day. 
Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1 with 5 shared.

See more : https://www.hackerrank.com/challenges/strange-advertising/problem

*/


public class ViralAdvertising {

    /**
     * Counts the total number of likes by the end of a given number of days.
     * Each day, half of the recipients like the advertisement and share it with 3 friends on the following day.
     * 
     * @param n The number of days.
     * @return The total number of likes by the end of the specified number of days.
     */
    public static int viralAdvertising(int n) {
        int shared = 5;
        int cumulative = 0;
        for (int i = 1; i <= n; i++) {
            int liked = shared / 2;
            cumulative += liked;
            shared = liked * 3;
        }
        return cumulative;
    }

    public static void main(String[] args) {
        // Existing tests
        int days1 = 3; // Input: How many days
        int totalLikes1 = viralAdvertising(days1);
        System.out.println("Total likes by the end of day " + days1 + ": " + totalLikes1); // Output: 9
        
        // Additional tests
        int days2 = 5; // Input: How many days
        int totalLikes2 = viralAdvertising(days2);
        System.out.println("Total likes by the end of day " + days2 + ": " + totalLikes2); // Output: 24
    }
}
