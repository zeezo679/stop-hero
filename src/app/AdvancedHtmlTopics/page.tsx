import HtmlSection from './../Section/page';

export const advancedHtmlTopics = [
  {
    id: 1,
    title: '♿ Accessibility (A11y)',
    content: `
• Make content accessible for all users, including screen reader support.
• Use alt text, landmarks, labels.
    `,
    resources: [
      {
        label: 'Intro to A11y - freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=3f31oufqFSM'
      }
    ]
  },
  {
    id: 2,
    title: '🏷️ Meta Tags',
    content: `
• Placed in the <head> for SEO, charset, viewport, etc.
    `,
    resources: [
      {
        label: 'Meta Tags in HTML - Simplilearn',
        url: 'https://www.youtube.com/watch?v=tPqUbg5z9p0'
      }
    ]
  },
  {
    id: 3,
    title: '🖼️ Iframes',
    content: `
• Embed another page inside your HTML using <iframe>
    `,
    resources: [
      {
        label: 'HTML iframe - Code Explained',
        url: 'https://www.youtube.com/watch?v=_j4GyYGSMMk'
      }
    ]
  },
  {
    id: 4,
    title: '🧠 HTML APIs Overview',
    content: `
• Built-in browser APIs like:
  - Drag and Drop
  - Geolocation
• Usually used with JavaScript
    `,
    resources: [
      {
        label: 'HTML5 APIs Overview - Traversy Media',
        url: 'https://www.youtube.com/watch?v=1JqgG9I3Eqw'
      }
    ]
  },
  {
    id: 5,
    title: '📦 Custom Data Attributes',
    content: `
• Use data-* attributes to store custom info.
Example: <div data-user="123"></div>
    `,
    resources: [
      {
        label: 'Data Attributes - Online Tutorials',
        url: 'https://www.youtube.com/watch?v=5BuQZBNYqGg'
      }
    ]
  }
];
export default function AdvancedHtmlTopics() {
  return (
    <HtmlSection
      topics={advancedHtmlTopics}
      title="🔵 Advanced Topics"
      accentColor="blue"
    />
  );
}