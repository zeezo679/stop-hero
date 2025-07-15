import HtmlSection from './../Section/page';
const Topics = [
  {
    id: 1,
    title: '📊 Tables',
    content: `
    • Use <table>, <tr>, <td>, and <th> to create tables.
    • Example:
    <table>
      <tr><th>Name</th><th>Age</th></tr>
      <tr><td>Sara</td><td>22</td></tr>
    </table>
    `,
    resources: [
      {
        label: 'Watch Table Tutorial',
        url: 'https://www.youtube.com/watch?v=8ub7P8-5zP4'
      }
    ]
  },
  {
    id: 2,
    title: '📝 Forms & Inputs',
    content: `
• Use <form> with <input>, <select>, <textarea> and <button>.
    `,
    resources: [
      {
        label: 'HTML Form Basics - Net Ninja',
        url: 'https://www.youtube.com/watch?v=F6k8lTrAE2g'
      }
    ]
  },
  {
    id: 3,
    title: '📐 Semantic HTML',
    content: `
• Tags like <header>, <footer>, <article>, and <section> give meaning to the content.
    `,
    resources: [
      {
        label: 'Semantic HTML - freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=6Fz4s0a4H8U'
      }
    ]
  },
  {
    id: 4,
    title: '🎵 Media Tags',
    content: `
• Use <audio> and <video> to embed sound and video.
• Example:
<video src="video.mp4" controls></video>
    `,
    resources: [
      {
        label: 'HTML Video Tag - BroCode',
        url: 'https://www.youtube.com/watch?v=htbY9-yggB0'
      }
    ]
  },
  {
    id: 5,
    title: '🧱 Block vs Inline',
    content: `
• Block elements: Take full width (e.g., <div>, <p>)
• Inline elements: Fit inside content (e.g., <span>, <a>)
    `,
    resources: [
      {
        label: 'Block vs Inline - Techsith',
        url: 'https://www.youtube.com/watch?v=I1jUB1O3TS0'
      }
    ]
  }
];
export default function IntermediateHtmlTopics() {
  return (
    <HtmlSection
      topics={Topics}
      title="🟡 Intermediate HTML Topics"
      accentColor="yellow"
    />
  );
}
