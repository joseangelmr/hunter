const initialState = {
  app: 'hunter',
  connectivity: {
    isEnabled: false,
    isLoading: false
  },
  scan: {
    scans: 0,
    status : 'stopped',
    lastScan: {
      data: []
    }
  }
};

export default initialState;
