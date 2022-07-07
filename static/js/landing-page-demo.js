const _0x156434 = _0x1b9c;
(function (_0x4fadd5, _0x103b06) {
  const _0x83442b = _0x1b9c,
    _0x36a580 = _0x4fadd5();
  while (!![]) {
    try {
      const _0x13ad1e =
        (-parseInt(_0x83442b(0x1e0)) / 0x1) *
          (parseInt(_0x83442b(0x1dc)) / 0x2) +
        parseInt(_0x83442b(0x1e9)) / 0x3 +
        (-parseInt(_0x83442b(0x1de)) / 0x4) *
          (parseInt(_0x83442b(0x1ee)) / 0x5) +
        parseInt(_0x83442b(0x1dd)) / 0x6 +
        -parseInt(_0x83442b(0x1e1)) / 0x7 +
        (parseInt(_0x83442b(0x1d4)) / 0x8) *
          (-parseInt(_0x83442b(0x1e4)) / 0x9) +
        parseInt(_0x83442b(0x1f4)) / 0xa;
      if (_0x13ad1e === _0x103b06) break;
      else _0x36a580["push"](_0x36a580["shift"]());
    } catch (_0xab235e) {
      _0x36a580["push"](_0x36a580["shift"]());
    }
  }
})(_0xc2f2, 0xd6e0d);
const navbar = document["getElementById"]("navbar__list"),
  sections = document[_0x156434(0x1ed)](_0x156434(0x1e7)),
  buildNav = () => {
    const _0x4ebb9c = _0x156434;
    sections[_0x4ebb9c(0x1d8)]((_0x65b140) => {
      const _0x21eca4 = _0x4ebb9c,
        _0x275fd7 = document["createElement"]("li");
      _0x275fd7["setAttribute"]("data-view", _0x65b140["id"]),
        _0x275fd7["addEventListener"](_0x21eca4(0x1ec), () => {
          const _0x1848dc = _0x21eca4;
          document[_0x1848dc(0x1eb)](_0x65b140["id"])[_0x1848dc(0x1ef)]({
            behavior: _0x1848dc(0x1e3),
          });
        });
      const _0x5b25b1 = document[_0x21eca4(0x1db)]("a");
      _0x5b25b1[_0x21eca4(0x1ea)][_0x21eca4(0x1da)](_0x21eca4(0x1e6)),
        (_0x5b25b1[_0x21eca4(0x1d6)] = _0x65b140["getAttribute"](
          _0x21eca4(0x1e8)
        )),
        _0x275fd7["append"](_0x5b25b1),
        navbar["appendChild"](_0x275fd7);
    });
  },
  onScroll = (_0x3e7869) => {
    const _0x5f0f78 = _0x156434;
    sections[_0x5f0f78(0x1d8)]((_0x16146d) => {
      const _0x4550a4 = _0x5f0f78,
        _0x5582e9 = _0x16146d[_0x4550a4(0x1f1)](),
        _0x524e34 =
          _0x5582e9[_0x4550a4(0x1d5)] >= 0x0 &&
          _0x5582e9[_0x4550a4(0x1d5)] <= window["innerHeight"] / 0x2;
      _0x524e34
        ? (_0x16146d[_0x4550a4(0x1ea)][_0x4550a4(0x1da)](_0x4550a4(0x1f0)),
          navbar[_0x4550a4(0x1d7)][_0x4550a4(0x1d8)]((_0x40e4c7) => {
            const _0x5883df = _0x4550a4;
            _0x524e34 &&
            _0x40e4c7[_0x5883df(0x1df)](_0x5883df(0x1f2)) === _0x16146d["id"]
              ? _0x40e4c7[_0x5883df(0x1ea)][_0x5883df(0x1da)](_0x5883df(0x1e2))
              : _0x40e4c7["classList"][_0x5883df(0x1e5)]("nav-active");
          }))
        : _0x16146d["classList"][_0x4550a4(0x1e5)]("active");
    });
  };
window["addEventListener"](_0x156434(0x1d9), buildNav),
  window["addEventListener"](_0x156434(0x1f3), onScroll);
function _0x1b9c(_0x5b4f61, _0x4b7465) {
  const _0xc2f220 = _0xc2f2();
  return (
    (_0x1b9c = function (_0x1b9c73, _0x3f9465) {
      _0x1b9c73 = _0x1b9c73 - 0x1d4;
      let _0x11027d = _0xc2f220[_0x1b9c73];
      return _0x11027d;
    }),
    _0x1b9c(_0x5b4f61, _0x4b7465)
  );
}
function _0xc2f2() {
  const _0x42e589 = [
    "menu__link",
    "[data-nav]",
    "data-nav",
    "621252mDelwU",
    "classList",
    "getElementById",
    "click",
    "querySelectorAll",
    "5VTvZHb",
    "scrollIntoView",
    "active",
    "getBoundingClientRect",
    "data-view",
    "scroll",
    "48643950fqPueV",
    "112272AUXpBB",
    "top",
    "innerText",
    "childNodes",
    "forEach",
    "DOMContentLoaded",
    "add",
    "createElement",
    "74jREOBw",
    "2212218RcsQKx",
    "3125764jIfMSt",
    "getAttribute",
    "32135tBBDgq",
    "6829865iNQzJC",
    "nav-active",
    "smooth",
    "1035vMlHPS",
    "remove",
  ];
  _0xc2f2 = function () {
    return _0x42e589;
  };
  return _0xc2f2();
}
