class Iff {
  ifTrue;
  ifFalse;

  constructor() {
    return (status) => {
      this.status = status;

      return this;
    };
  }

  then(thenJsx) {
    this.ifTrue = thenJsx;

    return this;
  }

  else(elseJsx) {
    if (this.status === true) {
      return this.ifTrue;
    }

    return elseJsx;
  }
}

const iff = new Iff();

export default iff;
