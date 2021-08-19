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

  describe('a game starting with 3 strikes', () => {
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
  describe('with a strike and no following rolls', () => {
    let frame = new Frame(10);
    it ('scores 10 points', () => {
      expect(frame.score).toEqual(10);
    })
  })

  describe('with a strike and 1 following roll', () => {
    let frame = new Frame(10, 5);
    it ('scores 10 points, plus the following roll', () => {
      expect(frame.score).toEqual(10 + 5);
    })
  })

  describe('with a strike and 2 following rolls', () => {
    let frame = new Frame(10, 5, 4);
    it ('scores 10 points, plus the pins knocked down in the 2 following rolls', () => {
      expect(frame.score).toEqual(10 + 5 + 4);
    })
  })

  describe('with a spare and no following rolls', () => {
    let frame = new Frame(5, 5);
    it ('scores 10 points', () => {
      expect(frame.score).toEqual(10);
    })
  })

  describe('with a spare and 1 following roll', () => {
    let frame = new Frame(5, 5, 6);
    it ('scores 10 points, plus the number of pins knocked down in the following roll', () => {
      expect(frame.score).toEqual(10 + 6);
    })
  })

  describe('with a spare and 2 following rolls', () => {
    let frame = new Frame(5, 5, 6, 6);
    it ('scores 10 points, plus the number of pins knocked down in the first following roll', () => {
      expect(frame.score).toEqual(10 + 6);
    })
  })

  describe('that is an open frame with no following rolls', () => {
    let frame = new Frame(4, 5);
    it ('scores the number of pins knocked down in the 2 rolls', () => {
      expect(frame.score).toEqual(4 + 5);
    })
  })

  describe('that is an open frame with 2 following rolls', () => {
    let frame = new Frame(4, 5);
    it ('scores the number of pins knocked down in the original 2 rolls', () => {
      expect(frame.score).toEqual(4 + 5);
    })
  })

})

