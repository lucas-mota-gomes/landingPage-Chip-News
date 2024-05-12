interface IPlano {
    name: string,
    upload: string,
    download?: string,
    popular?: boolean,
    price: number,
    description?: string,
    features: IFeature[]
}

interface IFeature {
    name: string,
    icon: string
}

interface IPricing {
    internet: IPlano[],
    combo?: IPlano[],
    tv?: IPlano[]
    telefoniaFixa?: IPlano[],
    telefoniaMovel?: IPlano[]
}

export { IPlano, IFeature, IPricing };