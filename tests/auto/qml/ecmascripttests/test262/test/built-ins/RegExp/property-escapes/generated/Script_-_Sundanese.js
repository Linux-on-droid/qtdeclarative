// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Sundanese`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001B80, 0x001BBF],
    [0x001CC0, 0x001CC7]
  ]
});
testPropertyEscapes(
  /^\p{Script=Sundanese}+$/u,
  matchSymbols,
  "\\p{Script=Sundanese}"
);
testPropertyEscapes(
  /^\p{Script=Sund}+$/u,
  matchSymbols,
  "\\p{Script=Sund}"
);
testPropertyEscapes(
  /^\p{sc=Sundanese}+$/u,
  matchSymbols,
  "\\p{sc=Sundanese}"
);
testPropertyEscapes(
  /^\p{sc=Sund}+$/u,
  matchSymbols,
  "\\p{sc=Sund}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001B7F],
    [0x001BC0, 0x001CBF],
    [0x001CC8, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Sundanese}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sundanese}"
);
testPropertyEscapes(
  /^\P{Script=Sund}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sund}"
);
testPropertyEscapes(
  /^\P{sc=Sundanese}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sundanese}"
);
testPropertyEscapes(
  /^\P{sc=Sund}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sund}"
);
