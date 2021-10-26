# Bowling

Ten-pin bowling is a game where players roll a heavy ball to knock down
pins arranged in a triangle.

In this kata, we need code to keep score for a game of bowling.

## TDD

Some things to keep in mind when doing this with TDD:

* The rules of TDD require you to write a failing test before you write the code to make the test pass.
* There are often 2 separate sets of tests that you're trying to make pass - a high-level test suite (often integration or end-to-end tests) and a low-level test suite (usually unit tests). The low-level tests are required to get the high-level test to pass.
* The red/green/refactor cycle should generally be pretty quick for low-level tests.
* The refactor step isn't always necessary.
* If you have a single test that says the answer should be 0, it's OK to have the code just return 0. Following tests will force you to change it when necessary. It might seem like a waste of time to write the hard-coded version of the code, but you gain the time back by keeping everything simpler, and by ensuring that all the tests are always passing once you've gone through a red/green/refactor cycle.
* TDD doesn't necessarily make debugging any easier, but at least the problem is isolated to a smaller section of code.
* When you're able to do TDD, you'll get close to 100% code coverage, because every line of code you write requires that there is a failing test before you write it.
* TDD works best when you know what you need to accomplish well enough that you can express it in a test.
* It's OK to write code referencing code that does not exist, that you wished​ existed. Then write the code that you wished existed, to make your code work.
* Tests written via TDD end up being specifications of what the code should do. How that code is written is less important than the fact that it meets the specifications.
* Sometimes you'll write a test and find that it already passes. As long as the test is specifying required behavior, it's fine to keep it. If another test is already specifying the same thing, then it's OK to delete one of the tests.
* Having the tests run automatically every time you save is a great way to keep the red/green/refactor loop tight. With the Jest testing framework for JavaScript, that's `jest --watch`.
* Once you get a small set of related tests passing, you should commit.

## Branches

I've created a few branches for my own solutions, implemented via TDD. I don't think this is super useful, as you'd have to walk through each of my commits to see what I did at each step. But some might find that useful.

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
