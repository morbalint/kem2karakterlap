import {PDFFont, PDFForm, PDFPage, PDFTextField, rgb} from "pdf-lib";

export interface TextFieldOptions {
    name: string,
    x: number,
    y: number,
    w: number,
    h: number,
    text?: string,
}

export type RenderTextBoxFunc = (options: TextFieldOptions) => PDFTextField;

export function addTextFieldFactory(form: PDFForm, pdfFont: PDFFont, page: PDFPage): RenderTextBoxFunc {
    return (options: TextFieldOptions) => {
        const field = form.createTextField(options.name)
        field.setText(options.text)
        field.addToPage(page, {
            x: options.x,
            y: options.y,
            font: pdfFont,
            borderColor: rgb(1, 1, 1),
            borderWidth: 0,
            width: options.w,
            height: options.h,
        })
        return field
    }
}