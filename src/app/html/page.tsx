'use client';
import CoursePage from '../Components/CoursePage'


export default function HTMLCourse() {
  return (
    <CoursePage
      name="HTML"
      overview="HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and semantics of your content, allowing browsers to render text, images, videos, and more."
      icon="https://cdn-icons-png.flaticon.com/512/919/919827.png"
      links={[
        { label: 'Fundational Topics', href: '../FUNDHTML' },
        { label: 'Intermediate Topics', href: '../IntermediateHtmlTopics', locked: true },
        { label: 'Advanced Topics', href: '../AdvancedHtmlTopics', locked: true },
        { label: 'Practical Projects', locked: true },
      ]}
    />
  );
}
