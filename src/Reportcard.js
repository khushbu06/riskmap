// Import environment variables
import env from './environment';

export class Reportcard {
  static metadata() {
    return Metadata.singleton(true);
  } //true indicates to register in the root container

  // Support language changing
  // TODO - error handling for
  changeLanguage(lang) {
    $.getJSON("../../../locales/" + lang + "/translation.json", (data) => {
      $.each(data, (key, val) => {
        this.locale[key] = val;
      });
    });
  }

  constructor() {
    var self = this;
    //initial language, TODO: set using detected browser language
    self.selLanguage = env.default_language;
    self.languages = env.supported_languages;
    self.location = {markerLocation: null, gpsLocation: null, accuracy: null};
    self.depth = null;
    self.photo = {file: null, rotation: 0};
    self.description = null;
    self.locale = {};
    self.changeLanguage(this.selLanguage);
  }
}
