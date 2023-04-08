import React, { useState, useEffect } from "react";

export async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

export function ClipboardCopy({ copyText }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // start intervale 2s
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  }, [isClicked]);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsClicked(true);
        setTimeout(() => {}, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="mail" onClick={handleCopyClick}>
        <p>{!isClicked ? copyText : "Mail copié ! "}</p>
        {!isClicked && (
          <span>
            <i className="fa fa-copy"></i>
          </span>
        )}
      </div>
    </div>
  );
}
