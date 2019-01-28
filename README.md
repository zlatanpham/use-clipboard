# use-clipboard

> React component helps ease the work of copying to clipboard using render prop.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @uxui/use-clipboard
```

### Children Function

- `copy: (content: string) => void`: copy any thing passed to param `content` to clipboard.
- `copied: boolean`: a state will get truthy after `copy()` gets called.
- `turnOffCopied: () => void`: simply set `copied` to `false`.

## Hook Usage

```jsx
import React from "react";
import useCopyToClipboard from "@uxui/copy-to-clipboard-react";

export const App = () => {
  const { copied, copy, turnOffCopied } = useCopyToClipboard();
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
