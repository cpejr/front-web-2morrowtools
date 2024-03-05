import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container } from "./Styles";

export default function EditorConvertToHTML() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const test = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  console.log(test);
  return (
    <Container>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "remove",
            "history",
            "image",
          ],
        }}
      />
      <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
      <div className='content' dangerouslySetInnerHTML={{ __html: test }}></div>
    </Container>
  );
}
