import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FundHtmlSection() {
return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">FUNDHTML</h1>
        <div className="w-full max-w-4xl space-y-4">
        {/* What is HTML */}
        <Accordion sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                🔷 What is HTML?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="div" sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
                HTML stands for <strong>HyperText Markup Language</strong>.
                {"\n"}It is the standard language used to create and structure web pages.

                {"\n\n"}✅ <strong>Key Points:</strong>
                {"\n"}• <strong>HyperText:</strong> Text that links to other content on the web (via links).
                {"\n"}• <strong>Markup Language:</strong> Uses tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code> to structure content.
                {"\n"}• Not a programming language. It doesn’t include logic (like conditions or loops).
                {"\n"}• It describes what each part of a webpage is (e.g., heading, image, link).
                </Typography>
            </AccordionDetails>
        </Accordion>

        {/* HTML Structure */}
        <Accordion sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              🧱 HTML Structure
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
              🔶 A basic HTML document follows a standard structure:

              {"\n\n"}<code>&lt;!DOCTYPE html&gt;</code> → Defines the document type and HTML version.
              {"\n"}<code>&lt;html&gt;</code> → The root element that wraps the entire content.
              {"\n"}  └─ <code>&lt;head&gt;</code> → Contains metadata (title, charset, styles, etc.).
              {"\n"}  └─ <code>&lt;body&gt;</code> → Contains the visible content like text, images, links, etc.

              {"\n\n"}🧠 Example:
              {"\n"}<code>
                &lt;!DOCTYPE html&gt;{"\n"}
                &lt;html&gt;{"\n"}
                &lt;head&gt;{"\n"}
                  &lt;title&gt;My Page&lt;/title&gt;{"\n"}
                &lt;/head&gt;{"\n"}
                &lt;body&gt;{"\n"}
                  &lt;h1&gt;Welcome&lt;/h1&gt;{"\n"}
                &lt;/body&gt;{"\n"}
                &lt;/html&gt;
              </code>

              {"\n\n"}📚 Learn more:
              {"\n"}• [MDN Web Docs - HTML Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
              {"\n"}• [w3schools - HTML Basic](https://www.w3schools.com/html/html_basic.asp)
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        {/* Headings & Paragraphs */}
        <Accordion sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="heading-paragraphs">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>📑 Headings & Paragraphs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
              • HTML uses heading tags from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> to define headings.
              {"\n"}• Paragraphs are defined using the <code>&lt;p&gt;</code> tag.
              {"\n"}• Headings show structure, while paragraphs present readable blocks of content.

              {"\n\n"}▶️ **Watch**:
              {"\n"}• [HTML Headings & Paragraphs - CodeWithHarry](https://www.youtube.com/watch?v=Q5j5nRsH9Gk&t=178s)
              {"\n"}• [Traversy Media - HTML Crash Course](https://www.youtube.com/watch?v=UB1O30fR-EE&t=363s)
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Lists */}
        <Accordion sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="lists">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>📋 Lists</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
              • There are 3 main types of lists in HTML:
              {"\n"}  - <code>&lt;ul&gt;</code>: Unordered list
              {"\n"}  - <code>&lt;ol&gt;</code>: Ordered list
              {"\n"}  - <code>&lt;li&gt;</code>: List item
              {"\n"}• Nesting lists is also allowed for multi-level structures.

              {"\n\n"}▶️ **Watch**:
              {"\n"}• [HTML Lists - BroCode](https://www.youtube.com/watch?v=l1EssrLxt7E)
              {"\n"}• [HTML Lists Tutorial - Programming with Mosh](https://www.youtube.com/watch?v=4sosXZsdy-s&t=90s)
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Links & Images */}
        <Accordion sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="links-images">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>🔗 Links & 🖼️ Images</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
              • Use <code>&lt;a href="..."&gt;</code> to create hyperlinks.
              {"\n"}• Use <code>&lt;img src="..." alt="..."&gt;</code> to display images.
              {"\n"}• Always use `alt` text for accessibility.

              {"\n\n"}▶️ **Watch**:
              {"\n"}• [HTML Links & Images - The Net Ninja](https://www.youtube.com/watch?v=YVnOAq1j2wM)
              {"\n"}• [HTML Images - CodeWithHarry](https://www.youtube.com/watch?v=xbq3z7bX6gA)
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Basic Text Formatting */}
        <Accordion sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="text-formatting">
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>✏️ Basic Text Formatting</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
              • You can style text using tags like:
              {"\n"}  - <code>&lt;strong&gt;</code> for bold
              {"\n"}  - <code>&lt;em&gt;</code> for italic
              {"\n"}  - <code>&lt;u&gt;</code> for underline
              {"\n"}  - <code>&lt;br&gt;</code> for line break
              {"\n"}  - <code>&lt;hr&gt;</code> for horizontal line

              {"\n\n"}▶️ **Watch**:
              {"\n"}•
              <a 
                href="https://www.youtube.com/watch?v=koPOkJz0E_c" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline"
                >
                [Text Formatting Tags - Simplilearn]
                </a>
              {"\n"}• [HTML Formatting Tutorial - Edureka](https://www.youtube.com/watch?v=bqJ8V4eyK6I)
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Placeholder Accordion */}
        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Coming Soon...</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}
