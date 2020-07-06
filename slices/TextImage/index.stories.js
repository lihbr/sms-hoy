import { withKnobs, text, color, select } from "@storybook/addon-knobs";
import cloneDeep from "lodash/cloneDeep";

import TextImage from "./";
import mock from "./mock.json";

export default {
  title: "Text Image",
  decorators: [withKnobs]
};

export const __Basic = () => ({
  components: { TextImage },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);
        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.caption = null;
        _mock.primary.caption_color = null;

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<TextImage :slice=\"mock\" />"
});
__Basic.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};

export const __WithQuote = () => ({
  components: { TextImage },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);
        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.caption = text("Caption", _mock.primary.caption);
        _mock.primary.caption_color = color(
          "Color",
          _mock.primary.caption_color
        );

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<TextImage :slice=\"mock\" />"
});
__WithQuote.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};

export const __Inverted = () => ({
  components: { TextImage },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);
        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.caption = null;
        _mock.primary.caption_color = null;
        _mock.slice_label = select(
          "Order",
          ["Default", "Inverted"],
          "Inverted"
        );

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<TextImage :slice=\"mock\" />"
});
__Inverted.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};

export const __NoTitle = () => ({
  components: { TextImage },
  props: {
    mock: {
      default: (() => {
        const _mock = cloneDeep(mock);

        _mock.primary.title = [];
        _mock.primary.text[0].text = text("Text", _mock.primary.text[0].text);
        _mock.primary.image.url = text("Image", _mock.primary.image.url);
        _mock.primary.caption = null;
        _mock.primary.caption_color = null;

        return _mock;
      })()
    }
  },
  // eslint-disable-next-line
  template: "<TextImage :slice=\"mock\" />"
});
__NoTitle.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};
