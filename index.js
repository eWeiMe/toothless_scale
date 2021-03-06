'use strict';

const scales = {
  dark: require('./scales/dark'),
}

class Scale {
  constructor() {
    this.defaultTheme = 'dark';
  }

  currentTheme() {
    return this.defaultTheme;
  }

  changeTheme(theme) {
    this.defaultTheme = theme;
  }

  /**
   * get theme style by current theme, return {} if not found
   * @param componentName
   * @returns {{}}
   */
  getStyle(componentName:string) {
    let scale = scales[this.defaultTheme];

    if (scale) {
      let component = scale[componentName];
      return component ? component : {};
    }

    return {};
  }
}

module.exports = new Scale();
