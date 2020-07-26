const state = {
  settingsAreOpen: false
};

const mutations = {
  toggleSettings(state) {
    state.settingsAreOpen = !state.settingsAreOpen;
  }
};

export default { state, mutations };
