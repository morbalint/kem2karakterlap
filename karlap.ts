import {PDFDocument, PDFPage, rgb} from "pdf-lib";
import fs from "fs/promises";
import fontKit from "@pdf-lib/fontkit"


export async function Karlap() {
    const docBuffer = await fs.readFile("kemkas2karakterlap.pdf", {encoding: null, flag: 'r'})
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
        x: 202,
        y: 600,
        w: 170,
        h: 16
    })
    addTextField0({
        name: "hp_aktualis_2",
        x: 202,
        y: 584,
        w: 170,
        h: 16
    })
    addTextField0({
        name: "hp_aktualis_3",
        x: 202,
        y: 568,
        w: 170,
        h: 16
    })
    addTextField0({
        name: "hp_aktualis_4",
        x: 202,
        y: 554,
        w: 170,
        h: 14
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

    addTextField0({
        name: "tamadas_bonusz_alap",
        x: 141,
        y: 503,
        w: 38,
        h: 16
    })
    addTextField0({
        name: "tamadas_bonusz_ero",
        x: 110,
        y: 475,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tamadas_bonusz_kozelharc",
        x: 145,
        y: 476,
        w: 31,
        h: 14
    })
    addTextField0({
        name: "tamadas_bonusz_ugy",
        x: 110,
        y: 447,
        w: 24,
        h: 16
    })
    addTextField0({
        name: "tamadas_bonusz_tavolsagi",
        x: 145,
        y: 448,
        w: 31,
        h: 14
    })

    addTextField0({
        name: "fegyver_1",
        x: 187,
        y: 503,
        w: 248,
        h: 16
    })
    addTextField0({
        name: "fegyver_2",
        x: 187,
        y: 475,
        w: 248,
        h: 16
    })
    addTextField0({
        name: "fegyver_3",
        x: 187,
        y: 447,
        w: 248,
        h: 16
    })
    addTextField0({
        name: "fegyver_4",
        x: 187,
        y: 419,
        w: 248,
        h: 16
    })

    addTextField0({
        name: "tapasztalat",
        x: 442,
        y: 500,
        w: 95,
        h: 16
    })
    addTextField0({
        name: "tapasztalat_2",
        x: 442,
        y: 484,
        w: 95,
        h: 16
    })
    addTextField0({
        name: "tapasztalat_3",
        x: 442,
        y: 468,
        w: 95,
        h: 16
    })
    addTextField0({
        name: "tapasztalat_4",
        x: 442,
        y: 452,
        w: 95,
        h: 16
    })
    addTextField0({
        name: "tapasztalat_kovetkezo_szint",
        x: 447,
        y: 418,
        w: 85,
        h: 16
    })

    // kepzettseg elso oszlop
    for (let i = 0; i < 6; i++) {
        addTextField0({
            name: `kepzettseg_${i}_nev`,
            x: 57,
            y: 390 - (i * 28.25),
            w: 100,
            h: 16
        })
        addTextField0({
            name: `kepzettseg_${i}_alap`,
            x: 161,
            y: 390 - (i * 28.25),
            w: 24,
            h: 16
        })
        addTextField0({
            name: `kepzettseg_${i}_bonusz`,
            x: 195,
            y: 390 - (i * 28.25),
            w: 24,
            h: 16
        })
        addTextField0({
            name: `kepzettseg_${i}_osszes`,
            x: 234,
            y: 391 - (i * 28.25),
            w: 14,
            h: 14
        })
    }
    // kepzettseg masodik oszlop
    for (let i = 0; i < 6; i++) {
        addTextField0({
            name: `kepzettseg_${(i + 6)}_nev`,
            x: 57+213,
            y: 390 - (i * 28.25),
            w: 100,
            h: 16
        })
        addTextField0({
            name: `kepzettseg_${(i + 6)}_alap`,
            x: 161+213,
            y: 390 - (i * 28.25),
            w: 24,
            h: 16
        })
        addTextField0({
            name: `kepzettseg_${(i + 6)}_bonusz`,
            x: 195+213,
            y: 390 - (i * 28.25),
            w: 24,
            h: 16
        })
        addTextField0({
            name: `kepzettseg_${(i + 6)}_osszes`,
            x: 234+213,
            y: 391 - (i * 28.25),
            w: 14,
            h: 14
        })
    }

    addTextField0({
        name: `arany`,
        x: 475,
        y: 387,
        w: 63,
        h: 14
    })
    addTextField0({
        name: `arany_2`,
        x: 475,
        y: 373,
        w: 63,
        h: 14
    })
    addTextField0({
        name: `arany_3`,
        x: 475,
        y: 361,
        w: 63,
        h: 12
    })
    addTextField0({
        name: `elektrum`,
        x: 475,
        y: 387-56,
        w: 63,
        h: 14
    })
    addTextField0({
        name: `elektrum_2`,
        x: 475,
        y: 373-56,
        w: 63,
        h: 14
    })
    addTextField0({
        name: `elektrum_3`,
        x: 475,
        y: 361-56,
        w: 63,
        h: 12
    })
    addTextField0({
        name: `ezust`,
        x: 475,
        y: 387-56-57,
        w: 63,
        h: 14
    })
    addTextField0({
        name: `ezust_2`,
        x: 475,
        y: 373-56-57,
        w: 63,
        h: 14
    })
    addTextField0({
        name: `ezust_3`,
        x: 475,
        y: 361-56-57,
        w: 63,
        h: 12
    })

    // viselt
    for (let i = 0; i < 8; i++) {
        addTextField0({
            name: `viselt_${(i)}`,
            x: 62,
            y: 197 - (i * 19.75),
            w: 143,
            h: 16
        })
    }
    // cipelt
    for (let i = 0; i < 8; i++) {
        addTextField0({
            name: `cipelt_${(i)}`,
            x: 227,
            y: 197 - (i * 19.75),
            w: 143,
            h: 16
        })
    }
    // aprosagok
    for (let i = 0; i < 8; i++) {
        addTextField0({
            name: `aprosagok_${(i)}`,
            x: 391,
            y: 197 - (i * 19.75),
            w: 143,
            h: 16
        })
    }


    form.updateFieldAppearances(pdfFont)
    const pdfBytes = await doc.save()

    await fs.writeFile("karlap.pdf", pdfBytes)
}