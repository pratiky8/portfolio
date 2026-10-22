import React from 'react';

export function CloudSculpture({ small = false }) {
 return <svg className={small ? 'cloud-sculpture small' : 'cloud-sculpture'} viewBox="0 0 640 660" fill="none" aria-hidden="true">
  <defs>
   <linearGradient id={small ? 'plate-small' : 'plate'} x1="100" y1="160" x2="500" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#64ddeb" stopOpacity=".24"/><stop offset=".5" stopColor="#254b96" stopOpacity=".32"/><stop offset="1" stopColor="#0b142d"/></linearGradient>
   <linearGradient id={small ? 'cloud-small' : 'cloud'} x1="200" y1="180" x2="440" y2="340" gradientUnits="userSpaceOnUse"><stop stopColor="#a6f6ff"/><stop offset=".45" stopColor="#4ba7ec"/><stop offset="1" stopColor="#3b54c3"/></linearGradient>
  </defs>
  <g className="sculpture-orbit" stroke="#52759b" strokeOpacity=".25"><ellipse cx="320" cy="365" rx="284" ry="137"/><ellipse cx="320" cy="365" rx="230" ry="300" transform="rotate(35 320 365)"/><path d="M24 365H616M320 32V635" strokeDasharray="2 9"/></g>
  <g className="sculpture-base"><path d="M87 445 320 319 553 445 320 574Z" fill="#0c1c37" stroke="#315b88"/><path d="M87 445V461L320 591 553 461V445L320 574Z" fill="#0b152b" stroke="#29496c"/><path d="m129 446 191-103 191 103-191 106Z" stroke="#446aa9" strokeDasharray="4 7"/></g>
  <g className="sculpture-mid"><path d="m109 359 211-116 211 116-211 117Z" fill={`url(#${small ? 'plate-small' : 'plate'})`} stroke="#5796c6" strokeOpacity=".8"/><path d="M109 359V373L320 490 531 373V359L320 476Z" fill="#123257" fillOpacity=".8" stroke="#3a6a9a"/><path d="M190 362h70l60 35 66-38h63" stroke="#73e8f2" strokeWidth="2"/><circle cx="190" cy="362" r="4" fill="#79f4e8"/><circle cx="449" cy="359" r="4" fill="#79f4e8"/></g>
  <g className="sculpture-top"><path d="m147 275 173-94 173 94-173 95Z" fill="#112c4c" fillOpacity=".65" stroke="#62c6df"/><path d="M147 275v13l173 95 173-95v-13l-173 95Z" fill="#13324e" stroke="#4b8fb3"/><path d="M248 292c-27-2-39-17-31-33 5-10 17-16 30-17 1-25 26-41 51-35 16-29 65-26 81 7 29-2 50 19 46 39-2 19-22 33-45 34l-132 5Z" fill={`url(#${small ? 'cloud-small' : 'cloud'})`} stroke="#a3e7f4" strokeWidth="1.5"/><path d="m295 262 24-13 25 13-25 14Zm24 14v26m-24-40v25l24 15 25-15v-25" stroke="#d1f6ff" strokeOpacity=".75"/></g>
  <g className="sculpture-wires" stroke="#6de2eb" strokeOpacity=".7" strokeDasharray="3 8"><path d="M190 363v71l130 73M449 359v76l-129 72M320 383v56"/></g>
  <g className="sculpture-nodes"><g transform="translate(92 306)"><rect width="60" height="44" rx="8" fill="#112643" stroke="#5e92bf"/><path d="M12 14h36M12 29h36" stroke="#7198ba"/><circle cx="17" cy="14" r="2" fill="#72e6d1"/><circle cx="17" cy="29" r="2" fill="#72e6d1"/></g><g transform="translate(486 400)"><rect width="57" height="44" rx="8" fill="#112643" stroke="#5e92bf"/><path d="M12 14h33M12 29h33" stroke="#7198ba"/><circle cx="17" cy="14" r="2" fill="#72e6d1"/><circle cx="17" cy="29" r="2" fill="#72e6d1"/></g></g>
 </svg>;
}
