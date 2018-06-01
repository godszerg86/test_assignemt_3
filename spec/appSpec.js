describe("App", () => {

  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      expect(counter.innerHTML).toBe('0');
      button.click();
      expect(counter.innerHTML).toBe('120');
      counter.innerHTML = 0; // reset to default state.

    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.getAttribute('id')).toBe('click-me');
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toBe(120);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(0)).toBe(1);
    })
  })

  describe("Computer", () => {
    const newComputer = new Computer();

    afterEach(() => {
      newComputer.hardDriveSpace = 512;
    });
    it("is created with a hard drive size of 512", () => {
      expect(newComputer.hardDriveSpace).toBe(512);
    })

    describe("installProgram", () => {

      beforeEach((done) => {
        newComputer.installProgram(100, function () {
          done();
        })
      });

      it("can install a program if there is sufficient space", (done) => {
        expect(newComputer.hardDriveSpace).toBe(412);
        done();
      })

    });
    describe(`Computer`, () => {
      beforeEach((done) => {
        newComputer.installProgram(1000, function () {
          done();
        })
      });

      it("will not install the program if there is insufficient space", (done) => {
        expect(newComputer.hardDriveSpace).toBe(512);
        done();
      })
    });

    describe("format", () => {
      beforeEach((done) => {
        newComputer.installProgram(100, function () {
          done();
        })
      });
      it("resets the hard drive to 512, even after programs have been installed", (done) => {
        expect(newComputer.hardDriveSpace).toBe(412);
        newComputer.format();
        expect(newComputer.hardDriveSpace).toBe(512);
        done();
      });
    })

  })

})