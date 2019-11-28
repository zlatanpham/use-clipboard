import { useState } from "react";

const copyToClipboard = (content: string) => {
  const textArea = document.createElement("textarea");
  textArea.style.maxHeight = "0px";
  textArea.style.height = "0px";
  textArea.style.opacity = "0";
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();
  window.document.execCommand("copy");
  document.body.removeChild(textArea);
};

export default function useClipboard() {
  const [copied, setCopied] = useState(false);

  return {
    copy: (content: string) => {
      setCopied(true);
      copyToClipboard(content);
    },
    copied,
    turnOffCopied: () => {
      setCopied(false);
    }
  };
}
