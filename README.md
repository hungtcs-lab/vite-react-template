# Vite React Antd Template

## Plugins

### RedirectAll

```ts
import history from "connect-history-api-fallback";

function redirectAll() {
  return {
    name: "rewrite-all",
    configureServer(server: ViteDevServer) {
      return () => {
        const handler = history({
          disableDotRule: true,
          rewrites: [{ from: /\/$/, to: () => "/index.html" }],
        });

        server.middlewares.use((req, res, next) => {
          handler(req, res, next);
        });
      };
    },
  };
}
```

## FQ

### How should the language codes be formatted?

<https://www.i18next.com/how-to/faq#how-should-the-language-codes-be-formatted>
