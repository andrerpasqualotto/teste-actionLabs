
//Requisições API

export const fetchDailyExchangeRate: any = async (from: string, to: string) => {
    const response = await fetch(`https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=${import.meta.env.API_KEY}&from_symbol=${from}&to_symbol=${to}`)

    const data = await response.json()


    if (!response.ok) {
        return false
    }

    return data;
}



export const fetchCurrentExchangeRate: any = async (from: string, to: string) => {
    const response = await fetch(`https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=${import.meta.env.API_KEY}&from_symbol=${from}&to_symbol=${to}`)

    const data = await response.json()

    if (!response.ok) {

        return false;

    }

    return data;
}

