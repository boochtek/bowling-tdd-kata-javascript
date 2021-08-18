# Bowling

Ten-pin bowling is a game where players roll a heavy ball to knock down
pins arranged in a triangle.

In this kata, we need code to keep score for a game of bowling.

## Scoring

The game consists of 10 frames. A frame is composed of one or two ball
throws with 10 pins standing at the beginning of each frame.
There are three cases for the tabulation of a frame:

* A strike is where all ten pins are knocked down by the first
  throw. The total value of a strike is 10 plus the number of pins
  knocked down in the next two throws. If a strike is immediately
  followed by a second strike, then the value of the first strike
  cannot be determined until the ball is thrown one more time.

* A spare is where all ten pins are knocked down by the second
  throw. The total value of a spare is 10 plus the number of pins
  knocked down in their next throw.

* An open frame is where a score of less than 10 is recorded for the
  frame. In this case the score for the frame is the number of pins
  knocked down.

Here is a three frame example:

| Frame 1         | Frame 2       | Frame 3                |
| :-------------: |:-------------:| :---------------------:|
| X (strike)      | 5/ (spare)    | 9 0 (open frame)       |

Frame 1 is (10 + 5 + 5) = 20

Frame 2 is (5 + 5 + 9) = 19

Frame 3 is (9 + 0) = 9

This means the current running total is 48.

The tenth frame in the game is a special case. If someone throws a
strike or a spare then they get a fill ball. Fill balls exist to
calculate the total of the 10th frame. Scoring a strike or spare on
the fill ball does not give the player more fill balls. The total
value of the 10th frame is the total number of pins knocked down.

For a tenth frame of X1/ (strike and a spare), the total value is 20.

For a tenth frame of XXX (three strikes), the total value is 30.

See the [Wikipedia article](https://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring) for more details.

## Requirements

Write code to keep track of the score of a game of bowling.
This should be able to track of the score in a completed or current game.

You may design your own API.

Keep your design flexible enough that in a future version
we can print out the scores for each frame.


## Setup

Pull in all the JavaScript dependencies:

~~~ shell
yarn install
~~~

## Running the test suite

Execute the tests with:

~~~ shell
yarn test
~~~

You can have the tests run continuously with:

~~~ shell
yarn test:watch
~~~

## Credits

This is based on an [Exercism](http://exercism.io) exercise.
However, we needed a kata to practice TDD, so we removed the tests.

This originally comes from the [Bowling Game Kata at But UncleBob](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata).
