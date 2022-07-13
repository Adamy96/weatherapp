import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Homepage, SearchPage, SettingsPage } from '@pages'
import { colors } from '@styles'

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            switch (route.name) {
              case 'Home':
                iconName = 'home'
                break
              case 'Search':
                iconName = 'home'
                break
              case 'Settings':
                iconName = 'settings'
                break
              default:
                iconName = 'circle'
                break
            }
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#9C27B0',
          inactiveTintColor: '#777'
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen
          name="Search"
          component={SearchPage}
          options={() => ({
            tabBarIcon: () => (
              <View>
                <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#4A148C']}>
                  <Icon name="plus" size={26} color='#FFF'/>
                </LinearGradient>
              </View>
            ),
          })}
        />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});

export default Navigation