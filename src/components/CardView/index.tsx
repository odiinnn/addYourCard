/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';
import styles from '../../../styles/Home.module.css';
import {useState} from 'react';
import {useAddCardCreditsMutation} from '../../generated/graphql';
import {ModalAlert, useModalAlertSettings} from '../ModalAlert';
import Input from '@mui/material/Input';
import Image from 'next/image';

export function CardView() {

    const [cardValue, setCardValue] = useState<string>('');
    const [expDateValue, setExpDateValue] = useState<string>('');

    const [rightCardNumber, setRightCardNumber] = useState<boolean>(false);
    const [rightExpDate, setRightExpDate] = useState<boolean>(false);
    const [rightCvv, setRightCvv] = useState<boolean>(false);
    const [rightAmount, setRightAmount] = useState<boolean>(false);


    const [addCardCreditsMutation] = useAddCardCreditsMutation();

    const {setModalIsOpen, setAlertText, setAlertType} = useModalAlertSettings();

    function addWhiteSpace() {
        setRightCardNumber(false);
        const cardNumber = (document.getElementById('cardNumber') as HTMLInputElement)?.value;
        setCardValue(cardNumber);
        const whiteSpace = ' ';
        if (cardNumber.length === 4 || cardNumber.length === 9 || cardNumber.length === 14) {
            setCardValue(cardNumber + whiteSpace);
        }
    }

    function addSlash() {
        setRightExpDate(false);
        const expDate = (document.getElementById('expirationDate') as HTMLInputElement)?.value;
        setExpDateValue(expDate);
        const slash = '/';
        if (expDate.length === 2) {
            setExpDateValue(expDate + slash);
        }
    }

    // eslint-disable-next-line complexity
    async function sendData() {
        const cardNumber = Number((document.getElementById('cardNumber') as HTMLInputElement)?.value.split(' ').join(''));
        const expirationDate = (document.getElementById('expirationDate') as HTMLInputElement)?.value.trim();
        const CVV = Number((document.getElementById('CVV') as HTMLInputElement)?.value.trim());
        const amount = Number((document.getElementById('amount') as HTMLInputElement)?.value.trim());

        if (!cardNumber || typeof cardNumber !== 'number') {
            setModalIsOpen(true);
            setAlertText('Please enter right card number');
            setAlertType('error');
            setRightCardNumber(true);
        } else if (!expirationDate || expirationDate.indexOf('/') !== 2 || !Number(expirationDate.split('/')[0]) || !Number(expirationDate.split('/')[1]) || Number(expirationDate.split('/')[1]) < 1000) {
            setModalIsOpen(true);
            setAlertText('Please enter right expiration date');
            setAlertType('error');
            setRightExpDate(true);
        } else if (!CVV || CVV < 100) {
            setModalIsOpen(true);
            setAlertText('Please enter right CVV');
            setAlertType('error');
            setRightCvv(true);
        } else if (!amount) {
            setModalIsOpen(true);
            setAlertText('Please enter right amount');
            setAlertType('error');
            setRightAmount(true);
        } else {
            try {
                await addCardCreditsMutation({
                    variables: {
                        cardNumber,
                        expirationDate,
                        CVV,
                        amount
                    }
                });
                setModalIsOpen(true);
                setAlertText('Evrethin fine :)');
                setAlertType('success');
            } catch (e: any) {
                console.log(e);
                setModalIsOpen(true);
                setAlertText(e.message);
                setAlertType('error');
            }
        }
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '97.8vh'}}>
            <div style={{display: 'block', width: '40vw', height: '25vw', position: 'relative'}} >

                <div className={styles.card_body} style={{
                    left: '0', top: '0', zIndex: '2', position: 'fixed', marginTop: '7vw', marginLeft: '30vw', backgroundColor: '#50C878',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'
                }}>
                    <div style={{width: '6%', height: '4vw', position: 'fixed', zIndex: '5', marginTop: '-12vw', marginLeft: '-20vw'}}>
                        <Image src="/visa.svg" alt="" layout="fill" objectFit="contain"/>
                    </div>
                    <input type={'tel'} placeholder={'**** **** **** ****'} style={{
                        border: `${rightCardNumber ? '2px solid red' : 'transparent'}`, backgroundColor: 'transparent', fontSize: '32px',
                        outline: 'none', textAlign: 'center', width: '22vw',
                        boxShadow: '0 0 10px 4px green'
                    }} maxLength={19} onChange={addWhiteSpace} id={'cardNumber'} value={cardValue}/>
                </div>
                <input type={'tel'} placeholder={'**/**'} style={{
                    zIndex: '5', position: 'relative', marginTop: '18vw', marginLeft: '5vw', width: '9vw', textAlign: 'center',
                    border: `${rightExpDate ? '2px solid red' : 'transparent'}`, backgroundColor: 'transparent', fontSize: '32px', outline: 'none',
                    boxShadow: '0 0 10px 4px green'
                }} id={'expirationDate'} onChange={addSlash} value={expDateValue} maxLength={7}/>
                <div className={styles.card_body} style={{right: '0', bottom: '0', zIndex: '1', position: 'fixed', marginBottom: '15vw', marginRight: '30vw', backgroundColor: '#50C878'}}>
                    <input type={'tel'} placeholder={'cvv'} style={{
                        left: '0', bottom: '0', margin: '2vw', position: 'absolute', width: '4vw', textAlign: 'center',
                        border: `${rightCvv ? '2px solid red' : 'transparent'}`, backgroundColor: 'transparent', fontSize: '32px', outline: 'none',
                        boxShadow: '0 0 10px 4px green'
                    }} id={'CVV'} maxLength={3} onChange={() => setRightCvv(false)}/>
                </div>
            </div>
            <br/>
            <Input placeholder={'Amount'} style={{position: 'relative', border: `${rightAmount ? '2px solid red' : 'transparent'}`, color: 'white', boxShadow: '0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db'}} id={'amount'} onChange={() => setRightAmount(false)}/>
            <button className={styles.button_gradient} style={{position: 'relative'}} onClick={
                () => sendData()
            }>
                Send
            </button>
            <ModalAlert/>
        </div>
    );
}
