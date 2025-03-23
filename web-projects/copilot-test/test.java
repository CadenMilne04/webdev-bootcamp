import java.lang.Math;
import java.util.Scanner;

public class test {

  public static void main(String[] args) {
    //random int
    int x = (int) (Math.random() * 100);
    int y = 10;
    Scanner scan = new Scanner(System.in);
    System.out.println("Welcome to the guessing game!");

    while (true) {
      System.out.println("Guess my number: \nYou have " + y + " guesses left.");
      int guess = scan.nextInt();
      if (y == 0) {
        System.out.println("You ran out of guesses!");
        break;
      } else if (guess == x) {
        System.out.println(
          "You got it! The number was " +
          x +
          ". You got it with " +
          y +
          " guesses left!"
        );
        break;
      } else if (guess > x) {
        System.out.println("Too high!");
      } else {
        System.out.println("Too low!");
      }
      y--;
    }
  }
}
