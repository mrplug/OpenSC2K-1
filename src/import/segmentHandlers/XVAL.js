import { resize } from './common';

export default (data, struct) => {
  let view = new Uint8Array(data);
  let xval = [];

  view.forEach((bits, i) => {
    xval[i] = bits;
  });

  // resize data array from 64x64 to 128x128
  xval = resize(xval, 64, 128);

  xval.forEach((data, i) => {
    struct.tiles[i].XVAL = xval[i];
  });
};