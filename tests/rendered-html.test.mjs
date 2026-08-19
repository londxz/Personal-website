import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Родион Холодов/);
  assert.match(html, /londxz/);
  assert.match(html, /Родион/);
  assert.match(html, /iOS-разработчик/);
  assert.match(html, /iOS · AI/);
  assert.match(html, /Опыт работы/);
  assert.match(html, /Коммерческий опыт/);
  assert.match(html, /Собственные проекты/);
  assert.doesNotMatch(html, /iOS · AI · Go/);
  assert.match(html, /rodion-kholodov-photoroom-retina\.png/);
  assert.match(html, /shark-swimmer/);
  assert.match(html, /<section[^>]*id="top"[^>]*data-section/);
  assert.doesNotMatch(html, /codex-preview|loading skeleton/i);
});
