import { createDecorator } from 'vue-class-component';

export const AsyncComputed = (options) => createDecorator((component, key) => {
  console.log(component, key, options, component.methods[key]);

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
