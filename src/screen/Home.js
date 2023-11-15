import {Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';
import HomeComponent from '../component/section/homeAndTracking/HomeComponent';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import homeHelper from '../apiManagement/homeHelper';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [dashboardData, setDashboardData] = useState({});
  const [tradeInData, setTradeInData] = useState({});
  const [newCarData, setNewCarData] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    if (session.token && account) {
      setDashboardDataProcess();
      setTradeInProcess();
      setNewCarProcess();
    } else {
      navigation.replace('AuthRouting');
    }
  }, [isFocused]);

  const setDashboardDataProcess = async () => {
    const response = await homeHelper.dashboardHelper(session.token);
    setDashboardData(response);
  };

  const setTradeInProcess = async () => {
    const response = await homeHelper.tradeInHelper(session.token);
    setTradeInData(response);
  };

  const setNewCarProcess = async () => {
    const response = await homeHelper.newCarHelper(session.token);
    setNewCarData(response);
  };

  return (
    <View style={{flex: 1}}>
      <HomeComponent
        dashboardData={dashboardData}
        tradeInData={tradeInData}
        newCarData={newCarData}
      />
    </View>
  );
};

export default Home;
