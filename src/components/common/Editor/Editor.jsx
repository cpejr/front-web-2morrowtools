import { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container, ErrorMessage } from "./Styles";

export default function EditorConvertToHTML({ setEditorValue, error }) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    setEditorValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <Container error={error}>
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
          image: {
            urlEnabled: true,
            alignmentEnabled: true,
            previewImage: true,
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: "100%",
              width: "100%",
            },
          },
        }}
      />
      <ErrorMessage>{error && "O texto do post deve ser preenchido"}</ErrorMessage>
    </Container>
  );
}
{
  /* <textarea value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} /> */
}
