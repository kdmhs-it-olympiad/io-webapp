import { createDecorator } from 'vue-class-component';

export const AsyncComputed = (options) => createDecorator((component, key) => {
  if (!component.methods[key]) {
    console.error('AsyncComputed decorator can only attach to method');
  }

  const f = component.methods[key];
  delete component.methods[key];

  component.asyncComputed = component.asyncComputed || {};

  if (options && options.default) {
    component.asyncComputed[key] = {};
    component.asyncComputed[key].default = options.default;
    component.asyncComputed[key].get = f;
  } else {
    component.asyncComputed[key] = f;
  }
});

export const VModel = () => createDecorator((component, key) => {
  component.props = component.props || {};
  component.computed = component.computed || {};

  component.props.value = {};
  component.computed[key] = {
    get() {
      return this.value;
    },

    set(value) {
      this.$emit('input', value);
    },
  };
});
