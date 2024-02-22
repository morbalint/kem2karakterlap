import {PDFDocument} from "pdf-lib";
import fs from "fs/promises";
import fontKit from "@pdf-lib/fontkit"
import {addTextFieldFactory} from "./helpers";
import {renderMainPage} from "./renderMainPage";
import {renderSecondPage} from "./renderSecondPage";
import {renderFullCasterVarazslatlap, renderHalfCasterVarazslatlap} from "./renderVarazslatlap";
import {
    renderVarazskonyvFrontPage,
    renderVarazskonyvLeftPage,
    renderVarazskonyvRightPage,
    renderVarazskonyvSecondPage
} from "./renderVarazskonyv";

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

    const page2 = doc.getPage(2)
    page2.setFont(pdfFont)
    const addTextField2 = addTextFieldFactory(form, pdfFont, page2)
    renderFullCasterVarazslatlap(addTextField2);

    const page3 = doc.getPage(3)
    page3.setFont(pdfFont)
    const addTextField3 = addTextFieldFactory(form, pdfFont, page3)
    renderHalfCasterVarazslatlap(addTextField3);

    const page4 = doc.getPage(4)
    page4.setFont(pdfFont)
    const addTextField4 = addTextFieldFactory(form, pdfFont, page4)
    renderVarazskonyvFrontPage(addTextField4);

    const page5 = doc.getPage(5)
    page5.setFont(pdfFont)
    const addTextField5 = addTextFieldFactory(form, pdfFont, page5)
    renderVarazskonyvSecondPage(addTextField5);

    const page6 = doc.getPage(6)
    page6.setFont(pdfFont)
    const addTextField6 = addTextFieldFactory(form, pdfFont, page6)
    renderVarazskonyvRightPage(addTextField6);

    const page7 = doc.getPage(7)
    page7.setFont(pdfFont)
    const addTextField7 = addTextFieldFactory(form, pdfFont, page7)
    renderVarazskonyvLeftPage(addTextField7);

    form.updateFieldAppearances(pdfFont)
    const pdfBytes = await doc.save()

    await fs.writeFile("karlap.pdf", pdfBytes)
}