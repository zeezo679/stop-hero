
import HtmlSection from './../Section/page';

const Topics = [
  {
    id: 1,
    title: '🔷 What is HTML?',
    content: `
HTML stands for HyperText Markup Language.
It is the standard language used to create and structure web pages.

✅ Key Points:
• HyperText: Text that links to other content on the web (via links).
• Markup Language: Uses tags like <p>, <h1> to structure content.
• Not a programming language. It doesn’t include logic (like conditions or loops).
• It describes what each part of a webpage is (e.g., heading, image, link).
    `,
    resources: [],
  },
  {
    id: 2,
    title: '🧱 HTML Structure',
    content: `
🔶 A basic HTML document follows a standard structure:

<!DOCTYPE html> → Defines the document type and HTML version.
<html> → The root element that wraps the entire content.
  └─ <head> → Contains metadata (title, charset, styles, etc.).
  └─ <body> → Contains the visible content like text, images, links, etc.

🧠 Example:
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
    `,
    resources: [
      { label: 'MDN Web Docs - HTML Structure', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started' },
      { label: 'w3schools - HTML Basic', url: 'https://www.w3schools.com/html/html_basic.asp' }
    ]
  },
  {
    id: 3,
    title: '📑 Headings & Paragraphs',
    content: `
• HTML uses heading tags from <h1> to <h6> to define headings.
• Paragraphs are defined using the <p> tag.
• Headings show structure, while paragraphs present readable blocks of content.
    `,
    resources: [
      { label: 'HTML Headings & Paragraphs - CodeWithHarry', url: 'https://www.youtube.com/watch?v=Q5j5nRsH9Gk&t=178s' },
      { label: 'Traversy Media - HTML Crash Course', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE&t=363s' }
    ]
  },
  {
    id: 4,
    title: '📋 Lists',
    content: `
• There are 3 main types of lists in HTML:
  - <ul>: Unordered list
  - <ol>: Ordered list
  - <li>: List item
• Nesting lists is also allowed for multi-level structures.
    `,
    resources: [
      { label: 'HTML Lists - BroCode', url: 'https://www.youtube.com/watch?v=l1EssrLxt7E' },
      { label: 'HTML Lists Tutorial - Programming with Mosh', url: 'https://www.youtube.com/watch?v=4sosXZsdy-s&t=90s' }
    ]
  },
  {
    id: 5,
    title: '🔗 Links & 🖼️ Images',
    content: `
• Use <a href="..."> to create hyperlinks.
• Use <img src="..." alt="..."> to display images.
• Always use alt text for accessibility.
    `,
    resources: [
      { label: 'HTML Links & Images - The Net Ninja', url: 'https://www.youtube.com/watch?v=YVnOAq1j2wM' },
      { label: 'HTML Images - CodeWithHarry', url: 'https://www.youtube.com/watch?v=xbq3z7bX6gA' }
    ]
  },
  {
    id: 6,
    title: '✏️ Basic Text Formatting',
    content: `
• You can style text using tags like:
  - <strong> for bold
  - <em> for italic
  - <u> for underline
  - <br> for line break
  - <hr> for horizontal line
    `,
    resources: [
      { label: 'Text Formatting Tags - Simplilearn', url: 'https://www.youtube.com/watch?v=koPOkJz0E_c' },
      { label: 'HTML Formatting Tutorial - Edureka', url: 'https://www.youtube.com/watch?v=bqJ8V4eyK6I' }
    ]
  }
];
export default function HtmlPage() {
  return (
    <HtmlSection
      topics={Topics}
      title="🔷 FUNDAMENTAL HTML TOPICS"
      accentColor="indigo"
    />
  );
}