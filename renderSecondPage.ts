import {RenderTextBoxFunc} from "./helpers";

export function renderSecondPage(addTextField: RenderTextBoxFunc): void {

    // specialis kepessegek
    for (let i = 0; i < 7; i++) {
        addTextField({
            name: `specialis_kepessegek_${i}`,
            x: 58,
            y: 752 - (16*i),
            w: 238,
            h: 16
        })
    }

    // varazstargyak
    for (let i = 0; i < 7; i++) {
        addTextField({
            name: `varazstargyak_${i}`,
            x: 299, // 58+238+3,
            y: 752 - (16*i),
            w: 238,
            h: 16
        })
    }

    for (let i = 0; i < 3; i++) {
        const offset = 164.7;
        addTextField({
            name: `koveto_${i}_nev`,
            x: 79 + (i*offset),
            y: 611.5,
            w: 121,
            h: 12,
        })
        addTextField({
            name: `koveto_${i}_osztaly`,
            x: 92 + (i*offset),
            y: 594.5,
            w: 115,
            h: 15,
        })
        addTextField({
            name: `koveto_${i}_max_hp`,
            x: 69.8 + (i*offset),
            y: 572,
            w: 16.8,
            h: 14,
        })
        addTextField({
            name: `koveto_${i}_aktualis_hp`,
            x: 100.5 + (i*offset),
            y: 571.8,
            w: 103,
            h: 12,
        })
        addTextField({
            name: `koveto_${i}_aktualis_hp_2`,
            x: 100.5 + (i*offset),
            y: 563,
            w: 103,
            h: 9,
        })
        addTextField({
            name: `koveto_${i}_vo`,
            x: 88 + (i*offset),
            y: 541,
            w: 20,
            h: 16,
        })
        addTextField({
            name: `koveto_${i}_kitartas`,
            x: 115 + (i*offset),
            y: 535,
            w: 26,
            h: 17,
        })
        addTextField({
            name: `koveto_${i}_reflex`,
            x: 146 + (i*offset),
            y: 535,
            w: 26,
            h: 17,
        })
        addTextField({
            name: `koveto_${i}_akaratero`,
            x: 177 + (i*offset),
            y: 535,
            w: 26,
            h: 17,
        })

        addTextField({
            name: `koveto_${i}_tamadas`,
            x: 97 + (i*offset),
            y: 515,
            w: 111,
            h: 16,
        })
        addTextField({
            name: `koveto_${i}_moral`,
            x: 86 + (i*offset),
            y: 495,
            w: 122,
            h: 16,
        })

        addTextField({
            name: `koveto_${i}_specialis_1`,
            x: 97 + (i*offset),
            y: 482,
            w: 111,
            h: 12,
        })
        addTextField({
            name: `koveto_${i}_specialis_2`,
            x: 58 + (i*offset),
            y: 471,
            w: 150,
            h: 12,
        })
        addTextField({
            name: `koveto_${i}_specialis_3`,
            x: 58 + (i*offset),
            y: 460,
            w: 150,
            h: 12,
        })

        for (let j = 0; j < 7; j++) {
            addTextField({
                name: `koveto_${i}_felszereles_${j}`,
                x: 58 + (i*offset),
                y: 441 - (j * 20),
                w: 150,
                h: 18,
            })
        }
        addTextField({
            name: `koveto_${i}_felszereles_7`,
            x: 68 + (i*offset),
            y: 302,
            w: 132,
            h: 18,
        })
    }

    for (let i = 0; i < 14; i++){
        addTextField({
            name: `egyeb_${i}`,
            x: 58,
            y: 256 - (i*15),
            w: 480,
            h: 16,
        })
    }

}