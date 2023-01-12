import React from "react";
import cx from "classnames";

type Props = {
  className?: string;
};

export function SearchIcon({ className }: Props) {
  return (
    <svg className={cx(className)} xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
      <path
        fill="#00222A"
        d="M15.626 16.044l-4.838-5.339a6.17 6.17 0 001.69-4.264c0-1.649-.636-3.2-1.79-4.366A6.033 6.033 0 006.373.265a6.03 6.03 0 00-4.317 1.81A6.174 6.174 0 00.267 6.44a6.17 6.17 0 001.788 4.367 6.033 6.033 0 004.317 1.81 6.014 6.014 0 003.816-1.355l4.838 5.338a.402.402 0 00.575.026.415.415 0 00.026-.582h-.001zM1.08 6.441c0-2.95 2.374-5.352 5.291-5.352 2.918 0 5.291 2.401 5.291 5.352 0 2.952-2.373 5.353-5.29 5.353-2.918 0-5.292-2.401-5.292-5.353z"
      ></path>
      <path
        fill="#00222A"
        fillRule="evenodd"
        d="M15.82 15.863l.005.004a.68.68 0 01-.042.954.67.67 0 01-.955-.042l-4.671-5.155a6.279 6.279 0 01-3.785 1.259 6.3 6.3 0 01-4.507-1.888A6.434 6.434 0 010 6.44a6.44 6.44 0 011.865-4.553A6.295 6.295 0 016.372 0a6.3 6.3 0 014.507 1.888 6.434 6.434 0 011.865 4.553 6.436 6.436 0 01-1.596 4.265l4.672 5.156zm-.194.181l-4.838-5.339a6.171 6.171 0 001.69-4.264c0-1.649-.636-3.2-1.79-4.366A6.033 6.033 0 006.373.265a6.03 6.03 0 00-4.317 1.81A6.174 6.174 0 00.267 6.44a6.17 6.17 0 001.788 4.367 6.033 6.033 0 004.317 1.81 6.014 6.014 0 003.816-1.355l4.838 5.338a.402.402 0 00.575.026.415.415 0 00.025-.582zM6.37 1.354c-2.766 0-5.024 2.279-5.024 5.087 0 2.809 2.258 5.087 5.024 5.087s5.024-2.278 5.024-5.087c0-2.808-2.258-5.086-5.024-5.086zm0-.265C3.454 1.09 1.08 3.49 1.08 6.441c0 2.952 2.374 5.353 5.291 5.353 2.918 0 5.291-2.401 5.291-5.353 0-2.95-2.373-5.352-5.291-5.352z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
