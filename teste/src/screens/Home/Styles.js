import styled from 'styled-components/native';
import commonStyles from '../../commonStyles';

export const Container = styled.View`
flex:1;
background-color:#F7F9F8;
font-family: Nunito Sans;`


export const TitleBar = styled.View`
flex:1;
flex-direction: row;
align-items: center;
justify-content: space-around;
`



export const MiddleBar = styled.View`
flex:2;`

export const BottomBar = styled.View`
flex:4;


align-items: center;
justify-content: flex-start;`

export const Title = styled.Text`
    font-size: 24;
    font-weight:600 ;
`
export const Mode = styled.TouchableOpacity`
`

export const TextMode = styled.Text`
    font-size:18;
    
`


export const SubTitle = styled.Text`
    font-family: ${commonStyles.fontFamily};
    color: ${commonStyles.colors.secondary};
    font-size: 20;
    margin-left: 20;
    margin-bottom: 30;
`

export const ViewCountry = styled.View`
border-radius:20;
border-width:10;
border-color:#E7ECE9;`

export const ViewTextSub = styled.View`
flex:2;
flex-direction:row;
margin-top:15;
margin-bottom:10`

export const ViewTextSubL = styled.View`
flex:1;
align-items: flex-start;
justify-content: flex-start;
margin-left:15`

export const ViewTextSubR = styled.View`
flex:1;
align-items: flex-start;
justify-content: flex-start;
margin-left:10`

export const ViewTextT= styled.View`
flex:1;
align-items: flex-start;
justify-content: flex-start;
margin-top:10`


export const TextTC= styled.Text`
font-size:18;
font-weight:600;`

export const TextSubC= styled.Text`
font-size:14;
font-weight:600;`

export const TextSubCInf= styled.Text`
font-size:14`