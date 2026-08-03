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
  package: {
    pattern: /(^|\s)@?[\w.-]+(?:\/[\w.-]+)?(?:@[\w.-]+)?(?=\s|$)/,
    lookbehind: true,
    alias: "string",
  },
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
  showLineNumbers,
  value,
}: {
  className?: string;
  label: string;
  language: SyntaxLanguage;
  showLineNumbers?: boolean;
  value: string;
}) {
  const shouldShowLineNumbers = showLineNumbers ?? language === "tsx";

  return (
    <Highlight code={value.trimEnd()} language={language}>
      {({
        className: languageClassName,
        getLineProps,
        getTokenProps,
        tokens,
      }) => (
        <pre
          aria-label={`${label} ${language === "bash" ? "shell" : language.toUpperCase()} code`}
          className={cn("syntax-code", languageClassName, className)}
          data-language={language}
          data-line-numbers={shouldShowLineNumbers ? "true" : "false"}
          role="region"
          tabIndex={0}
        >
          <code>
            {tokens.map((line, lineIndex) => {
              const lineProps = getLineProps({ line });
              return (
                <span
                  {...lineProps}
                  className={cn(
                    lineProps.className,
                    "syntax-code-line",
                    shouldShowLineNumbers && "has-line-number",
                  )}
                  key={`line-${lineIndex}`}
                >
                  {shouldShowLineNumbers ? (
                    <span
                      aria-hidden="true"
                      className="syntax-code-line-number"
                      data-line-number={lineIndex + 1}
                    />
                  ) : null}
                  <span className="syntax-code-line-content">
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
                  </span>
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
