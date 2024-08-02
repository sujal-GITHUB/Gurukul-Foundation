// pages/_document.js (or _document.tsx)
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const darkMode = localStorage.getItem('darkMode') === 'true';
                  if (darkMode) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  document.documentElement.style.visibility = 'visible';
                })();
              `,
            }}
          />
          <style>{`
            html {
              visibility: hidden;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
