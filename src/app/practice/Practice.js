import React from 'react'
import { GenericHeader } from '../shared'


const ButtonHard = ({opType}) =>
    <div className='practice-button'>
        <div className='practice-button-optype'>
            {opType}
        </div>
        <div className='practice-button-difficulty-hard'>
            difícil 
        </div>
    </div>


const ButtonIntermediate = ({opType}) =>
    <div className='practice-button'>
        <div className='practice-button-optype'>
            {opType}
        </div>
        <div className='practice-button-difficulty-intermediate'>
            medio 
        </div>
    </div>


const ButtonBasic = ({opType}) =>
    <div className='practice-button'>
        <div className='practice-button-optype'>
            {opType}
        </div>
        <div className='practice-button-difficulty-basic'>
            básico 
        </div>
    </div>


const NormalRow = ({opType}) =>
    <div className='practice-row'>
        <ButtonBasic opType={opType} />
        <ButtonIntermediate opType={opType} />
        <ButtonHard opType={opType} />
    </div>



const FirstRow = () =>
    <div className='practice-row'>
        <ButtonBasic opType='1+1' />
        <ButtonIntermediate opType='1x1' />
        <ButtonHard opType='2+2' />
    </div>


const List = () =>
    <div className='practice-list'>
        <FirstRow opType='2x1'/>
        <NormalRow opType='2x1'/>
        <NormalRow opType='3x1'/>
        <NormalRow opType='2²' />
        <NormalRow opType='4x1' />
        <NormalRow opType='3²' />
        <NormalRow opType='4²' />
    </div>


const Practice = () =>
    <div className='screen'>
        <GenericHeader title='practica' />
        <List />
    </div>


export default Practice
