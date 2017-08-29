import { css } from 'styled-components';

const defaultBreakpoints = {
  xs: 320,
  sm: 768,
  md: 1224,
  lg: 1400,
  xl: 1824,
};

export const makeQueries = (useDefaults = true, config) => {
  const queries = {};
  let sizes = [];
  const names = [];
  const makeQuery = (name, size) => {
    if (!names.includes(name) && !sizes.includes(size)) {
      queries[name] = size;
      sizes.push(size);
      names.push(name);
    }
  };
  const serializeBreakpoints = (breakpoints) => {
    Object.keys(breakpoints).forEach(name => {
      makeQuery(name, breakpoints[name]);
    })
  };
  // inject configs
  if (config) serializeBreakpoints(config);
  if (useDefaults) serializeBreakpoints(defaultBreakpoints);
  sizes = sizes.sort((a, b) => a - b);
  // format queries
  Object.keys(queries).forEach(name => {
    const size = queries[name];
    const upper = size === Math.max(...sizes) ?
      null : sizes[sizes.indexOf(size) + 1] - 1;
    // base query
    queries[name] = (...args) =>
      css`@media (min-width: ${size}px) { ${css(...args)} }`;
    // only helper
    queries[`${name}Only`] = !upper ? queries[name] : (...args) => 
      css`@media (min-width: ${size}px) and (max-width: ${upper}px) { ${css(...args)} }`;
    console.log(`name: ${name}, min: ${size}, max: ${upper}`);
    console.log(sizes);
  });
  return queries;
};

export default makeQueries();
