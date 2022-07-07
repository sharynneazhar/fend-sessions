function _0x3c90(_0x1c58c2, _0x33f8d5) {
  const _0x45bdff = _0x45bd();
  return (
    (_0x3c90 = function (_0x3c9063, _0x5cc587) {
      _0x3c9063 = _0x3c9063 - 0x108;
      let _0x479882 = _0x45bdff[_0x3c9063];
      return _0x479882;
    }),
    _0x3c90(_0x1c58c2, _0x33f8d5)
  );
}
const _0x14f7f1 = _0x3c90;
(function (_0x4c77f4, _0x430132) {
  const _0x1e39e7 = _0x3c90,
    _0x5459ca = _0x4c77f4();
  while (!![]) {
    try {
      const _0x2b118a =
        (parseInt(_0x1e39e7(0x111)) / 0x1) *
          (-parseInt(_0x1e39e7(0x10b)) / 0x2) +
        (-parseInt(_0x1e39e7(0x10d)) / 0x3) *
          (parseInt(_0x1e39e7(0x117)) / 0x4) +
        -parseInt(_0x1e39e7(0x11f)) / 0x5 +
        (parseInt(_0x1e39e7(0x125)) / 0x6) *
          (-parseInt(_0x1e39e7(0x114)) / 0x7) +
        (-parseInt(_0x1e39e7(0x113)) / 0x8) *
          (-parseInt(_0x1e39e7(0x119)) / 0x9) +
        (-parseInt(_0x1e39e7(0x10c)) / 0xa) *
          (parseInt(_0x1e39e7(0x127)) / 0xb) +
        parseInt(_0x1e39e7(0x128)) / 0xc;
      if (_0x2b118a === _0x430132) break;
      else _0x5459ca["push"](_0x5459ca["shift"]());
    } catch (_0x2c9a6d) {
      _0x5459ca["push"](_0x5459ca["shift"]());
    }
  }
})(_0x45bd, 0xd2284);
function _0x45bd() {
  const _0x38522f = [
    "63YSSaMg",
    "data-view",
    "menu__link",
    "setAttribute",
    "active",
    "getElementById",
    "1543795iHNIsS",
    "forEach",
    "nav-active",
    "add",
    "addEventListener",
    "[data-nav]",
    "6kCkviH",
    "remove",
    "142945BwxSfh",
    "58762308LLBCoW",
    "childNodes",
    "classList",
    "innerHeight",
    "98Iuxclk",
    "70LWcXQs",
    "6XFLbIH",
    "innerText",
    "bottom",
    "navbar__list",
    "34493oKUcVo",
    "smooth",
    "343264xQGPJu",
    "11134382NoLHpO",
    "getBoundingClientRect",
    "scrollIntoView",
    "1311808AEUZfe",
    "click",
  ];
  _0x45bd = function () {
    return _0x38522f;
  };
  return _0x45bd();
}
const navbar = document[_0x14f7f1(0x11e)](_0x14f7f1(0x110)),
  sections = document["querySelectorAll"](_0x14f7f1(0x124)),
  buildNav = () => {
    const _0x2fadfe = _0x14f7f1;
    sections[_0x2fadfe(0x120)]((_0x368402) => {
      const _0x1f1236 = _0x2fadfe,
        _0x1b1959 = document["createElement"]("li");
      _0x1b1959[_0x1f1236(0x11c)](_0x1f1236(0x11a), _0x368402["id"]),
        _0x1b1959[_0x1f1236(0x123)](_0x1f1236(0x118), () => {
          const _0x63dabb = _0x1f1236;
          document[_0x63dabb(0x11e)](_0x368402["id"])[_0x63dabb(0x116)]({
            behavior: _0x63dabb(0x112),
          });
        });
      const _0x87e269 = document["createElement"]("a");
      _0x87e269[_0x1f1236(0x109)]["add"](_0x1f1236(0x11b)),
        (_0x87e269[_0x1f1236(0x10e)] = _0x368402["getAttribute"]("data-nav")),
        _0x1b1959["append"](_0x87e269),
        navbar["appendChild"](_0x1b1959);
    });
  },
  onScroll = (_0x3ce588) => {
    const _0x37c5b9 = _0x14f7f1;
    sections[_0x37c5b9(0x120)]((_0x44f461) => {
      const _0x1b9ccb = _0x37c5b9,
        _0x1bb20f = _0x44f461[_0x1b9ccb(0x115)](),
        _0x19ee28 =
          _0x1bb20f["top"] >= 0x0 &&
          _0x1bb20f[_0x1b9ccb(0x10f)] <= window[_0x1b9ccb(0x10a)];
      _0x19ee28
        ? (_0x44f461["classList"][_0x1b9ccb(0x122)](_0x1b9ccb(0x11d)),
          navbar[_0x1b9ccb(0x108)]["forEach"]((_0x49594a) => {
            const _0x23dbea = _0x1b9ccb;
            _0x19ee28 &&
            _0x49594a["getAttribute"](_0x23dbea(0x11a)) === _0x44f461["id"]
              ? _0x49594a[_0x23dbea(0x109)][_0x23dbea(0x122)](_0x23dbea(0x121))
              : _0x49594a[_0x23dbea(0x109)]["remove"]("nav-active");
          }))
        : _0x44f461[_0x1b9ccb(0x109)][_0x1b9ccb(0x126)](_0x1b9ccb(0x11d));
    });
  };
window["addEventListener"]("DOMContentLoaded", buildNav),
  window[_0x14f7f1(0x123)]("scroll", onScroll);
