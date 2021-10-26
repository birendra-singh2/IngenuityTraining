namespace edu {
    export namespace ankush {
        export namespace training {
            export namespace lanugage {
                export enum LangCode {
                    'ENGLISH-US' = 'en-us',
                    'ENGLISH-UK' = 'en-uk',
                    'ENGLISH-INDIA' = 'en-in'
                };
                export class Language {
                    private lang: LangCode;
                    constructor(langCode: LangCode) {
                        this.lang = langCode;
                    }

                    public getText(textId:string, langCode?:LangCode):string {
                        const lang = langCode ?? this.lang;
                        const langObj = langString[lang];
                        return langObj[textId];
                    }

                }

                const langString:{[key:string]:any} = {
                    'en-us':{
                        'bank-note': 'Check',
                        'colour': 'Color'
                    },
                    'en-uk':{
                        'bank-note': 'Cheque',
                        'colour': 'Colour'
                    },
                    'en-in':{
                        'bank-note': 'Cheque',
                        'colour': 'Colour and Color and Raang'
                    },
                }
            }
        }
    }

}