const memoized = Symbol();
export default function ($api, $cmp, $slotset) {
    const m = $cmp[memoized] || ($cmp[memoized] = {});
    return [$api.h(
        "section",
        null,
        $api.f([$cmp.isTrue ? [$api.s($cmp.foo), $api.s($cmp.bar)] : $api.e()])
    )];
}
export const templateUsedIds = ["isTrue", "foo", "bar"];
