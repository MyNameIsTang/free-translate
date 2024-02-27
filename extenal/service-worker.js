/* eslint-disable no-undef */

// 手动注册内容脚本
chrome.runtime.onInstalled.addListener(async () => {
  for (const cs of chrome.runtime.getManifest().content_script) {
    for (const tab of await chrome.tabs.query({ url: cs.matches })) {
      chrome.scripting.executeScript({
        files: cs.js,
        target: { tabId: tab.id, allFrames: cs.all_frames },
        injectImmediately: cs.run_at === "document_start",
      });
    }
  }
});

// 监听
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "open-tab") return;
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const resp = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" });
  console.log(resp);
});
