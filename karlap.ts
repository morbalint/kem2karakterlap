import {PDFDocument} from "pdf-lib";
import fs from "fs/promises";
import fontKit from "@pdf-lib/fontkit"
import {addTextFieldFactory} from "./helpers";
import {renderMainPage} from "./renderMainPage";
import {renderSecondPage} from "./renderSecondPage";

export async function Karlap() {
    const docBuffer = await fs.readFile("kemkas2karakterlap.pdf", {encoding: null, flag: 'r'})
    const doc =  await PDFDocument.load(docBuffer)
    doc.registerFontkit(fontKit)
    const fontBuffer = await fs.readFile("fonts/Milonga-Regular.ttf", {encoding: null, flag: 'r'})
    const pdfFont = await doc.embedFont(fontBuffer)
    const form = doc.getForm()

    const page0 = doc.getPage(0)
    page0.setFont(pdfFont)
    const addTextField0 = addTextFieldFactory(form, pdfFont, page0)
    renderMainPage(addTextField0);

    const page1 = doc.getPage(1)
    page1.setFont(pdfFont)
    const addTextField1 = addTextFieldFactory(form, pdfFont, page1)
    renderSecondPage(addTextField1);

    form.updateFieldAppearances(pdfFont)
    const pdfBytes = await doc.save()

    await fs.writeFile("karlap.pdf", pdfBytes)
}