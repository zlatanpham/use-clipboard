# use-clipboard

> React hook helps ease the work of copying to clipboard.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @uxui/use-clipboard
```

### Return

- `copy: (content: string) => void`: copy any thing passed to param `content` to clipboard.
- `copied: boolean`: state whick will get truthy after `copy()` gets called.
- `turnOffCopied: () => void`: simply set `copied` to `false`.

## Usage

```jsx
import React from "react";
import useClipboard from "@uxui/useClipboard";

export const App = () => {
  const { copied, copy, turnOffCopied } = useClipboard();
  const message = "Some text need to be copied";

  return (
    <div>
      <div>{message}</div>
      {copied ? (
        <span>copied</span>
      ) : (
        <button
          onClick={() => {
            copy(message);
            setTimeout(() => {
              turnOffCopied();
            }, 1000);
          }}
        >
          Copy to clipboard
        </button>
      )}
    </div>
  );
};
```

## License

MIT © [zlatanpham](https://github.com/zlatanpham)
