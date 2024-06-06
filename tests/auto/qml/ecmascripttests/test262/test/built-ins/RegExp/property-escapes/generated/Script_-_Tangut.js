// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tangut`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x016FE0
  ],
  ranges: [
    [0x017000, 0x0187EC],
    [0x018800, 0x018AF2]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tangut}+$/u,
  matchSymbols,
  "\\p{Script=Tangut}"
);
testPropertyEscapes(
  /^\p{Script=Tang}+$/u,
  matchSymbols,
  "\\p{Script=Tang}"
);
testPropertyEscapes(
  /^\p{sc=Tangut}+$/u,
  matchSymbols,
  "\\p{sc=Tangut}"
);
testPropertyEscapes(
  /^\p{sc=Tang}+$/u,
  matchSymbols,
  "\\p{sc=Tang}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016FDF],
    [0x016FE1, 0x016FFF],
    [0x0187ED, 0x0187FF],
    [0x018AF3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tangut}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tangut}"
);
testPropertyEscapes(
  /^\P{Script=Tang}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tang}"
);
testPropertyEscapes(
  /^\P{sc=Tangut}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tangut}"
);
testPropertyEscapes(
  /^\P{sc=Tang}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tang}"
);
