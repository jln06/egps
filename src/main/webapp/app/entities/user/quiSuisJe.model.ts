export interface IQuiSuisJe {
  titre: string;
  sousTitre: string;
  description: string;
  photo?: File;
  telephone: string;
}

export class QuiSuisJe implements IQuiSuisJe {
  constructor(public description: string, public photo: File, public sousTitre: string, public telephone: string, public titre: string) {}
}
