import { pxToRem } from "@/theme";

export function PrevIcon({ size = pxToRem(32) }: { size?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4 16.9359C12.248 16.9359 12.096 16.8799 11.976 16.7599L6.76002 11.5439C5.91202 10.6959 5.91202 9.30392 6.76002 8.45592L11.976 3.23992C12.208 3.00792 12.592 3.00792 12.824 3.23992C13.056 3.47192 13.056 3.85592 12.824 4.08792L7.60802 9.30392C7.22402 9.68792 7.22402 10.3119 7.60802 10.6959L12.824 15.9119C13.056 16.1439 13.056 16.5279 12.824 16.7599C12.704 16.8719 12.552 16.9359 12.4 16.9359Z"
        fill="#355151"
      />
    </svg>
  );
}
