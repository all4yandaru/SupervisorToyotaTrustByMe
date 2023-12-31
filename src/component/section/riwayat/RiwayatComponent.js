import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import {Colors} from '../../../styles';
import {TextBold} from '../../global';
import RiwayatNewCarComponent from './RiwayatNewCarComponent';
import RiwayatTradeInComponent from './RiwayatTradeInComponent';

const RiwayatComponent = () => {
  const [activeMenu, setActiveMenu] = useState('Trade In');

  return (
    // {/* <StatusBar barStyle={'light-content'} translucent /> */}
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'column'}}>
        {/* Background Warna Biru------------------------------------------------------------------------- */}
        <View
          style={{
            flex: 1,
            padding: 16,
            height: 135,
            backgroundColor: Colors.BLUE,
          }}>
          <TextBold
            text="Riwayat"
            size={20}
            color={Colors.WHITE}
            style={{marginBottom: 16}}
          />
          {/* Text Input---------------------------------------------------------------------------------- */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                height: 48,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={{
                  flex: 1,
                  height: 48,
                  paddingLeft: 10,
                  alignItems: 'center',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  backgroundColor: Colors.WHITE,
                }}>
                Telusuri...
              </TextInput>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.WHITE,
                }}>
                <Image
                  source={require('../../../asset/Icons/telusuri.png')}
                  style={{width: 16, height: 16}}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                marginLeft: 12,
                backgroundColor: Colors.WHITE,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../asset/Icons/tune.png')}
                style={{width: 21, height: 21}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Background Warna Abu-Abu --------------------------------------------------------------------- */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 36,
              borderWidth: 1,
              marginTop: -15,
              borderColor: Colors.GRAY,
              backgroundColor: Colors.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
            onPress={() => setActiveMenu('Trade In')}>
            <Text
              style={{
                color: activeMenu == 'Trade In' ? Colors.BLUE : Colors.GRAY,
              }}>
              Trade In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              height: 36,
              borderWidth: 1,
              marginTop: -15,
              borderColor: Colors.GRAY,
              backgroundColor: Colors.WHITE,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
            onPress={() => setActiveMenu('New Car')}>
            <Text
              style={{
                color: activeMenu == 'New Car' ? Colors.BLUE : Colors.GRAY,
              }}>
              New Car
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {activeMenu == 'Trade In' && <RiwayatTradeInComponent />}
      {activeMenu == 'New Car' && <RiwayatNewCarComponent />}
    </ScrollView>
  );
};

export default RiwayatComponent;
