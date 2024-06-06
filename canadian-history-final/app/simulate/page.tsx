import React from "react";

declare namespace JSX {
  interface IntrinsicElements {
    model: React.FC<React.PropsWithChildren>;
  }
}

import EarthModel from "../componants/EarthViewer";

export default function Home() {
  return (
    <main>
      <EarthModel />
    </main>
  );
}