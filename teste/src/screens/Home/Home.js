import React, { Component } from 'react';
import {
  StyleSheet ,Text, FlatList, View, Picker
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import { logicalExpression } from '@babel/types';
import api from '../../services/api';

import { Container, TitleBar, Title, MiddleBar, BottomBar, Mode, TextMode,
 ViewTextSub,ViewTextT, ViewTextSubR, ViewTextSubL,TextTC,TextSubC,TextSubCInf,ViewCountry } from './Styles';
import { SearchBar, Input } from 'react-native-elements';


export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      region: 'n',
      id: '',
      enableListCountry: false,
      country: null,
      countryFilter: null,
    };
  }

  async componentDidMount() {
    this.loadCountry();
  }

  async handleChangeOption() {
    if (this.state.region !== 'n') {
      await this.setState({countryFilter: this.state.country});
      const country = this.state.countryFilter.filter((country) => {
        return country.region === this.state.region;
      });
      this.setState({countryFilter: country});
    }
  }

  updateSearch = search => {
    this.setState({search});
    const country = this.state.country.filter((country) => {
      return country.name === search;
    });
    this.setState({countryFilter: country});
  };


  async loadCountry() {
    try {
      const response = await api.get('/all');
      //data[0].name
      const country = response.data.map((country) => {
        return { "name": country.name, "capital": country.capital,"population": country.population,"region":country.region,"flag":country.flag }
      });
      
      this.setState({ country: country, countryFilter: country, enableListCountry: true });

    } catch (err) {
      console.log(err.message);
    }
  }



  render() {
    // const { navigation } = this.props
    const { search } = this.state;
    return (
      <Container>

        <TitleBar>
          <Title>
            Where in the world ?
                        </Title>
          <Mode>
            <TextMode>Dark mode</TextMode>
          </Mode>
        </TitleBar>
        <MiddleBar>
          <SearchBar
            lightTheme='true'
            placeholder="Type Here..."
            onSubmitEditing={this.updateSearch}
            value = {search}
          />
          <Picker
            selectedValue={this.state.region}
            style={{ height: 60, width: 180 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ region: itemValue }, () => this.handleChangeOption())
            }>
            <Picker.Item label="Filter by region" value="n" />
            <Picker.Item label="Africa" value="Africa" />
            <Picker.Item label="America" value="Americas" />
            <Picker.Item label="Asia" value="Asia" />
            <Picker.Item label="Europe" value="Europe" />
            <Picker.Item label="Oceania" value="Oceania" />
          </Picker>

        </MiddleBar>
        <BottomBar>

          {this.state.enableListCountry ?

<FlatList
  data={this.state.countryFilter}
  keyExtractor={(item, index) => item.name}
  renderItem={({item}) => 
  


  <ViewCountry>

<SvgUri
width="300"
height="100"
source={{uri:'https://restcountries.eu/data/ala.svg'}}
/>
<ViewTextT>
    <TextTC>{item.name} </TextTC>
    </ViewTextT>
  
    <ViewTextSub>
    <ViewTextSubL>
    <TextSubC>Population:</TextSubC>
    
    <TextSubC>Region:</TextSubC> 
    
    <TextSubC>Capital:</TextSubC>
    
    </ViewTextSubL>

    <ViewTextSubR>
    <TextSubCInf>{item.population}</TextSubCInf>
     
    <TextSubCInf>{item.region}</TextSubCInf>
    
    <TextSubCInf>{item.capital}</TextSubCInf>

    
    </ViewTextSubR>
    </ViewTextSub>
  
  </ViewCountry>
  
  
  
  }
/>

            : <Text>Please wait, loading information.</Text>}



        </BottomBar>
      </Container>
    )
  }
}

const styles = StyleSheet.create({

  TextTitle: {
    fontSize:10,
    fontFamily: 'center',
  },  STextTitle: {
    fontSize:10,
    fontFamily: 'center',
  },
  STextContent: {
    fontSize:10,
    fontFamily: 'center',
  }});