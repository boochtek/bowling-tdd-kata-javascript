import { Game } from './bowling';


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
