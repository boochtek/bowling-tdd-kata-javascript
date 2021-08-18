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

  xdescribe('a game starting with 3 strikes', () => {
    let game = new Game;
    const rolls = [10, 10, 10];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('scores 60 points', () => {
      expect(game.score).toEqual(60);
    })
  })

  xdescribe('a game starting with a mix of strikes, spares, and open frames', () => {
    let game = new Game;
    const rolls = [10, 2, 7, 5, 5, 6, 3];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('be scored appropriately', () => {
      expect(game.score).toEqual((10 + 2 + 7) + (2 + 7) + (10 + 6) + (6 + 3));
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
      it('is NOT a complete frame', () => {
        expect(frame.isComplete()).toBeFalsy();
      })
      it('is NOT completely scored', () => {
        expect(frame.isScoreComplete()).toBeFalsy();
      })
    })

    describe('with two rolls', () => {
      let frame = new Frame(7, 2);
      it('scores points for the number of pins knocked down in both rolls', () => {
        expect(frame.score).toEqual(7 + 2);
      })
      it('IS a complete frame', () => {
        expect(frame.isComplete()).toBeTruthy();
      })
      it('IS completely scored', () => {
        expect(frame.isScoreComplete()).toBeTruthy();
      })
    })
  })

  describe('a frame with a spare', () => {
    describe('with no following rolls', () => {
      let frame = new Frame(7, 3);
      it('scores 10 points', () => {
        expect(frame.score).toEqual(10);
      })
      it('IS a complete frame', () => {
        expect(frame.isComplete()).toBeTruthy();
      })
      it('is NOT completely scored', () => {
        expect(frame.isScoreComplete()).toBeFalsy();
      })
    })
    describe('with 1 following roll', () => {
      let frame = new Frame(7, 3, 6);
      it('scores 10 points, plus the following roll', () => {
        expect(frame.score).toEqual(10 + 6);
      })
      it('IS a complete frame', () => {
        expect(frame.isComplete()).toBeTruthy();
      })
      it('IS completely scored', () => {
        expect(frame.isScoreComplete()).toBeTruthy();
      })
    })
  })

  describe('a frame with a strike', () => {
    describe('with no following rolls', () => {
      let frame = new Frame(10);
      it('scores 10 points', () => {
        expect(frame.score).toEqual(10);
      })
      it('IS a complete frame', () => {
        expect(frame.isComplete()).toBeTruthy();
      })
      it('is NOT completely scored', () => {
        expect(frame.isScoreComplete()).toBeFalsy();
      })
    })
    describe('with 1 following roll', () => {
      let frame = new Frame(10, 9);
      it('scores 10 points, plus the number of pins knocked down in the following roll', () => {
        expect(frame.score).toEqual(10 + 9);
      })
      it('IS a complete frame', () => {
        expect(frame.isComplete()).toBeTruthy();
      })
      it('is NOT completely scored', () => {
        expect(frame.isScoreComplete()).toBeFalsy();
      })
    })
    describe('with 2 following rolls', () => {
      let frame = new Frame(10, 9, 8);
      it('scores 10 points, plus the number of pins knocked down in the following 2 rolls', () => {
        expect(frame.score).toEqual(10 + 9 + 8);
      })
      it('IS a complete frame', () => {
        expect(frame.isComplete()).toBeTruthy();
      })
      it('IS completely scored', () => {
        expect(frame.isScoreComplete()).toBeTruthy();
      })
    })
  })
})
