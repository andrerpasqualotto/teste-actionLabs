
import { fetchDailyExchangeRate, fetchCurrentExchangeRate } from './utils/fetch';
import { useState, useEffect, useRef } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import InputText from './components/ui/input-text';
import Button from './components/ui/button';
import Card from './components/ui/card'
import { Separator } from './components/ui/separator';
import Container from './components/ui/container';
import ExchangeData from './components/exchange-data';
import ExchangeValue from './components/exchange-value';
import { calculateDiff } from './utils';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion"

function App() {
  const [exchangeData, setExchangeData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [apiError, setApiError] = useState(false)
  const [currency, setCurrency] = useState("");
  const input = useRef()

  
  useEffect(() => {
    console.log(inputError)
    
    const fetchApi = async (token) => {
      if(token?.length<3 && token?.length>0){
        setInputError(true);
        return false;
      }
      setInputError(false);
      setApiError(false);
      setIsLoading(true);
  
      const currentExchange = await fetchCurrentExchangeRate(token, "BRL");
     
      const dailyExchange = await fetchDailyExchangeRate(token, "BRL");

      console.log(dailyExchange)
      if(dailyExchange.success && currentExchange.success){
       setExchangeData({
        daily:dailyExchange.data.slice(0,31),
        current: currentExchange})
     
      }else{
        setApiError(true)
      }
      

      setIsLoading(false)
    }


    setInputError(false)
    if(currency.length) {
      const fetchResponse = fetchApi(currency);
      
      if (!fetchResponse) {
        setInputError(true);
        input.current.focus();
      }
    }
    
  }, [currency])

  return (
    <>
      <Header></Header>

      <main className='mx-auto bg-background'>

        <Container>

          {inputError && <p className='text-diff-down text-center text-xs'>Code must contain 3 letters.</p>}
          {apiError && <p className='text-diff-down text-center text-xs'>Invalid code.</p>}
          <InputText ref={input}></InputText>
          <div>
            <Button text="EXCHANGE RESULT" 
            onClick={() => {
                setCurrency(input.current.value)}}>
              Buscar
            </Button>
          </div>
        </Container>

        <Separator className='my-8'></Separator>

        {isLoading && <h1 className="text-center">Loading...</h1>}
  
        {(exchangeData.current && !isLoading ) && 
        <Container>
          <div className='md:grid grid-cols-2 grid-rows-1'>
            <div className='md:col-span-1'>
              <ExchangeData currency={exchangeData.current.fromSymbol} date={exchangeData.current.lastUpdatedAt} />
            </div>
            <div className='md:col-span-1'>
              <ExchangeValue currencyValue={exchangeData.current.exchangeRate.toFixed(2).toLocaleString("pt-br")} className="w-[330px] mx-auto md:mr-auto md:ml-0 bg-primary-ghost mb-8" />
            </div>
          </div>
        </Container>}
        
        
        <Container>

          {(exchangeData.daily && !isLoading ) && 
          <div className="">
            <Accordion type="single" collapsible className="w-[330px] mx-auto my-8 md:w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger><span className='font-semibold text-base'>LAST 30 DAYS</span></AccordionTrigger>
                <AccordionContent>
                  <div className='flex justify-center flex-wrap gap-4 p-4 bg-gray-100'>
                   {exchangeData.daily.map((day, index, array)=>{
                    if(index<30){
                    return(
                    <Card 
                    key={day.date} 
                    {...day} 
                    percentage={(calculateDiff(array[index+1].close, day.close))
                    }>
                    </Card>)}
                   })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>}


        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
