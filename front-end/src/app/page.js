"use client";

import Header from "./header.js";
import Body from "./body.js";
import { useState } from "react";
import Form from "./add_task_form.js";

export default function Home() {
  const [content, setContent] = useState(true);
  const [task, setTask] = useState([]);
  return (
    <div className="flex flex-col h-screen">
      {content === true ? (
        <>
          <Header />
          <Body content={content} setContent={setContent}  task={task} setTask={setTask}/>
        </>
      ) : (
        <Form content={content} setContent={setContent}  task={task} setTask={setTask}/>
      )}
    </div>
  );
}
