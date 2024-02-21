import {PDFTextField} from "pdf-lib";
import {TextFieldOptions} from "./helpers";

function renderPreparedSpells(
    addTextField: (options: TextFieldOptions) => PDFTextField,
    prefix: string,
    varazslatszint: number,
    xOffset: number,
    yOffset: number,
    max: number,
    hasBonusz?: boolean) {
    addTextField({
        name: `${prefix}_${varazslatszint}szintu_darab`,
        x: 194 + xOffset,
        y: 685 + yOffset,
        w: 8,
        h: 18,
    })
    addTextField({
        name: `${prefix}_${varazslatszint}szintu_nf`,
        x: 265 + xOffset,
        y: 685 + yOffset,
        w: 20,
        h: 18,
    })
    for (let i = 0; i < max - 1; i++) {
        addTextField({
            name: `${prefix}_${varazslatszint}szintu_${i}`,
            x: 58 + xOffset,
            y: 665 + yOffset - (i * 19.85),
            w: 233,
            h: 18,
        })
    }
    addTextField({
        name: `${prefix}_${varazslatszint}szintu_${max - 1}`,
        x: 65 + xOffset + (hasBonusz === true ? 30 : 0),
        y: 665 + yOffset - ((max - 1) * 19.85),
        w: 218 - (hasBonusz === true ? 30 : 0),
        h: 18,
    })
}

function renderEgyszeriVarazslat(
    addTextField: (options: TextFieldOptions) => PDFTextField,
    i: number,
    last?: boolean,) {
    const offset = 74;
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_nev`,
        x: 58,
        y: 259 - (i*offset),
        w: 210,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_szint`,
        x: 280,
        y: 259 - (i*offset),
        w: 12,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_hatoido`,
        x: 298.5,
        y: 259 - (i*offset),
        w: 64,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_tav`,
        x: 364.5,
        y: 259 - (i*offset),
        w: 23,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_terulet`,
        x: 389.5,
        y: 259 - (i*offset),
        w: 92,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_mento`,
        x: 484.5,
        y: 259 - (i*offset),
        w: 53,
        h: 18,
    })
    const rounded = last === true
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_leiras_0`,
        x: 58,
        y: 240 - (i*offset),
        w: 480,
        h: 16,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_leiras_1`,
        x: 58,
        y: 240 - (i*offset) - 16,
        w: 480,
        h: 16,
    })
    addTextField({
        name: `varazslatlap_full_egyszeri_${i}_leiras_2`,
        x: 58 + (rounded ? 10 : 0),
        y: 240 - (i*offset) - 32,
        w: 480 - (rounded ? 20 : 0),
        h: 16,
    })
}

function renderEgyszeriVarazslatHalfCaster(
    addTextField: (options: TextFieldOptions) => PDFTextField,
    i: number,
    last?: boolean,) {
    const offset = 91;
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_nev`,
        x: 58,
        y: 401 - (i*offset),
        w: 210,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_szint`,
        x: 280,
        y: 401 - (i*offset),
        w: 12,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_hatoido`,
        x: 298.5,
        y: 401 - (i*offset),
        w: 64,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_tav`,
        x: 364.5,
        y: 401 - (i*offset),
        w: 23,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_terulet`,
        x: 389.5,
        y: 401 - (i*offset),
        w: 92,
        h: 18,
    })
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_mento`,
        x: 484.5,
        y: 401 - (i*offset),
        w: 53,
        h: 18,
    })
    const rounded = last === true
    for (let j = 0; j < 3; j++) {
        addTextField({
            name: `varazslatlap_half_egyszeri_${i}_leiras_${j}`,
            x: 58,
            y: 381 - (i*offset) - (16*j),
            w: 480,
            h: 16,
        })
    }
    addTextField({
        name: `varazslatlap_half_egyszeri_${i}_leiras_3`,
        x: 58 + (rounded ? 10 : 0),
        y: 381 - (i*offset) - 48,
        w: 480 - (rounded ? 20 : 0),
        h: 16,
    })
}

export function renderFullCasterVarazslatlap(addTextField: (options: TextFieldOptions) => PDFTextField) {
    addTextField({
        name: 'varazslatlap_full_nev_faj_osztaly',
        x: 56,
        y: 731,
        w: 420,
        h: 16,
    })
    addTextField({
        name: 'varazslatlap_full_szint',
        x: 493,
        y: 711,
        w: 36,
        h: 36,
    })

    renderPreparedSpells(addTextField, 'varazslatlap_full', 0, 0, 0, 7);
    renderPreparedSpells(addTextField, 'varazslatlap_full',1, 247, -20, 6, true);
    renderPreparedSpells(addTextField, 'varazslatlap_full',2, 0, -170, 5, true);
    renderPreparedSpells(addTextField, 'varazslatlap_full',3, 247, -170, 5, true);
    renderPreparedSpells(addTextField, 'varazslatlap_full',4, 0, -301, 3 );
    renderPreparedSpells(addTextField, 'varazslatlap_full',5, 247, -301, 3 );

    renderEgyszeriVarazslat(addTextField,0);
    renderEgyszeriVarazslat(addTextField,1);
    renderEgyszeriVarazslat(addTextField,2, true);
}

export function renderHalfCasterVarazslatlap(addTextField: (options: TextFieldOptions) => PDFTextField) {
    addTextField({
        name: 'varazslatlap_half_nev_faj_osztaly',
        x: 56,
        y: 731,
        w: 420,
        h: 16,
    })
    addTextField({
        name: 'varazslatlap_half_szint',
        x: 493,
        y: 726,
        w: 36,
        h: 36,
    })

    renderPreparedSpells(addTextField, 'varazslatlap_half',0, 0, -3, 5);
    renderPreparedSpells(addTextField, 'varazslatlap_half',1, 247, -3, 5);
    renderPreparedSpells(addTextField, 'varazslatlap_half',2, 0, -133, 4);
    renderPreparedSpells(addTextField, 'varazslatlap_half',3, 247, -133, 3);

    renderEgyszeriVarazslatHalfCaster(addTextField,0);
    renderEgyszeriVarazslatHalfCaster(addTextField,1);
    renderEgyszeriVarazslatHalfCaster(addTextField,2);
    renderEgyszeriVarazslatHalfCaster(addTextField,3, true);
}
