import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackCodeEditor,
  SandpackPreview,
  FileTabs,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

function IDE(props) {
  return (
    <div className="w-2/3 h-full flex flex-col items-stretch relative bg-gray-primary">
      <SandpackProvider template="react">
        <SandpackThemeProvider
          theme={{
            palette: {
              activeText: "#03ef62",
              defaultText: "#5a5a5a",
              inactiveText: "#1a1a1a",
              activeBackground: "#272727",
              defaultBackground: "#05192d",
              inputBackground: "#2e2e2e",
              accent: "#03ef62",
              errorBackground: "#dac1fb",
              errorForeground: "#b08df8",
            },
            syntax: {
              plain: "#ffffff",
              comment: {
                color: "#48a431",
                fontStyle: "italic",
              },
              keyword: "#ffe144",
              tag: "#f07178",
              punctuation: "#89ddff",
              definition: "#ff47c1",
              property: "#90e86f",
              static: "#ffffff",
              string: "#c3e88d",
            },
            typography: {
              bodyFont: "JetBrains Mono",
              monoFont: "JetBrains Mono",
              fontSize: "15px",
              lineHeight: "1.6",
            },
          }}
        >
          <div className="flex h-full">
            <div className="w-1/2 h-full">
              <FileTabs />

              <SandpackCodeEditor
                customStyle={{
                  height: `100%`,
                }}
                showTabs={false}
                showLineNumbers={true}
                showInlineErrors={true}
              />
            </div>

            <div className="w-1/2 h-full">
              <SandpackPreview
                showNavigator
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
              />
            </div>
          </div>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
}

export default IDE;
