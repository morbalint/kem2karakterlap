import {PDFDocument, PDFPage, rgb} from "pdf-lib";
import fs from "fs/promises";
import fontKit from "@pdf-lib/fontkit"


export async function Karlap() {
    const docBuffer = await fs.readFile("kem2karakterlap_minden.pdf", {encoding: null, flag: 'r'})
    const doc =  await PDFDocument.load(docBuffer)
    doc.registerFontkit(fontKit)
    const fontBuffer = await fs.readFile("fonts/Milonga-Regular.ttf", {encoding: null, flag: 'r'})
    const pdfFont = await doc.embedFont(fontBuffer)
    const form = doc.getForm()

    const page0 = doc.getPage(0)
    page0.setFont(pdfFont)

    const addTextFieldToPage = (page: PDFPage) => (options: {name: string, x: number, y: number, w: number, h: number, text?: string}) => {
        const field = form.createTextField(options.name)
        field.setText(options.text)
        field.addToPage(page, {
            x: options.x,
            y: options.y,
            font: pdfFont,
            borderColor: rgb(1,1,1),
            borderWidth: 0,
            width: options.w,
            height: options.h,
        })
        return field
    }

    const addTextField0 = addTextFieldToPage(page0)

    addTextField0({
        name: "nev_faj_osztaly",
        x: 55,
        y: 730,
        w: 420,
        h: 24
    })
    addTextField0({
        name: "szint",
        x: 495,
        y: 711,
        w: 36,
        h: 36
    })

    addTextField0({
        name: "vo",
        x: 210,
        y: 690,
        w: 28,
        h: 28
    })
    addTextField0({
        name: "pancel",
        x: 303,
        y: 705,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "pajzs",
        x: 369,
        y: 705,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "egyeb_vo",
        x: 436,
        y: 705,
        w: 24,
        h: 16
    })

    // Tulajdonsagok
    addTextField0({
        name: "tul_ero",
        x: 130,
        y: 688,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tul_ero_mod",
        x: 169,
        y: 688,
        w: 14,
        h: 16
    })
    addTextField0({
        name: "tul_ugy",
        x: 130,
        y: 660,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tul_ugy_mod",
        x: 169,
        y: 660,
        w: 14,
        h: 16
    })
    addTextField0({
        name: "tul_egs",
        x: 130,
        y: 631,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tul_egs_mod",
        x: 169,
        y: 631,
        w: 14,
        h: 16
    })
    addTextField0({
        name: "tul_int",
        x: 130,
        y: 603,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tul_int_mod",
        x: 169,
        y: 603,
        w: 14,
        h: 16
    })
    addTextField0({
        name: "tul_bol",
        x: 130,
        y: 575,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tul_bol_mod",
        x: 169,
        y: 575,
        w: 14,
        h: 16
    })
    addTextField0({
        name: "tul_kar",
        x: 130,
        y: 546,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tul_kar_mod",
        x: 169,
        y: 546,
        w: 14,
        h: 16
    })

    addTextField0({
        name: "jellem",
        x: 385,
        y: 680,
        w: 113,
        h: 16
    })
    addTextField0({
        name: "istenseg",
        x: 385,
        y: 651,
        w: 150,
        h: 16
    })

    // HP
    addTextField0({
        name: "hp_rolls",
        x: 199,
        y: 640,
        w: 175,
        h: 16
    })
    addTextField0({
        name: "hp_aktualis",
        x: 203,
        y: 600,
        w: 170,
        h: 16
    })

    // Mentők
    addTextField0({
        name: "kitartas_alap",
        x: 445,
        y: 617,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "kitartas_mod",
        x: 479,
        y: 617,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "kitartas_sum",
        x: 518,
        y: 618,
        w: 14,
        h: 14
    })
    addTextField0({
        name: "reflex_alap",
        x: 445,
        y: 589,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "reflex_mod",
        x: 479,
        y: 589,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "reflex_sum",
        x: 518,
        y: 590,
        w: 14,
        h: 14
    })
    addTextField0({
        name: "akaratero_alap",
        x: 445,
        y: 560,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "akaratero_mod",
        x: 479,
        y: 560,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "akaratero_sum",
        x: 518,
        y: 561,
        w: 14,
        h: 14
    })

    addTextField0({
        name: "kezdemenyezes",
        x: 518,
        y: 536,
        w: 14,
        h: 14
    })

    form.updateFieldAppearances(pdfFont)
    const pdfBytes = await doc.save()

    await fs.writeFile("karlap.pdf", pdfBytes)
}