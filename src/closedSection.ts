export class ClosedSection {
  constructor(public top: number, public bottom: number) {
    this.top = top;
    this.bottom = bottom;
  }

  public getSectionString = () => {
    return `[${this.top},${this.bottom}]`;
  };

  public has = (num: number) => {
    if (this.top <= num && num <= this.bottom) {
      return true;
    }
    return false;
  };
}
