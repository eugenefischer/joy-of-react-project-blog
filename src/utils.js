export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
  } else if (step < 0) {
    for (let i = end - 1; i >= start; i += step) {
      output.push(i);
    }
  }
  return output;
};
