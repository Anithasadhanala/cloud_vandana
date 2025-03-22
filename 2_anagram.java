import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static boolean areAnagrams(String str1, String str2) {
        char[] arr1 = str1.toLowerCase().toCharArray();
        char[] arr2 = str2.toLowerCase().toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter two words in format \"word1\", \"word2\": ");
        String input = scanner.nextLine();
        String[] words = input.replaceAll("\"", "").split(",\\s*");

        if (words.length == 2) {
            System.out.println(areAnagrams(words[0], words[1]));
        } else {
            System.out.println("Invalid input format. Please use \"word1\", \"word2\"");
        }
        scanner.close();
    }
}
