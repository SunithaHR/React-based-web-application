import React from "react";
import { Editor } from "@tiptap/react";

interface ToolbarProps {
  editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div style={styles.toolbar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{ ...styles.button, fontWeight: editor.isActive("bold") ? "bold" : "normal" }}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        style={{ ...styles.button, fontStyle: editor.isActive("italic") ? "italic" : "normal" }}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        style={{ ...styles.button, textDecoration: editor.isActive("underline") ? "underline" : "none" }}
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={{ ...styles.button, fontWeight: editor.isActive("bulletList") ? "bold" : "normal" }}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={{ ...styles.button, fontWeight: editor.isActive("orderedList") ? "bold" : "normal" }}
      >
        Ordered List
      </button>
    </div>
  );
};

export default Toolbar;

// Styles
const styles = {
  toolbar: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "normal",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#ddd",
    },
  },
};