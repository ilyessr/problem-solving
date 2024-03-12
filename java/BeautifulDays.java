/*
Problem : Beautiful Days at the Movies
----------------------------------------------------------------------------------------------------------
Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. 
She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

See more : https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
*/



public class BeautifulDays {
    /*
     * The method calculates the number of beautiful days within a specified range.
     *
     * @param i The starting day of the range.
     * @param j The ending day of the range.
     * @param k The divisor used to determine if a day is beautiful.
     * @return The number of beautiful days within the specified range.
     */
    public static int beautifulDays(int i, int j, int k) {
        int count = 0;
        
        // Iterate through each day in the range
        for (int day = i; day <= j; day++) {
            // Check if the day is beautiful
            if (isBeautifulDay(day, k)) {
                count++;
            }
        }
        
        return count;
    }
    
    /*
     * The method reverses a given number.
     *
     * @param number The number to be reversed.
     * @return The reversed number.
     */
    public static int reverseNumber(int number) {
        // Convert the number to a string, reverse it, and parse it back to an integer
        String original = String.valueOf(number);
        String reversed = new StringBuilder(original).reverse().toString();
        return Integer.parseInt(reversed);
    }
    
    /*
     * The method checks if a day is beautiful based on a given divisor.
     *
     * @param day The day to be checked.
     * @param k The divisor used to determine if the day is beautiful.
     * @return True if the day is beautiful, otherwise false.
     */
    private static boolean isBeautifulDay(int day, int k) {
        // Calculate the reverse of the day's number
        int reverse = reverseNumber(day);
        // Check if the absolute difference between the day and its reverse is divisible by k
        return Math.abs(day - reverse) % k == 0;
    }

    public static void main(String[] args) {
        int i = 20;
        int j = 23;
        int k = 6;
        int expectedOutput = 2;
        
        // Calculate the actual output
        int actualOutput = BeautifulDays.beautifulDays(i, j, k);
        
        // Compare the actual output to the expected output
        if (actualOutput == expectedOutput) {
            System.out.println("Test passed! Number of beautiful days: " + actualOutput);
        } else {
            System.out.println("Test failed! Expected: " + expectedOutput + ", Actual: " + actualOutput);
        }
    }

}