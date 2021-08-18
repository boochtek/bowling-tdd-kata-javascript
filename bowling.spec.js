import { Game, Frame } from './bowling';


describe('Game', () => {
  describe('a game with no rolls', () => {
    let game = new Game;
    it ('scores 0 points', () => {
      expect(game.score).toEqual(0);
    })
  })

  describe('a game with no pins knocked down', () => {
    let game = new Game;
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('scores 0 points', () => {
      expect(game.score).toEqual(0);
    })
  })

  xdescribe('a perfect game', () => {
    let game = new Game;
    const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('scores 300 points', () => {
      expect(game.score).toEqual(300);
    })
  })
})


describe('Frame', () => {
  describe('an open frame', () => {
    describe('with one roll', () => {
      let frame = new Frame(7);
      it('scores points for the number of pins knocked down in the roll', () => {
        expect(frame.score).toEqual(7);
      })
    })

    describe('with two rolls', () => {
      let frame = new Frame(7, 2);
      it('scores points for the number of pins knocked down in both rolls', () => {
        expect(frame.score).toEqual(7 + 2);
      })
    })
  })

  describe('a frame with a spare', () => {
    describe('with no following rolls', () => {
      let frame = new Frame(7, 3);
      it('scores 10 points', () => {
        expect(frame.score).toEqual(10);
      })
    })
    describe('with 1 following roll', () => {
      let frame = new Frame(7, 3, 6);
      it('scores 10 points, plus the following roll', () => {
        expect(frame.score).toEqual(10 + 6);
      })
    })
  })

  describe('a frame with a strike', () => {
    describe('with no following rolls', () => {
      let frame = new Frame(10);
      it('scores 10 points', () => {
        expect(frame.score).toEqual(10);
      })
    })
    describe('with 1 following roll', () => {
      let frame = new Frame(10, 9);
      it('scores 10 points, plus the number of pins knocked down in the following roll', () => {
        expect(frame.score).toEqual(10 + 9);
      })
    })
    describe('with 2 following rolls', () => {
      let frame = new Frame(10, 9, 8);
      it('scores 10 points, plus the number of pins knocked down in the following 2 rolls', () => {
        expect(frame.score).toEqual(10 + 9 + 8);
      })
    })
  })
})
