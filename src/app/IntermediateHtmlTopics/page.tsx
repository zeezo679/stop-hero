import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function IntermediateHtmlTopics() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">🟡 Intermediate Topics</h2>
      <div className="w-full max-w-4xl space-y-4">
        {/* Tables */}
        <Accordion sx={{ backgroundColor: '#fefce8', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" color="orange">📊 Tables</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
              • Use <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, and <code>&lt;th&gt;</code> to create tables.
              {"\n"}• Example:
              {"\n"}<code>
                &lt;table&gt;{"\n"}
                &nbsp;&nbsp;&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;/tr&gt;{"\n"}
                &nbsp;&nbsp;&lt;tr&gt;&lt;td&gt;Sara&lt;/td&gt;&lt;td&gt;22&lt;/td&gt;&lt;/tr&gt;{"\n"}
                &lt;/table&gt;
              </code>
              {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=8ub7P8-5zP4" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Watch Table Tutorial</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Forms & Inputs */}
        <Accordion sx={{ backgroundColor: '#fefce8', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" color="orange">📝 Forms & Inputs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
              • Use <code>&lt;form&gt;</code> with <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code> and <code>&lt;button&gt;</code>.
              {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=F6k8lTrAE2g" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HTML Form Basics - Net Ninja</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Semantic HTML */}
        <Accordion sx={{ backgroundColor: '#fefce8', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" color="orange">📐 Semantic HTML</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
              • Tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> give meaning to the content.
              {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=6Fz4s0a4H8U" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Semantic HTML - freeCodeCamp</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Media Tags */}
        <Accordion sx={{ backgroundColor: '#fefce8', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" color="orange">🎵 Media Tags</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
              • Use <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> to embed sound and video.
              {"\n"}• Example:
              {"\n"}<code>&lt;video src="video.mp4" controls&gt;&lt;/video&gt;</code>
              {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=htbY9-yggB0" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HTML Video Tag - BroCode</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Block vs Inline */}
        <Accordion sx={{ backgroundColor: '#fefce8', borderRadius: 2, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" color="orange">🧱 Block vs Inline</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div" sx={{ whiteSpace: 'pre-line' }}>
              • Block elements: Take full width (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>)
              {"\n"}• Inline elements: Fit inside content (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>)
              {"\n\n"}▶️ <a href="https://www.youtube.com/watch?v=I1jUB1O3TS0" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Block vs Inline - Techsith</a>
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
