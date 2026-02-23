import { r as d, S as a, p as l, j as r, g as h } from "./index-De_cSjJc.js";
const p = ({ onConnect: s }) => {
  d.useEffect(() => {
    let c = !1;
    return (
      (async () => {
        if (c) return;
        c = !0;
        const o = l(window.location.search);
        if (!o.successful) {
          const i = h(o);
          s({ errorMsg: i });
          return;
        }
        const u = sessionStorage.getItem(a.SERVER_URL),
          n = sessionStorage.getItem(a.AUTH_DEBUGGER_STATE);
        let e = null;
        if (n)
          try {
            ((e = JSON.parse(n)),
              e &&
                typeof e.resource == "string" &&
                (e.resource = new URL(e.resource)),
              e &&
                typeof e.authorizationUrl == "string" &&
                (e.authorizationUrl = new URL(e.authorizationUrl)),
              sessionStorage.removeItem(a.AUTH_DEBUGGER_STATE));
          } catch (i) {
            console.error("Failed to parse stored auth state:", i);
          }
        if (u) {
          if (!o.code) {
            s({ errorMsg: "Missing authorization code" });
            return;
          }
          s({ authorizationCode: o.code, restoredState: e });
        }
      })().finally(() => {
        sessionStorage.getItem(a.SERVER_URL) &&
          window.history.replaceState({}, document.title, "/");
      }),
      () => {
        c = !0;
      }
    );
  }, [s]);
  const t = l(window.location.search);
  return r.jsx("div", {
    className: "flex items-center justify-center h-screen",
    children: r.jsxs("div", {
      className: "mt-4 p-4 bg-secondary rounded-md max-w-md",
      children: [
        r.jsx("p", {
          className: "mb-2 text-sm",
          children:
            "Please copy this authorization code and return to the Auth Debugger:",
        }),
        r.jsx("code", {
          className: "block p-2 bg-muted rounded-sm overflow-x-auto text-xs",
          children:
            t.successful && "code" in t
              ? t.code
              : `No code found: ${t.error}, ${t.error_description}`,
        }),
        r.jsx("p", {
          className: "mt-4 text-xs text-muted-foreground",
          children:
            "Close this tab and paste the code in the OAuth flow to complete authentication.",
        }),
      ],
    }),
  });
};
export { p as default };
