public class SaveThePrisoner {
    /**
     * Determines the chair number of the prisoner who will receive the last candy.
     * 
     * @param n the number of prisoners
     * @param m the number of candies
     * @param s the chair number to begin passing out candies from
     * @return the chair number of the prisoner to warn
     */
    public static int saveThePrisoner(int n, int m, int s) {
        // Calculate the position of the last prisoner 
        int lastPrisoner = (s + m - 1) % n;
        
        // Adjust for the edge case where the calculated position is 0
        if (lastPrisoner == 0) {
            lastPrisoner = n;
        }
        
        return lastPrisoner;
    }

    public static void main(String[] args) {
        // Test cases
        System.out.print("Test Case 1: ");
        System.out.println(saveThePrisoner(5, 2, 1) == 2); 
        System.out.print("Test Case 2: ");
        System.out.println(saveThePrisoner(7, 19, 2) == 6); 
        System.out.print("Test Case 3: ");
        System.out.println(saveThePrisoner(3, 7, 3) == 3);
    }
}
