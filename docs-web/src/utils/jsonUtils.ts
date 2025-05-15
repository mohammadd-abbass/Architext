export const downloadJson = (
  json: string,
  filename = "architecture.arch.json"
) => {
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const copyJson = (json: string): void => {
  navigator.clipboard.writeText(json).catch((err) => {
    console.error("Failed to copy JSON to clipboard:", err);
  });
}
