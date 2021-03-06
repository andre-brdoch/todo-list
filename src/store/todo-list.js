import { colors } from "../colors";

const state = {
  name: "",
  tasks: [],
  settingsAreOpen: false,
  color: colors[0],
  colorPickerIsVisible: false,
  isDeleted: false
};

const mutations = {
  setName(state, name) {
    state.name = name;
  },
  addTask(state, task) {
    state.tasks.push(task);
  },
  deleteTaskAtIndex(state, i) {
    state.tasks.splice(i, 1);
  },
  toggleSettings(state) {
    state.settingsAreOpen = !state.settingsAreOpen;
  },
  hideSettings(state) {
    state.settingsAreOpen = false;
  },
  setColor(state, color) {
    state.color = color;
  },
  toggleColorPickerVisibility(state) {
    state.colorPickerIsVisible = !state.colorPickerIsVisible;
  },
  hideColorPicker(state) {
    state.colorPickerIsVisible = false;
  },
  deleteList(state) {
    state.isDeleted = true;
  }
};

export default { state, mutations };
