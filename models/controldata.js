module.exports = class ControlData {
  static getControlData() {
    const truckdata = {
      mini: {
        bfare: 5000,
        fuelpermile: 3000
      },
      small: {
        bfare: 10000,
        fuelpermile: 4300
      },
      medium: {
        bfare: 15000,
        fuelpermile: 7300
      },
      big: {
        bfare: 20000,
        fuelpermile: 12000
      }
    };
    return truckdata;
  }
};
