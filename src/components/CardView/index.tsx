import * as React from 'react';
import styles from '../../../styles/Home.module.css';
import {useState} from 'react';
import {useAddCardCreditsMutation} from '../../generated/graphql';

export function CardView() {

    const [cardValue, setCardValue] = useState<string>('**** **** **** ****');
    const [addCardCreditsMutation] = useAddCardCreditsMutation();

    function addWhiteSpace() {
        const cardNumber = (document.getElementById('cardNumber') as HTMLInputElement)?.value.trim();
        const whiteSpace = ' ';
        if (cardNumber.length === (4 || 8 || 12)) {
            setCardValue(cardNumber + whiteSpace);
        }
    }

    async function sendData() {
        const cardNumber = Number((document.getElementById('cardNumber') as HTMLInputElement)?.value.trim());
        const expirationDate = (document.getElementById('expirationDate') as HTMLInputElement)?.value.trim();
        const CVV = Number((document.getElementById('CVV') as HTMLInputElement)?.value.trim());
        const amount = Number((document.getElementById('amount') as HTMLInputElement)?.value.trim());

        try {
            await addCardCreditsMutation({
                variables: {
                    cardNumber,
                    expirationDate,
                    CVV,
                    amount
                }
            });
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '97.8vh'}}>
            <div style={{display: 'block', width: '40vw', height: '25vw', position: 'relative'}} >
                <div className={styles.card_body} style={{
                    left: '0', top: '0', zIndex: '2', position: 'fixed', marginTop: '7vw', marginLeft: '30vw', backgroundColor: '#50C878',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'
                }}>
                    <input type={'tel'} placeholder={cardValue} pattern={'[| ]{16}'} style={{
                        border: 'transparent', backgroundColor: 'transparent', fontSize: '32px',
                        outline: 'none'
                    }} maxLength={16} onChange={addWhiteSpace} id={'cardNumber'}/>
                </div>
                <input type={'tel'} placeholder={'**/**'} style={{
                    zIndex: '5', position: 'relative', marginTop: '18vw', marginLeft: '5vw',
                    border: 'transparent', backgroundColor: 'transparent', fontSize: '32px', outline: 'none'
                }} id={'expirationDate'}/>
                <div className={styles.card_body} style={{right: '0', bottom: '0', zIndex: '1', position: 'fixed', marginBottom: '15vw', marginRight: '30vw', backgroundColor: '#50C878'}}>
                    <input type={'tel'} placeholder={'cvv'} style={{
                        right: '0', bottom: '0', margin: '2vw', position: 'absolute',
                        border: 'transparent', backgroundColor: 'transparent', fontSize: '32px', outline: 'none'
                    }} id={'CVV'}/>
                </div>
            </div>
            <br/>
            <input type={'number'} placeholder={'amount'} style={{position: 'relative'}} id={'amount'}/>
            <button style={{position: 'relative'}} onClick={
                () => sendData()
            }>
                Send
            </button>
        </div>
    );
}
