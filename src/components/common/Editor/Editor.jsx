import { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container } from "./Styles";
import { usePostImage } from "../../../services/ManagerService";

export default function EditorConvertToHTML({ setEditorValue }) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    setEditorValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

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
          image: {
            urlEnabled: true,
            alignmentEnabled: true,
            previewImage: true,
            //uploadEnabled: true,
            // uploadCallback: async (file) => {
            //   const base64File = await fileToBase64(file);
            //   const result = await usePostImage(base64File);
            //   return { data: { link: result.data.imageURL } };
            // },
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: "100%",
              width: "100%",
            },
          },
        }}
      />
      <textarea value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
    </Container>
  );
}
