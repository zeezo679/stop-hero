'use client';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';

export default function HtmlSection({ topics, title, accentColor = "indigo" }) {
  const [disabledId, setDisabledId] = useState(1);
  const [showAlert, setShowAlert] = useState(false); // ✅ move inside component

  useEffect(() => {
    const savedProgress = localStorage.getItem('completedHtmlTasks');
    if (savedProgress) {
      setDisabledId(parseInt(savedProgress));
    }
  }, []);

  function handleCompleteClick() {
    if (disabledId >= topics.length) return;

    setDisabledId(disabledId + 1);
    localStorage.setItem('completedHtmlTasks', JSON.stringify(disabledId + 1));
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-10 flex flex-col items-center">
      <h2 className={`text-3xl font-bold mb-6 text-${accentColor}-600 dark:text-${accentColor}-400`}>
        {title}
      </h2>

      {/* ✅ Alert appears if showAlert is true */}
      {showAlert && (
        <Alert
          variant="filled"
          severity="success"
          sx={{ position: 'fixed', top: 100, right: 20, zIndex: 1000 }}
        >
          ✅ Task {disabledId} marked as complete!
        </Alert>
      )}

      <div className="w-full max-w-4xl space-y-4">
        {topics.map((topic) => (
          <Accordion
            key={topic.id}
            disabled={topic.id > disabledId}
            sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>{topic.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" sx={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: 1.7 }}>
                {topic.content}
                {"\n\n"}{topic.resources && topic.resources.length > 0 && "▶️ Resources:\n"}
                {topic.resources?.map((res, i) => (
                  <div key={i}>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      • {res.label}
                    </a>
                  </div>
                ))}
                <AddTaskIcon
                  className="text-green-500 cursor-pointer ml-2"
                  onClick={handleCompleteClick}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
