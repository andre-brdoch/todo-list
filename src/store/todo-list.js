import { colors } from "../colors";

const state = {
  settingsAreOpen: false,
  color: colors[0],
  colorPickerIsVisible: false
};

const mutations = {
  toggleSettings(state) {
    state.settingsAreOpen = !state.settingsAreOpen;
  },
  setColor(state, color) {
    state.color = color;
  },
  toggleColorPickerVisibility(state) {
    state.colorPickerIsVisible = !state.colorPickerIsVisible;
  }
};

export default { state, mutations };
