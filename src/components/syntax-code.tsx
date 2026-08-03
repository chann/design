import { Highlight, Prism } from "prism-react-renderer";

import { cn } from "@/lib/utils";

export type SyntaxLanguage = "bash" | "tsx";

const shellGrammar = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true,
  },
  string: {
    pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true,
  },
  option: {
    pattern: /(^|\s)--?[\w-]+/,
    lookbehind: true,
    alias: "keyword",
  },
  function: /(^|\s)(?:bunx|git|npm|npx|pnpm|yarn)(?=\s|$)/,
  keyword: /\b(?:add|build|dev|install|remove|run|test)\b/,
  variable: /\$(?:[A-Z_][A-Z\d_]*|\{[^}]+\})/i,
  operator: /&&?|\|\|?|;;?|[<>]/,
  punctuation: /[\\]/,
};

if (!Prism.languages.bash) {
  Prism.languages.bash = shellGrammar;
}

export function SyntaxCode({
  className,
  label,
  language,
  value,
}: {
  className?: string;
  label: string;
  language: SyntaxLanguage;
  value: string;
}) {
  return (
    <Highlight code={value.trimEnd()} language={language}>
      {({
        className: languageClassName,
        getLineProps,
        getTokenProps,
        tokens,
      }) => (
        <pre
          aria-label={`${label} code`}
          className={cn("syntax-code", languageClassName, className)}
          data-language={language}
          role="region"
          tabIndex={0}
        >
          <code>
            {tokens.map((line, lineIndex) => {
              const lineProps = getLineProps({ line });
              return (
                <span {...lineProps} key={`line-${lineIndex}`}>
                  {line.map((token, tokenIndex) => {
                    const tokenProps = getTokenProps({ token });
                    return (
                      <span
                        {...tokenProps}
                        key={`token-${lineIndex}-${tokenIndex}`}
                        style={undefined}
                      />
                    );
                  })}
                  {"\n"}
                </span>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
