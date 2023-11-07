import {Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';
import HomeComponent from '../component/section/homeAndTracking/HomeComponent';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import homeHelper from '../apiManagement/homeHelper';

const Home = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      if (session.token && account) {
        setDashboardDataProcess();
      } else {
        navigation.replace('AuthRouting');
      }
    }, 1000);
  });

  const setDashboardDataProcess = async () => {
    const response = await homeHelper.dashboardHelper(session.token);
    setDashboardData(response);
  };

  return (
    <View style={{flex: 1}}>
      <HomeComponent dashboardData={dashboardData} />
    </View>
  );
};

export default Home;
