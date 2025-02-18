"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function Code() {
  const code = `"use client"
  const DevMotivation = () => {
  const [bugsFixed, setBugsFixed] = React.useState(0);

  const fixBug = () => {
    setBugsFixed(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
      "Code, 
      Debug, 
      Improve, 
      Repeat"
      </h2>
      <p className="mb-2">
        Bugs Fixed: {bugsFixed}
      </p>
      <button 
        onClick={fixBug}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Fix a Bug
      </button>
    </div>
  );
};
`;

  return (
    <div className="max-w-sm sm:max-w-3xl mx-auto w-full mt-6">
      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Keep Coding 💻
      </h4>
      <CodeBlock
        language="jsx"
        filename="DevMotivation.tsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
