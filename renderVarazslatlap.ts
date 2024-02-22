import {RenderTextFieldFunc} from "./helpers";

interface PreparedSpellsParams {
    addTextField: RenderTextFieldFunc;
    prefix: string;
    varazslatszint: number;
    xOffset: number;
    yOffset: number;
    max: number;
    hasBonusz?: boolean;
}

function renderPreparedSpells(
    {addTextField, prefix, varazslatszint, xOffset, yOffset, max, hasBonusz}: PreparedSpellsParams) {
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

interface EgyszeriVarazslatFullCaster {
    addTextField: RenderTextFieldFunc;
    i: number;
    last?: boolean;
}

function renderEgyszeriVarazslat({addTextField, i, last}: EgyszeriVarazslatFullCaster) {
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

interface EgyszeriVarazslatHalfCaster {
    addTextField: RenderTextFieldFunc;
    i: number;
    last?: boolean;
}

function renderEgyszeriVarazslatHalfCaster({addTextField, i, last}: EgyszeriVarazslatHalfCaster,) {
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

export function renderFullCasterVarazslatlap(addTextField: RenderTextFieldFunc) {
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

    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_full', varazslatszint : 0, xOffset : 0, yOffset : 0, max : 7});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_full', varazslatszint : 1, xOffset : 247, yOffset : -20, max : 6, hasBonusz : true});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_full', varazslatszint : 2, xOffset : 0, yOffset : -170, max : 5, hasBonusz : true});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_full', varazslatszint : 3, xOffset : 247, yOffset : -170, max : 5, hasBonusz : true});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_full', varazslatszint : 4, xOffset : 0, yOffset : -301, max : 3} );
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_full', varazslatszint : 5, xOffset : 247, yOffset : -301, max : 3} );

    renderEgyszeriVarazslat({addTextField : addTextField, i : 0});
    renderEgyszeriVarazslat({addTextField : addTextField, i : 1});
    renderEgyszeriVarazslat({addTextField : addTextField, i : 2, last : true});
}

export function renderHalfCasterVarazslatlap(addTextField: RenderTextFieldFunc) {
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

    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_half', varazslatszint : 0, xOffset : 0, yOffset : -3, max : 5});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_half', varazslatszint : 1, xOffset : 247, yOffset : -3, max : 5});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_half', varazslatszint : 2, xOffset : 0, yOffset : -133, max : 4});
    renderPreparedSpells({addTextField : addTextField, prefix : 'varazslatlap_half', varazslatszint : 3, xOffset : 247, yOffset : -133, max : 3});

    renderEgyszeriVarazslatHalfCaster({addTextField : addTextField, i : 0});
    renderEgyszeriVarazslatHalfCaster({addTextField : addTextField, i : 1});
    renderEgyszeriVarazslatHalfCaster({addTextField : addTextField, i : 2});
    renderEgyszeriVarazslatHalfCaster({addTextField : addTextField, i : 3, last : true});
}
