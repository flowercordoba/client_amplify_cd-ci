function multiply(a: number, b: number): number {
    return a * b;
  }
  
  describe('multiply', () => {
    it('should fail intentionally', () => {
      expect(multiply(2, 2)).toBe(5); // este test FALLA a propósito
    });
  });
  