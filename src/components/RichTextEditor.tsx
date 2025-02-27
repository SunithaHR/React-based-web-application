import React, { useState, useEffect } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const RichTextEditor: React.FC = () => {
  // Load user data from localStorage or start with empty values
  const [userData, setUserData] = useState<UserData>(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : { name: "", email: "", phone: "", address: "" };
  });

  const [lastUpdated, setLastUpdated] = useState<string>(
    localStorage.getItem("lastUpdated") || ""
  );

  // Load editor content from localStorage or start with an empty editor
  const [content, setContent] = useState<string>(() => {
    return localStorage.getItem("editorContent") || "";
  });

  // Initialize the editor
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: content,
    onUpdate: ({ editor }: { editor: Editor }) => {
      const html = editor.getHTML();
      setContent(html);
      localStorage.setItem("editorContent", html);
    },
  });

  // Load saved content when the editor is ready
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  // Save user data and editor content
  const handleSave = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    const updatedUserData: UserData = {
      name: doc.querySelector("p:nth-child(1)")?.textContent?.replace("Name: ", "") || "",
      email: doc.querySelector("p:nth-child(2)")?.textContent?.replace("Email: ", "") || "",
      phone: doc.querySelector("p:nth-child(3)")?.textContent?.replace("Phone: ", "") || "",
      address: doc.querySelector("p:nth-child(4)")?.textContent?.replace("Address: ", "") || "",
    };

    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    localStorage.setItem("lastUpdated", new Date().toLocaleString());
    setLastUpdated(new Date().toLocaleString());
    alert("Changes saved successfully!");
  };

  // Reset editor and user data
  const handleReset = () => {
    setUserData({ name: "", email: "", phone: "", address: "" });
    localStorage.removeItem("userData");
    localStorage.removeItem("lastUpdated");
    setLastUpdated("");
    if (editor) {
      editor.commands.clearContent();
      setContent("");
      localStorage.removeItem("editorContent");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Rich Text Editor</h2>
      <Toolbar editor={editor} />
      <div style={styles.editorContainer}>
        <EditorContent editor={editor} />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={handleReset} style={styles.resetButton}>
          Reset
        </button>
        <button onClick={handleSave} style={styles.saveButton}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;

// Styles
const styles = {
  container: {
    width: "80%",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center" as const,
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  editorContainer: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    marginTop: "10px",
    minHeight: "200px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  resetButton: {
    marginRight: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#ff4444",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  saveButton: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};