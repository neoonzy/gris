import React from "react";

/**
 * Grafismo GRIS — curvas de nível/pontos de encontro.
 * Três contornos irregulares remetem ao território; o ponto laranja
 * marca o lugar de encontro. É puramente decorativo.
 */
export default function ContourMark({ variant = "hero" }) {
  return (
    <svg
      className={"contour-mark contour-mark--" + variant}
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round">
        <path d="M258 20C353 13 450 77 482 162C518 257 479 383 394 451C315 516 194 507 109 464C21 415-7 293 39 184C76 94 161 28 258 20Z" />
        <path d="M258 65C334 54 408 105 439 174C469 250 442 354 373 410C311 463 209 466 142 429C70 389 43 287 80 203C110 129 180 71 258 65Z" />
        <path d="M262 108C324 100 378 143 399 195C424 259 400 328 346 375C292 420 220 425 165 393C110 362 88 283 120 219C148 160 195 115 262 108Z" />
        <path d="M265 154C305 148 346 175 361 216C381 265 361 314 321 344C284 375 232 375 194 354C152 326 137 279 162 234C184 187 219 159 265 154Z" />
        <path d="M262 197C288 190 317 213 328 237C339 269 323 296 298 313C272 330 239 328 218 309C192 288 193 257 211 229C223 207 242 199 262 197Z" />
      </g>
      <path
        d="M260 228C283 228 301 247 301 268C301 290 284 307 261 307C239 307 221 289 221 269C221 247 238 228 260 228Z"
        fill="var(--mark-dot, #e86e09)"
      />
      <circle cx="260" cy="267" r="11" fill="var(--mark-hole, #f5f1e7)" />
      <path d="M341 147L359 135M359 135L359 152" stroke="var(--mark-dot, #e86e09)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
