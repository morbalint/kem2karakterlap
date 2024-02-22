import {RenderTextFieldFunc} from "./helpers";

interface RenderVarazslatParams {
    addTextField: RenderTextFieldFunc,
    i: number,
    page?: number
    yOffset?: number
    xOffset?: number
    rows?: number,
    last?: boolean
}

function renderVarazslatOnFirstPage({addTextField, i, last}: RenderVarazslatParams) {
    const offset = 105;
    addTextField({
        name: `varazskonyv_page1_spell${i}_nev`,
        x: 58,
        y: 668 - (i*offset),
        w: 210,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page1_spell${i}_szint`,
        x: 280,
        y: 668 - (i*offset),
        w: 12,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page1_spell${i}_hatoido`,
        x: 298.5,
        y: 668 - (i*offset),
        w: 64,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page1_spell${i}_tav`,
        x: 364.5,
        y: 668 - (i*offset),
        w: 23,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page1_spell${i}_terulet`,
        x: 389.5,
        y: 668 - (i*offset),
        w: 92,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page1_spell${i}_mento`,
        x: 484.5,
        y: 668 - (i*offset),
        w: 53,
        h: 18,
    })
    const rounded = last === true
    for (let j = 0; j < 4; j++) {
        addTextField({
            name: `varazskonyv_page1_spell${i}_leiras_${j}`,
            x: 58,
            y: 648 - (i*offset) - (16*j),
            w: 480,
            h: 16,
        })
    }
    addTextField({
        name: `varazskonyv_page1_spell${i}_leiras_4`,
        x: 58 + (rounded ? 10 : 0),
        y: 648 - (i*offset) - (4*16),
        w: 480 - (rounded ? 20 : 0),
        h: 16,
    })
}

export function renderVarazskonyvFrontPage(addTextField: RenderTextFieldFunc) {
    addTextField({
        name: 'varazskonyv_nev_faj_osztaly_szint',
        x: 57,
        y: 731,
        w: 482,
        h: 16,
    })
    for (let i = 0; i < 5; i++){
        renderVarazslatOnFirstPage({addTextField, i})
    }
    renderVarazslatOnFirstPage({addTextField, i: 5, last: true})
}

function renderVarazslatOnSecondPage({addTextField, i, yOffset, rows, last}: RenderVarazslatParams) {
    yOffset = yOffset || 0
    rows = rows || 4
    addTextField({
        name: `varazskonyv_page2_spell${i}_nev`,
        x: 58,
        y: 748 - yOffset,
        w: 210,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page2_spell${i}_szint`,
        x: 280,
        y: 748 - yOffset,
        w: 12,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page2_spell${i}_hatoido`,
        x: 298.5,
        y: 748 - yOffset,
        w: 64,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page2_spell${i}_tav`,
        x: 364.5,
        y: 748 - yOffset,
        w: 23,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page2_spell${i}_terulet`,
        x: 389.5,
        y: 748 - yOffset,
        w: 92,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page2_spell${i}_mento`,
        x: 484.5,
        y: 748 - yOffset,
        w: 53,
        h: 18,
    })
    const rounded = last === true
    for (let j = 0; j < rows; j++) {
        addTextField({
            name: `varazskonyv_page2_spell${i}_leiras_${j}`,
            x: 58,
            y: 730 - yOffset - (16*j),
            w: 480,
            h: 16,
        })
    }
    addTextField({
        name: `varazskonyv_page2_spell${i}_leiras_${rows}`,
        x: 58 + (rounded ? 10 : 0),
        y: 730 - yOffset - (rows*16),
        w: 480 - (rounded ? 20 : 0),
        h: 16,
    })
}

export function renderVarazskonyvSecondPage(addTextField: RenderTextFieldFunc) {
    renderVarazslatOnSecondPage({addTextField, i: 0, yOffset: 0})
    renderVarazslatOnSecondPage({addTextField, i: 1, yOffset: 103})
    renderVarazslatOnSecondPage({addTextField, i: 2, yOffset: 205})
    renderVarazslatOnSecondPage({addTextField, i: 3, yOffset: 310})
    renderVarazslatOnSecondPage({addTextField, i: 4, yOffset: 412})
    renderVarazslatOnSecondPage({addTextField, i: 5, yOffset: 517, rows: 3})
    renderVarazslatOnSecondPage({addTextField, i: 6, yOffset: 608, last: true})
}

function renderVarazslatOnBookPage({addTextField, i, page, xOffset, yOffset, rows, last}: RenderVarazslatParams) {
    xOffset = xOffset || 0
    yOffset = yOffset || 0
    rows = rows || 4
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_nev`,
        x: 58 + xOffset,
        y: 748 - yOffset,
        w: 210 - 28,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_szint`,
        x: 280 + xOffset -28,
        y: 748 - yOffset,
        w: 12,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_hatoido`,
        x: 298.5 + xOffset -28,
        y: 748 - yOffset,
        w: 64,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_tav`,
        x: 364.5 + xOffset -28,
        y: 748 - yOffset,
        w: 23,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_terulet`,
        x: 389.5 + xOffset -28,
        y: 748 - yOffset,
        w: 92,
        h: 18,
    })
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_mento`,
        x: 484.5 + xOffset -28,
        y: 748 - yOffset,
        w: 53,
        h: 18,
    })
    const rounded = last === true
    for (let j = 0; j < rows; j++) {
        addTextField({
            name: `varazskonyv_page${page}_spell${i}_leiras_${j}`,
            x: 58 + xOffset,
            y: 730 - yOffset - (16*j),
            w: 480 - 28,
            h: 16,
        })
    }
    addTextField({
        name: `varazskonyv_page${page}_spell${i}_leiras_${rows}`,
        x: 58 + (rounded ? 10 : 0) + xOffset,
        y: 730 - yOffset - (rows*16) + 3,
        w: 480 - (rounded ? 20 : 0) - 28,
        h: 14,
    })
}

export function renderVarazskonyvRightPage(addTextField: RenderTextFieldFunc) {
    renderVarazslatOnBookPage({addTextField, i: 0, page: 3, xOffset: 29, yOffset: 1})
    renderVarazslatOnBookPage({addTextField, i: 1, page: 3, xOffset: 29, yOffset: 101})
    renderVarazslatOnBookPage({addTextField, i: 2, page: 3, xOffset: 29, yOffset: 200})
    renderVarazslatOnBookPage({addTextField, i: 3, page: 3, xOffset: 29, yOffset: 299})
    renderVarazslatOnBookPage({addTextField, i: 4, page: 3, xOffset: 29, yOffset: 399})
    renderVarazslatOnBookPage({addTextField, i: 5, page: 3, xOffset: 29, yOffset: 498})
    renderVarazslatOnBookPage({addTextField, i: 6, page: 3, xOffset: 29, yOffset: 603, last: true})
}

export function renderVarazskonyvLeftPage(addTextField: RenderTextFieldFunc) {
    renderVarazslatOnBookPage({addTextField, i: 0, page: 4, yOffset: 2})
    renderVarazslatOnBookPage({addTextField, i: 1, page: 4, yOffset: 101})
    renderVarazslatOnBookPage({addTextField, i: 2, page: 4, yOffset: 201})
    renderVarazslatOnBookPage({addTextField, i: 3, page: 4, yOffset: 300})
    renderVarazslatOnBookPage({addTextField, i: 4, page: 4, yOffset: 399})
    renderVarazslatOnBookPage({addTextField, i: 5, page: 4, yOffset: 498})
    renderVarazslatOnBookPage({addTextField, i: 6, page: 4, yOffset: 603, last: true})
}