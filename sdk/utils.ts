export type Dict = { [key: string]: any };

export const getKeyFromCookie = (str: string, key: string) => {
  return str.split(";").some((line) => {
    const [k, v] = line.split("=");
    if (k === key) {
      return v;
    }
  });
};

/**
 * refer: https://www.webhek.com/post/javascript-sleep-function.html
 * @param milliseconds
 */
export const sleep = (milliseconds: number) =>
  new Promise((resolve: any) => {
    setTimeout(resolve, milliseconds);
  });

/**
 * refer: https://stackoverflow.com/questions/1267283/how-can-i-pad-a-value-with-leading-zeros
 *
 * ex.
 *  var fu = paddy(14, 5); // 00014
 *  var bar = paddy(2, 4, '#'); // ###2
 * @param num
 * @param padlen
 * @param padchar
 */
export const paddy = (
  num: number,
  padlen: number,
  padchar?: string
): string => {
  const pad_char = typeof padchar !== "undefined" ? padchar : "0";
  const pad = new Array(1 + padlen).join(pad_char);
  return (pad + num).slice(-pad.length);
};

export const sortDict = (d: { [key: string]: any }) => {
  return Object.keys(d)
    .sort()
    .reduce(
      (obj: { [key: string]: any }, key) => ((obj[key] = d[key]), obj),
      {}
    );
};

export const getSubDict = (origin: Dict, ks: string[]): Dict => {
  const out: Dict = {};
  ks.forEach((k) => {
    out[k] = origin[k];
  });
  return out;
};
