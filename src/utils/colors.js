import gray from 'gray-percentage';

const colorStr = `
#281505
#042b1b
#2e1740
#3a2407
#073e2e
#452054
#48340a
#0d4f43
#5c2965
#53450e
#165e5a
#743272
#5c5815
#216c72
#8a3d7d
#636a1e
#2f798a
#9f4984
#697d2a
#4084a1
#b3568b
#6f8f39
#538eb6
#c36490
#75a14b
#6998c9
#d17494
#7db15f
#7fa1d9
#dd859a
#86c076
#96abe6
#e598a1
#91ce8e
#adb6f0
#ecabaa
#a0daa6
#c2c2f7
#f1beb6
#b1e5be
#d6cffb
#f4d1c6
#c6eed5
#e7defe
#f8e4d9
#def6ea
#f5eefe
#fcf6f0
`;

const colors = {
  a: [],
  b: [],
  c: [],
  // original palette by @SachaG
  // @see https://www.figma.com/file/J6IYJEtdRmwJQOrcZ2DfvxDD/Gatsby
  tech47: `#663399`, // was #744c9e
  // primary color
  tech47blue: `rgba(55, 26, 29, 1)`,
  // Secondary color
  // tech47purple: `rgba(218, 159, 126, 1)`,
  tech47purple: `rgba(55, 26, 29, 1)`,
  tech47purplehex: `#371a1d`,
  // Tertiary color
  tech47dropDown: `rgba(75, 49, 24, 1)`,
  tech47dropDownhex: `#4b3118`,
  tech47pink: `rgba(113, 16, 59, 1)`,
  tech47pinkhex: `#71103b`,
  tech47category: `rgba(226, 172, 155, 1)`,
  tech47categoryhover: `rgba(226, 172, 155, 0.5)`,
  tech47hover: `rgba(95, 95, 95, 0.5)`,
  tech47date: `#d1d1d1`,
  tech47background: `#ffffff`,
  tech47white: '#ffffff',
  tech47dummy: `red`,
  tech47dummyhex: `#ff0000`,
  gray: {
    dark: gray(8, 270),
    copy: gray(12, 270),
    calm: gray(46, 270)
  }
};

let pointer = `a`;
colorStr
  .split(`\n`)
  .reverse()
  .forEach(c => {
    if (c === ``) return;
    colors[pointer].push(c);
    switch (pointer) {
      case `a`:
        pointer = `b`;
        break;
      case `b`:
        pointer = `c`;
        break;
      case `c`:
        pointer = `a`;
        break;
      default:
    }
  });

module.exports = colors
