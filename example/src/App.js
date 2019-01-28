import React from 'react';
import useClipboard from '@uxui/use-clipboard';

export const App = () => {
  const { copied, copy, turnOffCopied } = useClipboard();
  const message = 'Some text need to be copied';

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

export default App;
