import { colors } from "../colors";

const state = {
  name: "",
  settingsAreOpen: false,
  color: colors[0],
  colorPickerIsVisible: false
};

const mutations = {
  setName(state, name) {
    state.name = name;
  },
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
