
export function cardNumberMask(value: any) {

    return value
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)$/, '$1')
}

export function expirationDateMask(value: any) {

    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)$/, '$1')

}

export function cvvMask(value: any) {

    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)$/, '$1')
}