import {
  u as l,
  r as n,
  j as u,
  p as d,
  g as h,
  S as f,
  I as p,
  a as E,
} from "./index-De_cSjJc.js";
const A = ({ onConnect: o }) => {
  const { toast: s } = l(),
    i = n.useRef(!1);
  return (
    n.useEffect(() => {
      (async () => {
        if (i.current) return;
        i.current = !0;
        const t = (e) =>
            void s({
              title: "OAuth Authorization Error",
              description: e,
              variant: "destructive",
            }),
          a = d(window.location.search);
        if (!a.successful) return t(h(a));
        const r = sessionStorage.getItem(f.SERVER_URL);
        if (!r) return t("Missing Server URL");
        let c;
        try {
          const e = new p(r);
          c = await E(e, { serverUrl: r, authorizationCode: a.code });
        } catch (e) {
          return (
            console.error("OAuth callback error:", e),
            t(`Unexpected error occurred: ${e}`)
          );
        }
        if (c !== "AUTHORIZED")
          return t(
            `Expected to be authorized after providing auth code, got: ${c}`,
          );
        (s({
          title: "Success",
          description: "Successfully authenticated with OAuth",
          variant: "default",
        }),
          o(r));
      })().finally(() => {
        window.history.replaceState({}, document.title, "/");
      });
    }, [s, o]),
    u.jsx("div", {
      className: "flex items-center justify-center h-screen",
      children: u.jsx("p", {
        className: "text-lg text-gray-500",
        children: "Processing OAuth callback...",
      }),
    })
  );
};
export { A as default };
