import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'white' , tabBarLabelStyle:{fontFamily:'outfit' , fontSize: 10}, headerShown: false , tabBarStyle:{backgroundColor:'black' , bottom:20, marginHorizontal: 20 , borderRadius:33 , height: 70 , paddingBottom: 8 , position:'absolute', shadowColor:'skyblue' , shadowOffset:{width:10 , height:10} , elevation: 10 ,}}}
    >
      <Tabs.Screen
        name="MyTrip"
        options={{
          title: 'MyTrip',
            tabBarIcon: ({ color }) => <FontAwesome6 name="plane-up" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Expenses"
        options={{
          title: 'Expenses',
          tabBarIcon: ({ color }) => <FontAwesome6 name="sack-dollar" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
