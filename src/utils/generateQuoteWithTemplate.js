import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import JSZipUtils from "jszip-utils";

// Helper to load the template
function loadTemplate(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch template: ${response.statusText}`);
      }
      return response.arrayBuffer();
    })
    .then((buffer) => new Uint8Array(buffer));
}

export async function generateQuoteWithTemplate(data) {
  try {
    console.log("Loading template...");
    const content = await loadTemplate("/templates/template_new.docx");
    console.log("Template loaded successfully!");

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.render(data);

    const out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    saveAs(out, "Quote.docx");
  } catch (error) {
    console.error("Error generating document:", error);

    if (error.properties && error.properties.errors) {
      console.error("Template Errors:", error.properties.errors);
    }
  }
}
