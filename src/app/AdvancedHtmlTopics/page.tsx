import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AdvancedHtmlTopics() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">🔵 Advanced Topics</h2>
        <div className="w-full max-w-4xl space-y-4">
          {/* Accessibility */}
          <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" color="blue">♿ Accessibility (A11y)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                • Make content accessible for all users, including screen reader support.
                • Use alt text, landmarks, labels.
                {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=3f31oufqFSM" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Intro to A11y - freeCodeCamp</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          {/* Meta Tags */}
          <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" color="blue">🏷️ Meta Tags</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                • Placed in the <code>&lt;head&gt;</code> for SEO, charset, viewport, etc.
                {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=tPqUbg5z9p0" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Meta Tags in HTML - Simplilearn</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          {/* Iframes */}
          <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" color="blue">🖼️ Iframes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                • Embed another page inside your HTML using <code>&lt;iframe&gt;</code>
                {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=_j4GyYGSMMk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HTML iframe - Code Explained</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          {/* HTML APIs Overview */}
          <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" color="blue">🧠 HTML APIs Overview</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                • Built-in browser APIs like:
                {"\n"}  - Drag and Drop
                {"\n"}  - Geolocation
                {"\n"}• Usually used with JavaScript
                {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=1JqgG9I3Eqw" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HTML5 APIs Overview - Traversy Media</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          {/* Custom Data Attributes */}
          <Accordion sx={{ backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" color="blue">📦 Custom Data Attributes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
                • Use <code>data-*</code> attributes to store custom info.
                {"\n"}Example: <code>&lt;div data-user="123"&gt;&lt;/div&gt;</code>
                {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=5BuQZBNYqGg" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Data Attributes - Online Tutorials</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Coming Soon...</Typography>
          </AccordionSummary>
        </Accordion>
        </div>
      </div>
    );
  }
  