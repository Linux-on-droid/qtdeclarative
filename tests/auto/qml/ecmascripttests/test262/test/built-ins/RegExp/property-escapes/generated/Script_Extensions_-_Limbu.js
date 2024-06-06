// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Limbu`
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
    0x000965,
    0x001940
  ],
  ranges: [
    [0x001900, 0x00191E],
    [0x001920, 0x00192B],
    [0x001930, 0x00193B],
    [0x001944, 0x00194F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Limbu}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Limbu}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Limb}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Limb}"
);
testPropertyEscapes(
  /^\p{scx=Limbu}+$/u,
  matchSymbols,
  "\\p{scx=Limbu}"
);
testPropertyEscapes(
  /^\p{scx=Limb}+$/u,
  matchSymbols,
  "\\p{scx=Limb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00191F
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000964],
    [0x000966, 0x0018FF],
    [0x00192C, 0x00192F],
    [0x00193C, 0x00193F],
    [0x001941, 0x001943],
    [0x001950, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Limbu}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Limbu}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Limb}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Limb}"
);
testPropertyEscapes(
  /^\P{scx=Limbu}+$/u,
  nonMatchSymbols,
  "\\P{scx=Limbu}"
);
testPropertyEscapes(
  /^\P{scx=Limb}+$/u,
  nonMatchSymbols,
  "\\P{scx=Limb}"
);
